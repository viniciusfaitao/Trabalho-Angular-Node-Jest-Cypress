describe('Should test if page already loaded', () => {
  it('should has title Veterinary List', () => {
    cy.visit('/');

    cy.wait(1000)

    cy.contains('Veterinary List');
  });
})

describe('Should test the creation of a new veterinarian', () => {
  it('should click in button New veterinary', () => {
    cy.visit('/');

    cy.wait(1000)

    cy.get('#new-veterinary').click();
  });

  it('should type "Vinicius Test" into the name input', () => {
    cy.get('input[name=name]').type('Vinicius Test')
  });

  it('should type "viniciustest@gmail.com" into the email input', () => {
    cy.get('input[name=email]').type('viniciustest@gmail.com')
  });

  it('should type "05125252525" into the phone input', () => {
    cy.get('input[name=phone]').type('05125252525')
  });

  it('should click in button Save', () => {
    cy.wait(1000)

    cy.get('#save-btn').click();
  });

  it('should validate if exist a veterinary with the name "Vinicius Test"', () => {
    cy.contains('Vinicius Test');
  });
})
