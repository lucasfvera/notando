describe("App testing general ToDoList", ()=>{
    before(()=>{cy.log("Todo esto se ejecuta ANTES de TODAS las pruebas")})
    after(()=>{cy.log("Todo esto se ejecuta DESPUES de TODAS las pruebas")})

    //voy a copiar la direccion en el cfg file de cypress
    // beforeEach(()=>{cy.visit("http://localhost:3000")}) //esto se ejecuta antes de cada prueba
    beforeEach(()=>{cy.visit("/")}) //esto se ejecuta antes de cada prueba
    afterEach(()=>{cy.log("Posible limpieza de datos cambiados")}) //esto se ejecuta despues de cada prueba

    it('Doesnt crush on start', ()=>{
        // cy.visit("http://localhost:3000");
        // const header = cy.get('.header-text').text();
        cy.get('.header-text').should('contain', 'Notando')
        // expect(header).to.exist;
        // expect(".appContainer").toBeInTheDocument;
    })

    it("Elimina un elemento existente",()=>{
        cy.get(".cardContainer").contains("item1");
        cy.get(".delete-btn").first().click(); //es lo mismo buscar con .eq(n), en este caso n=0
    })
})
