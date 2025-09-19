import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageCircle, HelpCircle, Send } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensagem enviada! Retornaremos em breve.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const faqs = [
    {
      question: "Como as obras são criadas?",
      answer: "Cada obra resulta de uma colaboração entre artistas humanos e sistemas de inteligência artificial, explorando territórios inexplorados da criatividade digital."
    },
    {
      question: "É possível adquirir as obras?",
      answer: "Esta é uma galeria experimental não-comercial. Nosso foco está na exploração artística e na democratização do acesso à arte digital experimental."
    },
    {
      question: "Como posso colaborar com o projeto?",
      answer: "Artistas interessados em explorar colaborações com IA podem entrar em contato. Buscamos visionários dispostos a expandir fronteiras criativas."
    },
    {
      question: "As obras são NFTs?",
      answer: "Nosso foco não está na comercialização, mas na experimentação artística. Cada obra existe como exploração conceitual e estética."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16 reveal">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-gradient">
              Contato & FAQ
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Entre em contato conosco ou encontre respostas para suas questões sobre arte digital experimental
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="reveal">
              <div className="glass rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <Mail className="h-6 w-6 text-coral mr-3" />
                  <h2 className="text-xl font-display font-semibold text-coral">
                    Envie uma Mensagem
                  </h2>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-muted-foreground">Nome</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1 bg-surface-elevated border-border/20 focus:border-coral"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-muted-foreground">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1 bg-surface-elevated border-border/20 focus:border-coral"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="subject" className="text-muted-foreground">Assunto</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="mt-1 bg-surface-elevated border-border/20 focus:border-coral"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-muted-foreground">Mensagem</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="mt-1 bg-surface-elevated border-border/20 focus:border-coral resize-none"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-coral hover:bg-coral-muted text-white">
                    <Send className="mr-2 h-4 w-4" />
                    Enviar Mensagem
                  </Button>
                </form>
              </div>
            </div>

            {/* FAQ */}
            <div className="reveal reveal-delay-1">
              <div className="glass rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <HelpCircle className="h-6 w-6 text-gold mr-3" />
                  <h2 className="text-xl font-display font-semibold text-gold">
                    Perguntas Frequentes
                  </h2>
                </div>
                
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-border/20 pb-4 last:border-0">
                      <h3 className="font-semibold text-foreground mb-3 flex items-start">
                        <MessageCircle className="h-4 w-4 text-coral mr-2 mt-1 flex-shrink-0" />
                        {faq.question}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed ml-6">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="glass rounded-2xl p-8 mt-8">
                <h3 className="text-lg font-display font-semibold mb-4 text-deep-purple">
                  Informações de Contato
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <Mail className="h-4 w-4 mr-3 text-coral" />
                    contato@galeriasurrealista.art
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MessageCircle className="h-4 w-4 mr-3 text-gold" />
                    Resposta em até 24 horas
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
                  * Esta é uma galeria experimental. Para questões técnicas específicas 
                  sobre colaborações artísticas ou processos criativos, inclua detalhes 
                  relevantes em sua mensagem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;