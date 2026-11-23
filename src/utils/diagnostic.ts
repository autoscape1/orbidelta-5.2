import {
  PortfolioCase,
  PortfolioCategory,
  RestaurantSegment,
} from '../data/agencyData';

export interface QuickContactInput {
  name: string;
  businessName: string;
  segment: RestaurantSegment;
  phone: string;
}

export interface QuickContactErrors {
  name?: string;
  businessName?: string;
  phone?: string;
}

export function filterPortfolioCases(
  cases: PortfolioCase[],
  category: PortfolioCategory
): PortfolioCase[] {
  if (category === 'Todos') {
    return cases;
  }
  return cases.filter((item) => item.category === category);
}

export function normalizePhoneDigits(phone: string): string {
  return phone.replace(/\D/g, '');
}

export function validateQuickContact(
  input: QuickContactInput
): QuickContactErrors {
  const errors: QuickContactErrors = {};

  if (!input.name.trim() || input.name.trim().length < 2) {
    errors.name = 'Informe seu nome.';
  }

  if (!input.businessName.trim() || input.businessName.trim().length < 2) {
    errors.businessName = 'Informe o nome do estabelecimento.';
  }

  const digits = normalizePhoneDigits(input.phone);
  if (digits.length < 10 || digits.length > 13) {
    errors.phone = 'Informe um WhatsApp válido com DDD.';
  }

  return errors;
}

export function buildWhatsAppMessageUrl(input: QuickContactInput): string {
  const text = `Olá! Sou ${input.name.trim()}, da operação ${input.businessName.trim()} (${input.segment}), e gostaria de conversar sobre as soluções da Orbidelta. Meu WhatsApp de contato é ${input.phone.trim()}.`;
  return `https://wa.me/5511917882507?text=${encodeURIComponent(text)}`;
}
