import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('store/book/book-page', 'Integration | Component | store/book/book page', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{store/book/book-page}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#store/book/book-page}}
      template block text
    {{/store/book/book-page}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
