import test from 'node:test';
import assert from 'node:assert/strict';
import { PORTFOLIO_CASES } from '../data/agencyData';
import {
  buildWhatsAppMessageUrl,
  filterPortfolioCases,
  normalizePhoneDigits,
  validateQuickContact,
} from './diagnostic';

test('filterPortfolioCases returns all 4 illustrative cases on Todos', () => {
  const result = filterPortfolioCases(PORTFOLIO_CASES, 'Todos');
  assert.equal(result.length, 4);
});

test('filterPortfolioCases filters accurately by category', () => {
  const pizza = filterPortfolioCases(PORTFOLIO_CASES, 'Pizzaria');
  assert.equal(pizza.length, 3);
  assert.deepEqual(
    pizza.map((item) => item.clientName),
    ['Pizzaria 1', 'Pizzaria 2', 'Pizzaria 3']
  );

  const japanese = filterPortfolioCases(
    PORTFOLIO_CASES,
    'Culinária japonesa'
  );
  assert.equal(japanese.length, 1);
  assert.equal(japanese[0].clientName, 'Restaurante japonês');
});

test('validateQuickContact rejects invalid fields with clear messages', () => {
  const errors = validateQuickContact({
    name: '',
    businessName: 'A',
    segment: 'Pizzaria',
    phone: '123',
  });

  assert.ok(errors.name);
  assert.ok(errors.businessName);
  assert.ok(errors.phone);
});

test('validateQuickContact passes for valid contact and builds WhatsApp URL', () => {
  const input = {
    name: 'Mariana Costa',
    businessName: 'Pizzaria 1',
    segment: 'Pizzaria' as const,
    phone: '(11) 91788-2507',
  };

  assert.deepEqual(validateQuickContact(input), {});
  assert.equal(normalizePhoneDigits(input.phone), '11917882507');

  const url = buildWhatsAppMessageUrl(input);
  assert.ok(url.startsWith('https://wa.me/5511917882507?text='));
  assert.ok(url.includes(encodeURIComponent('Pizzaria 1')));
});
