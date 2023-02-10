module.exports = {
  docs: [
    'getting-started',
    // 'layouts', TODO
    'typo',
    'modal-like',
    'async-prompts',
    {
      type: 'category',
      label: 'Table',
      items: ['table/usage', 'table/imex'],
    },
    {
      type: 'category',
      label: 'Styling',
      items: [
        'styling/theme',
        'styling/animations',
        'styling/breakpoints',
        'styling/custom-theme',
        'styling/utils',
        'styling/palette',
        'styling/defaultTheme',
      ],
    },
    'icons',
  ],
}
