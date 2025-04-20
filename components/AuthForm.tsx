"use client";
import { z } from "zod";
import Link from "next/link";
import { toast } from "sonner";
import { auth } from "@/firebase/client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import { signIn, signUp } from "@/lib/actions/auth.action";
import FormField from "./FormField";
import Logo from "./common/logo";

const authFormSchema = (type: FormType) => {
  return z.object({
    name: type === "sign-up" ? z.string().min(3) : z.string().optional(),
    email: z.string().email(),
    password: z.string().min(3),
  });
};

const AuthForm = ({ type }: { type: FormType }) => {
  const router = useRouter();

  const formSchema = authFormSchema(type);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      if (type === "sign-up") {
        const { name, email, password } = data;

        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password,
        );

        const result = await signUp({
          uid: userCredential.user.uid,
          name: name!,
          email,
          password,
        });

        if (!result.success) {
          toast.error(result.message);
          return;
        }

        toast.success("Compte créé avec succès. Veuillez vous connecter.");
        router.push("/sign-in");
      } else {
        const { email, password } = data;

        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password,
        );

        const idToken = await userCredential.user.getIdToken();
        if (!idToken) {
          toast.error("Échec de la connexion. Veuillez réessayer.");
          return;
        }

        await signIn({
          email,
          idToken,
        });

        toast.success("Connecté avec succès.");
        router.push("/dashboard");
      }
    } catch (error) {
      console.log(error);
      toast.error(`Une erreur s'est produite: ${error}`);
    }
  };

  const isSignIn = type === "sign-in";

  return (
    <div className=" lg:min-w-[566px]">
      <div className="flex flex-col gap-6 card py-14 px-10">
        <div className="flex justify-center">
          <Logo />
        </div>

        <h3 className="text-center">
          {isSignIn
            ? "Connectez-vous à votre espace"
            : "Créez votre compte en 1 minute"}
        </h3>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-6 mt-4 form"
          >
            {!isSignIn && (
              <FormField
                control={form.control}
                name="name"
                label="Nom complet"
                placeholder="Votre nom et prénom"
                type="text"
              />
            )}

            <FormField
              control={form.control}
              name="email"
              label="Email"
              placeholder="Votre adresse email"
              type="email"
            />

            <FormField
              control={form.control}
              name="password"
              label="Mot de passe"
              placeholder="Entrez votre mot de passe"
              type="password"
            />

            <Button className="w-full" type="submit">
              {isSignIn ? "Se connecter" : "Créer un compte étudiant"}
            </Button>
          </form>
        </Form>

        <p className="text-center">
          {isSignIn ? "Nouvel étudiant ?" : "Déjà inscrit ?"}
          <Link
            href={!isSignIn ? "/sign-in" : "/sign-up"}
            className="font-bold text-user-primary ml-1"
          >
            {!isSignIn ? "Se connecter" : "S'inscrire"}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
