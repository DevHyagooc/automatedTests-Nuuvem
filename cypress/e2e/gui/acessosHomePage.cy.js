describe('Acessos da Página Principal', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('.store-button')
      .click()
  })
  it('Acessar Página Principal', () => {
    cy.url()
      .should('be.equal', 'https://www.nuuvem.com/br-pt/')
  })

  it('Acessar Página de Login/Cadastro', () => {
    cy.get('.customer-info__login')
      .should('exist')
      .click()
    cy.origin('https://secure.nuuvem.com', () => {
      cy.get('#sign-in')
        .should('be.visible')
    });
  })

  context('Menu Destaques ⭐', () => {
    const headerMenuDestaque = '.header-menu--deals > .header-menu--link'

    it('Acessar todos os produtos/Catálogo', () => {
      const nameLi = 'Ver todos os produtos'

      cy.gui_acessarPaginaHeader(headerMenuDestaque, nameLi)
      cy.url()
        .should('be.equal', 'https://www.nuuvem.com/br-pt/catalog')
    })

    it('Acessar Nuuvem Gift Cards', () => {
      const nameLi = 'Nuuvem Gift Cards'

      cy.gui_acessarPaginaHeader(headerMenuDestaque, nameLi)
      cy.url()
        .should('be.equal', 'https://www.nuuvem.com/lp/pt/gift-cards/')
    })

    it('Acessar Todas Promoções', () => {
      const nameLi = 'Todas as Promoções'

      cy.gui_acessarPaginaHeader(headerMenuDestaque, nameLi)
      cy.url()
        .should('be.equal', 'https://www.nuuvem.com/br-pt/catalog/price/promo/sort/bestselling/sort-mode/desc')
    })

    it('Acessar Cupons Disponíveis', () => {
      const nameLi = 'Cupons disponíveis'

      cy.gui_acessarPaginaHeader(headerMenuDestaque, nameLi)
      cy.url()
        .should('be.equal', 'https://www.nuuvem.com/br-pt/log-cupom-interno')
    })

    it('Acessar Abaixo de R$20', () => {
      const nameLi = 'Abaixo de R$20,00'

      cy.gui_acessarPaginaHeader(headerMenuDestaque, nameLi)
      cy.url()
        .should('be.equal', 'https://www.nuuvem.com/br-pt/catalog/price/under_m/sort/bestselling/sort-mode/desc')
    })
  })

  context('Menu PC 💻', () => {
    const headerMenuPc = '.header-menu--pc > .header-menu--link'
    it('Acessar todos os produtos PC', () => {
      const nameLi = 'Todos os produtos PC'

      cy.gui_acessarPaginaHeader(headerMenuPc, nameLi)
      cy.url()
        .should('be.equal', 'https://www.nuuvem.com/br-pt/catalog/platforms/pc')
    })

    it('Acessar Promoções PC', () => {
      cy.visit('https://www.nuuvem.com/br-pt/catalog/platforms/pc/price/promo/sort/bestselling/sort-mode/desc')

      cy.url()
        .should('be.equal', 'https://www.nuuvem.com/br-pt/catalog/platforms/pc/price/promo/sort/bestselling/sort-mode/desc')
    })

    it('Acessar Lançamentos PC', () => {
      const nameLi = 'Lançamentos'

      cy.gui_acessarPaginaHeader(headerMenuPc, nameLi)
      cy.url()
        .should('be.equal', 'https://www.nuuvem.com/br-pt/catalog/platforms/pc/sort/release-date/sort-mode/desc')
    })

    it('Acessar Pré-Vendas PC', () => {
      const nameLi = 'Pré-Vendas'

      cy.gui_acessarPaginaHeader(headerMenuPc, nameLi)
      cy.url()
        .should('be.equal', 'https://www.nuuvem.com/br-pt/catalog/platforms/pc/preorder/sort/date/sort-mode/desc')
    })

    it('Acessar Mais Populares PC', () => {
      const nameLi = 'Mais Populares'

      cy.gui_acessarPaginaHeader(headerMenuPc, nameLi)
      cy.url()
        .should('be.equal', 'https://www.nuuvem.com/br-pt/catalog/platforms/pc/sort/bestselling/sort-mode/desc')
    })

    it('Acessar Free to Play PC', () => {
      const nameLi = 'Free to Play'

      cy.gui_acessarPaginaHeader(headerMenuPc, nameLi)
      cy.url()
        .should('be.equal', 'https://www.nuuvem.com/br-pt/catalog/platforms/pc/price/free/sort/bestselling/sort-mode/desc')
    })

    it('Acessar Riot Points', () => {
      const nameLi = 'Riot Points'

      cy.gui_acessarPaginaHeader(headerMenuPc, nameLi)
      cy.url()
        .should('be.equal', 'https://www.nuuvem.com/br-pt/promo/riot-points-league-of-legends')
    })

    it('Acessar Valorant Points', () => {
      const nameLi = 'Valorant Points'

      cy.gui_acessarPaginaHeader(headerMenuPc, nameLi)
      cy.url()
        .should('be.equal', 'https://www.nuuvem.com/br-pt/promo/valorant-points-valorant')
    })

    it('Acessar Abaixo de R$20 PC', () => {
      const nameLi = 'Abaixo de R$20,00'

      cy.visit('https://www.nuuvem.com/br-pt/catalog/platforms/pc/price/under_m/sort/bestselling/sort-mode/desc')
      cy.url()
        .should('be.equal', 'https://www.nuuvem.com/br-pt/catalog/platforms/pc/price/under_m/sort/bestselling/sort-mode/desc')
    })

    it('Acessar Produtos Steam', () => {
      const nameLi = 'Steam'

      cy.gui_acessarPaginaHeader(headerMenuPc, nameLi)
      cy.url()
        .should('be.equal', 'https://www.nuuvem.com/br-pt/catalog/platforms/pc/drm/steam')
    })

    it('Acessar Produtos Epic Games', () => {
      const nameLi = 'Epic Games'

      cy.gui_acessarPaginaHeader(headerMenuPc, nameLi)
      cy.url()
        .should('be.equal', 'https://www.nuuvem.com/br-pt/catalog/platforms/pc/drm/epic-games')
    })

    it('Acessar área Roblox', () => {
      const nameLi = 'Roblox'

      cy.gui_acessarPaginaHeader(headerMenuPc, nameLi)
      cy.url()
        .should('be.equal', 'https://www.nuuvem.com/lp/pt/roblox/')
    })

    it('Acessar Produtos Ubisoft Connect', () => {
      const nameLi = 'Ubisoft Connect'

      cy.gui_acessarPaginaHeader(headerMenuPc, nameLi)
      cy.url()
        .should('be.equal', 'https://www.nuuvem.com/br-pt/catalog/platforms/pc/drm/ubisoft-connect')
    })

    it('Acessar Produtos Rockstar Social Club', () => {
      const nameLi = 'Rockstar Social Club'

      cy.gui_acessarPaginaHeader(headerMenuPc, nameLi)
      cy.url()
        .should('be.equal', 'https://www.nuuvem.com/br-pt/catalog/platforms/pc/drm/rockstar-games-social-club')
    })

    it('Acessar Produtos DRM Free', () => {
      const nameLi = 'DRM Free'

      cy.gui_acessarPaginaHeader(headerMenuPc, nameLi)
      cy.url()
        .should('be.equal', 'https://www.nuuvem.com/br-pt/catalog/platforms/pc/drm/drm-free')
    })
  })

  context('Menu Consoles 🎮', () => {
    it('Acessar área Playstation', () => {
      cy.visit('https://www.nuuvem.com/lp/pt/playstation/')

      cy.url()
        .should('be.equal', 'https://www.nuuvem.com/lp/pt/playstation/')
    })

    it('Acessar área Xbox', () => {
      cy.visit('https://www.nuuvem.com/lp/pt/xbox/')

      cy.url()
        .should('be.equal', 'https://www.nuuvem.com/lp/pt/xbox/')
    })

    it('Acessar área Nintendo', () => {
      cy.visit('https://www.nuuvem.com/lp/pt/nintendo/')

      cy.url()
        .should('be.equal', 'https://www.nuuvem.com/lp/pt/nintendo/')
    })

  })

  context('Menu Mobile 📱', () => {
    const headerMenuMobile = '.header-menu--mobile > .header-menu--link'

    it('Acessar Moedas e Gift Cards', () => {
      const nameLi = 'Moedas e Gift Cards'

      cy.gui_acessarPaginaHeader(headerMenuMobile, nameLi)
      cy.url()
        .should('be.equal', 'https://www.nuuvem.com/lp/pt/mobile/')
    })

    it('Acessar Cartão App Store', () => {
      const nameLi = 'Cartão App Store'

      cy.gui_acessarPaginaHeader(headerMenuMobile, nameLi)
      cy.url()
        .should('be.equal', 'https://www.nuuvem.com/lp/pt/app-store/')
    })

  })

  context('Menu Mais ❔', () => {
    const headerMenuMais = '.header-menu--more > .header-menu--link.desktop'

    it('Acessar Suporte', () => {
      const nameLi = 'Suporte'

      cy.gui_acessarNovaAbaHeader(headerMenuMais, nameLi)
      cy.origin('https://pt.support.nuuvem.com', () => {
        cy.url()
          .should('be.equal', 'https://pt.support.nuuvem.com/kb')
      });
    })

    it('Acessar Sobre', () => {
      const nameLi = 'Sobre'

      cy.gui_acessarNovaAbaHeader(headerMenuMais, nameLi)
      cy.url()
        .should('be.equal', 'https://www.nuuvem.com/br-pt/about')
    })

  })

  context('Redes Sociais 🌐', () => {
    it('Acessar Facebook nuuvem', () => {
      const title = 'Facebook'

      cy.gui_acessarRedeSocial(title)
      cy.origin('https://www.facebook.com/', () => {
        cy.url()
          .should('be.equal', 'https://www.facebook.com/nuuvembrasil')
      });
    })

    it('Abrir Instagram Nuuvem', () => {
      const title = 'Instagram'

      cy.gui_acessarRedeSocial(title)
      cy.origin('https://www.instagram.com/nuuvem/', () => {
        cy.url()
          .should('be.equal', 'https://www.instagram.com/nuuvem/#')
      });
    })

    it('Abrir X Nuuvem', () => {
      const title = 'X'

      cy.gui_acessarRedeSocial(title)
      cy.origin('https://x.com', () => {
        cy.url()
          .should('include', 'https://x.com/nuuvem')
      });
    })

    it.skip('Abrir Youtube Nuuvem', () => {
      const title = 'Youtube';

      cy.gui_acessarRedeSocial(title)
      cy.origin('https://www.youtube.com/', () => {
        cy.url()
          .should('be.equal', 'https://www.youtube.com/user/Nuuvem')
      });
    })

    it('Abrir Twitch Nuuvem', () => {
      const title = 'Twitch'

      cy.gui_acessarRedeSocial(title)
      cy.origin('https://www.twitch.tv/', () => {
        cy.url()
          .should('be.equal', 'https://www.twitch.tv/nuuvem')
      });
    })

    it('Abrir Discord Nuuvem', () => {
      const title = 'Discord'

      cy.gui_acessarRedeSocial(title)
      cy.origin('https://discord.com/', () => {
        cy.url()
          .should('be.equal', 'https://discord.com/invite/rCH4dATR2T')
      });
    })

    it('Abrir Tiktok Nuuvem', () => {
      const title = 'Tiktok'

      cy.gui_acessarRedeSocial(title)
      cy.origin('https://www.tiktok.com/', () => {
        cy.url()
          .should('be.equal', 'https://www.tiktok.com/@nuuvemoficial')
      });
    })

    it('Abrir Bluesky Nuuvem', () => {
      const title = 'Bluesky'

      cy.gui_acessarRedeSocial(title)
      cy.origin('https://bsky.app/', () => {
        cy.url()
          .should('be.equal', 'https://bsky.app/profile/nuuvem.com')
      });
    })

    it('Abrir Threads Nuuvem', () => {
      const title = 'Threads'

      cy.gui_acessarRedeSocial(title)
      cy.origin('https://www.threads.net/', () => {
        cy.url()
          .should('be.equal', 'https://www.threads.net/@nuuvem')
      });
    })

    it('Abrir Linkedin Nuuvem', () => {
      const title = 'Linkedin'

      cy.gui_acessarRedeSocial(title)
      cy.origin('https://www.linkedin.com', () => {
        cy.url()
          .should('be.equal', 'https://www.linkedin.com/company/nuuvem')
      });
    })

  })

  context('Footer Institucional 🏛️', () => {
    it('Acessar Sobre', () => {
      const title = 'Sobre'

      cy.gui_acessarPaginaFooter(title)
      cy.url()
        .should('be.equal', 'https://www.nuuvem.com/br-pt/about')
    })

    it('Acessar Carreiras', () => {
      const title = 'Carreiras'

      cy.visit('https://www.nuuvem.com/br-pt/careers')
      cy.origin('https://careers.nuuvem.com/', () => {
        cy.url()
          .should('be.equal', 'https://careers.nuuvem.com/')
      })

    })

    it('Acessar Seu jogo na Nuuvem', () => {
      const title = 'Seu jogo na Nuuvem'

      cy.gui_acessarNovaAbaFooter(title)
      cy.url()
        .should('be.equal', 'https://www.nuuvem.com/lp/pt/partners/')
    })

    it('Acessar Nuuvem Co-op', () => {
      const title = 'Nuuvem Co-op'

      cy.gui_acessarPaginaFooter(title)
      cy.url()
        .should('be.equal', 'https://www.nuuvem.com/lp/pt/nuuvem-coop/')
    })

    it('Acessar Segurança', () => {
      const title = 'Segurança'

      cy.gui_acessarPaginaFooter(title)
      cy.url()
        .should('be.equal', 'https://www.nuuvem.com/br-pt/security')
    })

  })

  context('Footer Ajuda ❔', () => {
    it('Acessar Suporte', () => {
      const title = 'Suporte'

      cy.gui_acessarNovaAbaFooter(title)
      cy.origin('https://pt.support.nuuvem.com', () => {
        cy.url()
          .should('be.equal', 'https://pt.support.nuuvem.com/kb')
      });
    })

    it('Acessar Termos de Uso', () => {
      const title = 'Termos de Uso'

      cy.gui_acessarPaginaFooter(title)
      cy.url()
        .should('be.equal', 'https://www.nuuvem.com/br-pt/terms-of-use')
    })

    it('Acessar Política de Privacidade', () => {
      const title = 'Política de Privacidade'

      cy.gui_acessarPaginaFooter(title)
      cy.url()
        .should('be.equal', 'https://www.nuuvem.com/br-pt/privacy-policy')
    })

    it.skip('Acessar Procon-RJ', () => {
      const title = 'Procon-RJ'

      cy.gui_acessarNovaAbaFooter(title)
      cy.url()
        .should('be.equal', 'http://www.procon.rj.gov.br/')
    })

  })
})