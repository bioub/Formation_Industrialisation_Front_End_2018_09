
Feature('Modal');

Scenario('Modal shows', (I) => {
  I.amOnPage('/');
  I.click('.btn-primary');
  I.see('Modal title');
});
