import {
  Instagram,
  Linkedin,
  Twitter,
  Mail,
} from "lucide-react";
import { cn } from "../lib/utils";
import { useToast } from "../hooks/use-toast";
import { useState } from "react";

export const Footer = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      toast({
        title: "Subscribed!",
        description: "You’ll now receive updates from me.",
      });
      setLoading(false);
    }, 1200);
  };

  return (
    <footer className="border-t border-border bg-background px-4 py-10">
      <div className="container mx-auto max-w-5xl flex flex-col gap-8">

        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between gap-6 items-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Ankala Veera Rahul Yadav. All rights reserved.
          </p>

          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/rahulyadav437/" className="text-muted-foreground hover:text-primary">
              <Linkedin size={20} />
            </a>
            <a href="rahulankala437@gmail.com" className="text-muted-foreground hover:text-primary">
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Subscribe */}
        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            disabled={loading}
            className={cn("cosmic-button")}
          >
            {loading ? "Subscribing..." : "Subscribe"}
          </button>
        </form>

      </div>
    </footer>
  );
};
