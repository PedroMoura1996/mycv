import React, { Suspense } from 'react';
import profilePlaceholder from '../assets/profile-placeholder.jpg';
import projectEcommerce from '../assets/project-ecommerce.jpg';
import projectTaskmanager from '../assets/project-taskmanager.jpg';
import projectWeather from '../assets/project-weather.jpg';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Download, 
  MapPin, 
  Calendar, 
  FolderOpen,
  Mail,
  Phone,
  ExternalLink,
  Code,
  Database,
  Settings
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Separator } from '../components/ui/separator';
import { Badge } from '../components/ui/badge';
import { ProjectCarousel } from '../components/ProjectCarousel';
import { ContactForm } from '../components/ContactForm';
import { BackToTop } from '../components/BackToTop';

const skillsData = {
  frontend: ['React', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'ES6'],
  backend: ['Node.js', 'Java', 'Microservices', 'REST APIs'],
  tools: ['Git', 'Confluence', 'VS Code', 'IntelliJ', 'Agile']
};

export const Home: React.FC = () => {
  const { t } = useTranslation('homepage');

  const projectImages = {
    ecommerce: projectEcommerce,
    taskmanager: projectTaskmanager,
    weather: projectWeather,
  };

  const projects = (t('projects.items', { returnObjects: true }) as any[]).map(project => ({
    ...project,
    image: projectImages[project.image as keyof typeof projectImages] || projectEcommerce
  }));
  
  const experiences = t('experience.jobs', { returnObjects: true }) as any[];
  const education = t('education.items', { returnObjects: true }) as any[];

  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <Helmet>
        <title>{t('hero.name')} - {t('hero.title')}</title>
        <meta name="description" content={t('hero.subtitle')} />
        <meta property="og:title" content={`${t('hero.name')} - ${t('hero.title')}`} />
        <meta property="og:description" content={t('hero.subtitle')} />
        <meta property="og:type" content="website" />
      </Helmet>

      <main className="min-h-screen">
        {/* Hero Section */}
        <section id="hero" className="section-padding pt-32 pb-20 bg-gradient-hero">
          <div className="container-professional">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <p className="text-lg text-muted-foreground mb-4">
                {t('hero.greeting')}
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {t('hero.name')}
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-secondary mb-6">
                {t('hero.title')}
              </h2>
              <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                {t('hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-professional">
                  {t('hero.cta')}
                </Button>
                <Button variant="outline" size="lg" className="gap-2">
                  <Download className="h-4 w-4" />
                  {t('buttons.download_cv')}
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section-padding bg-muted/30">
          <div className="container-professional">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                {t('about.title')}
              </h2>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    {t('about.description')}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <MapPin className="h-5 w-5 text-accent mr-2" />
                        <span className="font-semibold">{t('about.location')}</span>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <Calendar className="h-5 w-5 text-accent mr-2" />
                        <span className="font-semibold">{t('about.experience')}</span>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <FolderOpen className="h-5 w-5 text-accent mr-2" />
                        <span className="font-semibold">{t('about.projects')}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <Card className="card-professional p-8 text-center">
                    <div className="w-32 h-32 bg-gradient-primary rounded-full mx-auto mb-6 overflow-hidden">
                      <img 
                        src={profilePlaceholder} 
                        alt={t('hero.name')}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{t('hero.name')}</h3>
                    <p className="text-muted-foreground">{t('hero.title')}</p>
                  </Card>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="section-padding">
          <div className="container-professional">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                {t('skills.title')}
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="card-professional p-6">
                  <div className="flex items-center mb-4">
                    <Code className="h-6 w-6 text-accent mr-3" />
                    <h3 className="text-xl font-semibold">{t('skills.frontend')}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillsData.frontend.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
                
                <Card className="card-professional p-6">
                  <div className="flex items-center mb-4">
                    <Database className="h-6 w-6 text-accent mr-3" />
                    <h3 className="text-xl font-semibold">{t('skills.backend')}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillsData.backend.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
                
                <Card className="card-professional p-6">
                  <div className="flex items-center mb-4">
                    <Settings className="h-6 w-6 text-accent mr-3" />
                    <h3 className="text-xl font-semibold">{t('skills.tools')}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillsData.tools.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="section-padding bg-muted/30">
          <div className="container-professional">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                {t('experience.title')}
              </h2>
              <div className="max-w-4xl mx-auto space-y-8">
                {experiences.map((job: any, index: number) => (
                  <Card key={index} className="card-professional p-6">
                    <div className="grid md:grid-cols-4 gap-4">
                      <div className="md:col-span-3">
                        <h3 className="text-xl font-semibold mb-2">{job.position}</h3>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4 text-muted-foreground">
                          <span className="font-medium">{job.company}</span>
                          <Separator orientation="vertical" className="hidden sm:block h-4" />
                          <span>{job.location}</span>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {job.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {job.technologies.map((tech: string) => (
                            <Badge key={tech} variant="outline">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="md:text-right">
                        <span className="inline-block px-3 py-1 text-sm bg-accent/10 text-accent-foreground rounded-full border border-accent/20">
                          {job.period}
                        </span>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Education Section */}
        <section className="section-padding">
          <div className="container-professional">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                {t('education.title')}
              </h2>
              <div className="max-w-3xl mx-auto grid gap-6">
                {education.map((item: any, index: number) => (
                  <Card key={index} className="card-professional p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-semibold mb-1">{item.degree}</h3>
                        <p className="text-muted-foreground">{item.institution}</p>
                        {item.grade && (
                          <p className="text-sm text-accent font-medium mt-1">{item.grade}</p>
                        )}
                      </div>
                      <span className="text-sm bg-primary/10 text-primary-foreground px-3 py-1 rounded-full border border-primary/20 whitespace-nowrap">
                        {item.period}
                      </span>
                    </div>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section-padding bg-muted/30">
          <div className="container-professional">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                {t('projects.title')}
              </h2>
              <ProjectCarousel projects={projects} />
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section-padding">
          <div className="container-professional">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {t('contact.title')}
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {t('contact.subtitle')}
                </p>
              </div>
              <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                <div>
                  <ContactForm />
                </div>
                <div className="space-y-6">
                  <Card className="card-professional p-6">
                    <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-accent" />
                        <a 
                          href={`mailto:${t('contact.info.email')}`}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {t('contact.info.email')}
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-accent" />
                        <a 
                          href={`tel:${t('contact.info.phone')}`}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {t('contact.info.phone')}
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-accent" />
                        <span className="text-muted-foreground">
                          {t('contact.info.location')}
                        </span>
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="card-professional p-6">
                    <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full justify-start gap-3">
                        <ExternalLink className="h-4 w-4" />
                        LinkedIn Profile
                      </Button>
                      <Button variant="outline" className="w-full justify-start gap-3">
                        <ExternalLink className="h-4 w-4" />
                        GitHub Portfolio
                      </Button>
                      <Button variant="outline" className="w-full justify-start gap-3">
                        <Download className="h-4 w-4" />
                        Download Resume
                      </Button>
                    </div>
                  </Card>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <BackToTop />
      </main>
    </Suspense>
  );
};