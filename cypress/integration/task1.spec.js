describe('Añadir un elemento al todo', () => {
  it('Crea un elemento en la lista des-checkeado', () => {
    cy.visit('http://localhost:3000/challenge');

    cy.get('.__title')
      .should('include.text', 'Gestión del estado de un componente ReactJS')
  })
});
