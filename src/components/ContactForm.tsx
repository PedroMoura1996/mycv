import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useTranslation } from 'react-i18next';
import { Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Card } from './ui/card';
import { toast } from 'sonner';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const ContactForm: React.FC = () => {
  const { t } = useTranslation('homepage');
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const schema = yup.object({
    name: yup.string().required('Name is required').min(2, 'Name must be at least 2 characters'),
    email: yup.string().email('Invalid email format').required('Email is required'),
    subject: yup.string().required('Subject is required').min(5, 'Subject must be at least 5 characters'),
    message: yup.string().required('Message is required').min(10, 'Message must be at least 10 characters'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: yupResolver(schema) as any,
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Form submitted:', data);
      toast.success(t('contact.form.success'));
      reset();
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error(t('contact.form.error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="card-professional p-6">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
        {/* Name Field */}
        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm font-medium">
            {t('contact.form.name')}
          </Label>
          <Input
            id="name"
            {...register('name')}
            className={`transition-all duration-200 ${
              errors.name ? 'border-destructive focus:ring-destructive' : ''
            }`}
            aria-invalid={errors.name ? 'true' : 'false'}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <p id="name-error" className="text-sm text-destructive" role="alert">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email Field */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium">
            {t('contact.form.email')}
          </Label>
          <Input
            id="email"
            type="email"
            {...register('email')}
            className={`transition-all duration-200 ${
              errors.email ? 'border-destructive focus:ring-destructive' : ''
            }`}
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="text-sm text-destructive" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Subject Field */}
        <div className="space-y-2">
          <Label htmlFor="subject" className="text-sm font-medium">
            {t('contact.form.subject')}
          </Label>
          <Input
            id="subject"
            {...register('subject')}
            className={`transition-all duration-200 ${
              errors.subject ? 'border-destructive focus:ring-destructive' : ''
            }`}
            aria-invalid={errors.subject ? 'true' : 'false'}
            aria-describedby={errors.subject ? 'subject-error' : undefined}
          />
          {errors.subject && (
            <p id="subject-error" className="text-sm text-destructive" role="alert">
              {errors.subject.message}
            </p>
          )}
        </div>

        {/* Message Field */}
        <div className="space-y-2">
          <Label htmlFor="message" className="text-sm font-medium">
            {t('contact.form.message')}
          </Label>
          <Textarea
            id="message"
            rows={5}
            {...register('message')}
            className={`transition-all duration-200 resize-none ${
              errors.message ? 'border-destructive focus:ring-destructive' : ''
            }`}
            aria-invalid={errors.message ? 'true' : 'false'}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          {errors.message && (
            <p id="message-error" className="text-sm text-destructive" role="alert">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="btn-professional w-full flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
              {t('contact.form.sending')}
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              {t('contact.form.send')}
            </>
          )}
        </Button>
      </form>
    </Card>
  );
};