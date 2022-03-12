
describe('Bito interview', function () {
    it('Open Bito app store and verify software version if equal', function () {
        cy.visit('https://play.google.com/store/apps/details?id=com.bitoex.bitoproapp')
        
        cy.get('[jscontroller="lpwuxb"] > .HcyOxe > .cswwxf > .VMq4uf > [jsaction="JIbuQc:trigger.hdtuG"] > .VfPpkd-Bz112c-LgbsSe > .google-material-icons').click()

        cy.get(':nth-child(1) > .reAt0').invoke('text').then(android_version => {
            cy.forceVisit('https://apps.apple.com/tw/app/bitopro/id1393007496')
            cy.get('#modal-trigger-ember12').click()
            cy.get(':nth-child(1) > .version-history__item__version-number').invoke('text').then(ios_version => {
                expect(ios_version).to.eql(android_version)
            }) 
        });
    })
})