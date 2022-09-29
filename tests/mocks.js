export const INPUT = [
  {
    user_id: '4a1b84f7-9756-4549-837e-9574c7ffc142',
    timestamp: '1973-01-01T00:00:00.000Z',
    currency: 'GBP',
    amount: '+0.1',
  },
  {
    user_id: '4a1b84f7-9756-4549-837e-9574c7ffc142',
    timestamp: '1980-01-01T00:00:00.000Z',
    currency: 'USD',
    amount: '+0.2',
  },
  {
    user_id: 'xxx4a6fe-c839-4ee3-ac11-ee3957ac6332',
    timestamp: '1990-01-01T00:00:00.000Z',
    currency: 'EUR',
    amount: '+0.14',
  },
  {
    user_id: '4a1b84f7-9756-4549-837e-9574c7ffc142',
    timestamp: '1970-01-01T00:00:00.000Z',
    currency: 'GBP',
    amount: '+12.00',
  },
  {
    user_id: '4a1b84f7-9756-4549-837e-9574c7ffc142',
    timestamp: '2022-10-01T00:00:00.000Z',
    currency: 'USD',
    amount: '-12.00',
  },
  {
    user_id: 'xxx4a6fe-c839-4ee3-ac11-ee3957ac6332',
    timestamp: '1990-10-02T10:10:10.000Z',
    currency: 'EUR',
    amount: '+0.28',
  },
  {
    user_id: 'dddddddd-9756-4549-837e-9574c7ffc142',
    timestamp: '1970-01-01T00:00:00.000Z',
    currency: 'GBP',
    amount: '+132.00',
  },
  {
    user_id: '4a1b84f7-9756-4549-837e-9574c7ffc142',
    timestamp: '1990-10-02T00:00:00.000Z',
    currency: 'USD',
    amount: '-22.00',
  },
  {
    user_id: 'fbf4a6fe-c839-4ee3-ac11-ee3957ac6332',
    timestamp: '1990-11-02T00:00:00.000Z',
    currency: 'EUR',
    amount: '-13.99',
  },
  {
    user_id: 'fbf4a6fe-c839-4ee3-ac11-ee3957ac6332',
    timestamp: '1990-12-02T00:00:00.000Z',
    currency: 'GBP',
    amount: '-13.99',
  },
  {
    user_id: 'fbf4a6fe-c839-4ee3-ac11-ee3957ac6332',
    timestamp: '1990-03-02T00:00:00.000Z',
    currency: 'GBP',
    amount: '+1.00',
  },
]

export const OUTPUT = {
  '4a1b84f7-9756-4549-837e-9574c7ffc142': {
    GBP: 12.1,
    USD: -33.8,
    lastActivity: '2022-10-01',
  },
  'dddddddd-9756-4549-837e-9574c7ffc142': {
    GBP: 132,
    lastActivity: '1970-01-01',
  },
  'fbf4a6fe-c839-4ee3-ac11-ee3957ac6332': {
    EUR: -13.99,
    GBP: -12.99,
    lastActivity: '1990-12-02',
  },
  'xxx4a6fe-c839-4ee3-ac11-ee3957ac6332': {
    EUR: 0.42,
    lastActivity: '1990-10-02',
  },
}
