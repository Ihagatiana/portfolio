import { useLang } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, MessageCircle } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const { t } = useLang();
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:rihagatiana0@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`De: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  const whatsappLink = "https://wa.me/261343353407?text=" + encodeURIComponent(t("Bonjour Ihagatiana, je vous contacte depuis votre portfolio.", "Hello Ihagatiana, I'm reaching out from your portfolio."));

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6 text-center"
        >
          {t("Contactez-moi", "Get in Touch")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground max-w-lg mx-auto mb-8 text-center"
        >
          {t(
            "Je suis actuellement ouvert aux opportunités. N'hésitez pas à me contacter !",
            "I'm currently open to new opportunities. Feel free to reach out!"
          )}
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-4 bg-card p-6 rounded-xl border border-border shadow-sm hover:border-primary/30 hover:shadow-[0_0_24px_-6px_hsl(var(--primary)/0.3)] transition-colors duration-300"
          >
            <h3 className="text-lg font-semibold mb-2">{t("Envoyer un message", "Send a Message")}</h3>
            <Input
              placeholder={t("Votre nom", "Your name")}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <Input
              type="email"
              placeholder={t("Votre email", "Your email")}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
            <Input
              placeholder={t("Objet", "Subject")}
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              required
            />
            <Textarea
              placeholder={t("Votre message", "Your message")}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
              required
            />
            <Button type="submit" className="w-full gap-2 glow">
              <Send className="w-4 h-4" />
              {t("Envoyer", "Send")}
            </Button>
          </motion.form>

          {/* Info + WhatsApp */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between gap-8"
          >
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="space-y-4 bg-card p-6 rounded-xl border border-border shadow-sm hover:border-primary/30 hover:shadow-[0_0_24px_-6px_hsl(var(--primary)/0.3)] transition-colors duration-300"
            >
              <h3 className="text-lg font-semibold">{t("Coordonnées", "Contact Info")}</h3>
              <div className="space-y-4 text-sm">
                <a href="mailto:rihagatiana0@gmail.com" className="flex items-center gap-3 hover:text-primary transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                  rihagatiana0@gmail.com
                </a>
                <span className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  Antananarivo, Madagascar
                </span>
                <span className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  +261 34 33 534 07
                </span>
              </div>
            </motion.div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-5 rounded-xl bg-[hsl(142,70%,42%)] text-white font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg"
            >
              <MessageCircle className="w-6 h-6" />
              {t("Discuter sur WhatsApp", "Chat on WhatsApp")}
            </a>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-6 mt-12 pt-6 border-t border-border">
        <p className="text-center text-xs text-muted-foreground font-mono">
          © {new Date().getFullYear()} Ihagatiana Ramilijaona. {t("Tous droits réservés.", "All rights reserved.")}
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
