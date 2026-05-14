import type { FC } from 'react'

// ─── 1. Pixels Mortos ────────────────────────────────────────────────────────

function DeadPixelPostPT() {
  return (
    <>
      <p>
        Os pixels mortos são um dos defeitos de ecrã mais comuns, e detetá-los cedo é importante
        porque muitas garantias de monitor têm uma política de defeitos de pixel com prazo limite
        após a compra. Alguns minutos de teste com painéis de cores sólidas em tela cheia podem
        revelar problemas invisíveis durante o uso normal do computador.
      </p>

      <h2 className="text-lg font-bold text-fg">Tipos de defeitos de pixel</h2>
      <p>
        Nem todos os defeitos de pixel são iguais. Um <strong className="text-fg">pixel morto</strong>{' '}
        é aquele que não recebe sinal e fica permanentemente apagado, aparecendo como um ponto
        preto em qualquer cor de fundo. Um <strong className="text-fg">pixel preso</strong> é
        aquele cujos subpixels estão bloqueados no brilho máximo, aparecendo como um ponto
        brilhante persistente em vermelho, verde, azul ou branco. Um{' '}
        <strong className="text-fg">pixel quente</strong> comporta-se como um pixel preso, mas
        exibe sempre branco independentemente do sinal. Os pixels mortos geralmente não têm
        reparação; os pixels presos por vezes podem ser libertados com ciclos rápidos de cores.
      </p>

      <h2 className="text-lg font-bold text-fg">Como realizar o teste</h2>
      <p>
        O método mais eficaz é preencher toda a tela com uma única cor sólida em modo de tela
        cheia e examinar metodicamente cada área do painel. É necessário testar no mínimo cinco
        cores: branco, preto, vermelho, verde e azul. O branco revela pixels mortos (pontos
        pretos). O preto revela pixels presos ou quentes (pontos brilhantes). O vermelho, o verde
        e o azul revelam defeitos de subpixels que podem não ser visíveis apenas no branco ou
        no preto.
      </p>
      <p>
        Utilize a ferramenta Teste de Pixels Mortos deste site para um ciclo estruturado por
        todas as cores de teste. Entre em tela cheia e mova os olhos lentamente por toda a tela,
        de um canto ao outro. Tome o seu tempo em cada cor. Os defeitos são pequenos e fáceis
        de perder num relance, especialmente em ecrãs de alta resolução onde os pixels
        individuais são muito pequenos.
      </p>

      <h2 className="text-lg font-bold text-fg">Iluminação e distância</h2>
      <p>
        Reduza a iluminação ambiente da sala antes de testar. O vazamento de luz de fundo e o
        brilho de luzes superiores podem mascarar defeitos de pixel subtis. Sente-se à sua
        distância normal de visualização e evite inclinar o ecrã ou visualizar em ângulos
        extremos, o que também pode esconder ou criar aparências falsas. Se notar o que parece
        um pixel preso, teste-o em várias cores sólidas antes de concluir que é um defeito e
        não poeira na superfície do ecrã.
      </p>

      <h2 className="text-lg font-bold text-fg">Garantia e devoluções</h2>
      <p>
        A maioria dos fabricantes de monitores usa a norma ISO 13406-2 ou similar para
        classificar defeitos de pixel aceitáveis. Segundo estas normas, um pequeno número de
        pixels defeituosos é permitido mesmo em monitores novos. O limiar aceitável varia
        conforme a classe e o fabricante. Se encontrar um defeito, verifique a documentação
        de garantia imediatamente. Muitos retalhistas têm uma janela de devolução rigorosa,
        por vezes de apenas sete a catorze dias, para reclamações de pixels defeituosos
        em monitores novos.
      </p>
      <p>
        Documente as suas descobertas com fotografias tiradas no ângulo correto antes de
        contactar o retalhista ou o fabricante. Uma foto tirada de frente para a superfície
        do painel numa sala com pouca luz é a mais útil para fins de garantia.
      </p>

      <h2 className="text-lg font-bold text-fg">Testar um monitor existente</h2>
      <p>
        Os testes de pixels não são úteis apenas em monitores novos. Se notar uma mancha
        invulgar durante o uso normal, um teste completo de pixels mortos confirma se é um
        defeito de pixel, poeira no ecrã ou um artefacto de software. Realizar o teste
        periodicamente também é útil antes de vender um monitor em segunda mão, pois dá
        aos compradores confiança sobre o estado do painel.
      </p>

      <h2 className="text-lg font-bold text-fg">Pixels mortos em portáteis e telemóveis</h2>
      <p>
        O mesmo teste de cores em tela cheia aplica-se a ecrãs de portáteis, smartphones e
        tablets. Em ecrãs de portáteis, os pixels mortos valem a pena verificar imediatamente
        após a compra, uma vez que a maioria dos fabricantes aplica as mesmas políticas de
        tolerância a defeitos ISO que os monitores de desktop. Um defeito não comunicado dentro
        da janela de devolução raramente é coberto mais tarde. Os pixels mortos num ecrã de
        portátil não se propagam para pixels vizinhos ao longo do tempo; cada pixel falha
        de forma independente, pelo que a contagem é pouco provável de aumentar, exceto se
        houver danos físicos no painel.
      </p>
      <p>
        Em iPhones, telemóveis Android e tablets, os pixels mortos e presos ocorrem pelas
        mesmas razões físicas que nos ecrãs de desktop. Os ecrãs AMOLED utilizados em muitos
        dispositivos Samsung Galaxy e Android são particularmente fáceis de testar, uma vez
        que cada pixel produz a sua própria luz, tornando um pixel morto ou preso num ecrã
        móvel imediatamente visível contra um fundo brilhante. Se notar um pixel morto no
        ecrã de um telemóvel, confirme-o em pelo menos três cores sólidas antes de concluir
        que é um defeito, pois poeira ou detritos sob um protetor de ecrã podem parecer muito
        semelhantes. Verifique os termos de garantia do fabricante assim que encontrar um
        defeito e documente-o com uma foto de frente numa sala com pouca luz.
      </p>
    </>
  )
}

// ─── 2. Vazamento de Luz de Fundo ────────────────────────────────────────────

function BacklightBleedPostPT() {
  return (
    <>
      <p>
        O vazamento de luz de fundo é um dos defeitos de monitor mais pesquisados e também
        um dos mais mal compreendidos. Algum grau de vazamento de luz está presente em
        praticamente todos os monitores LCD. A questão não é se existe, mas se é suficientemente
        grave para afetar o uso real do ecrã.
      </p>

      <h2 className="text-lg font-bold text-fg">O que causa o vazamento de luz de fundo</h2>
      <p>
        Os painéis LCD funcionam projetando uma luz de fundo através de uma camada de cristal
        líquido que controla a quantidade de luz que passa. A própria luz de fundo é uma fonte
        uniforme atrás do painel, e a camada LCD funciona como um mecanismo de controlo. Como
        o chassis de retroiluminação e as bordas do painel são fisicamente imprecisas nas
        tolerâncias de fabrico, a luz vaza pelas bordas onde a moldura encontra o painel. Este
        é o vazamento de luz: luz que contorna o bloqueio pretendido e passa pelo painel mesmo
        quando a camada LCD tenta exibir preto.
      </p>

      <h2 className="text-lg font-bold text-fg">Brilho IPS versus vazamento de luz de fundo</h2>
      <p>
        O vazamento de luz de fundo é por vezes confundido com o brilho IPS, mas são fenómenos
        diferentes. O vazamento de luz é um defeito de borda causado pela fuga de luz nas bordas
        do painel. Aparece como manchas brilhantes perto dos cantos e bordas do ecrã ao exibir
        conteúdo preto. O brilho IPS é uma característica inerente da tecnologia de painel IPS,
        onde a sensibilidade ao ângulo de visão da camada de cristal líquido causa um brilho
        nebuloso, dourado ou amarelado visível em posições de visualização fora do eixo. O
        brilho IPS está presente em todos os painéis IPS em algum grau e não é um defeito. O
        vazamento de luz é uma variação de fabrico que varia de negligenciável a significativo.
      </p>

      <h2 className="text-lg font-bold text-fg">Como testar o vazamento de luz de fundo</h2>
      <p>
        O teste de vazamento de luz é simples, mas requer as condições certas. Apague todas as
        luzes da sala e aguarde que os seus olhos se ajustem à pouca luz ambiente. Abra a
        ferramenta Teste de Vazamento de Luz deste site e exiba um painel preto sólido em
        tela cheia. Visualize o ecrã de frente a partir da sua distância normal de uso. Manchas
        brilhantes ou áreas luminosas perto das bordas e cantos visíveis no fundo preto sólido
        são vazamento de luz de fundo.
      </p>
      <p>
        Importante: não teste com as luzes da sala acesas, pois reflexos superiores e luz
        ambiente misturada com o ecrã darão resultados enganosos. Certifique-se também de que
        o ecrã está limpo antes de testar; manchas podem dispersar a luz e parecer semelhantes
        ao vazamento.
      </p>

      <h2 className="text-lg font-bold text-fg">O seu vazamento de luz é aceitável?</h2>
      <p>
        Algum vazamento é quase invisível no uso real e só é aparente numa sala escura durante
        um teste dedicado. Um vazamento grave que aparece durante cenas escuras em filmes ou
        jogos, ou que é claramente visível à sua distância normal de visualização com as luzes
        da sala acesas, vale a pena comunicar ao abrigo da garantia.
      </p>
      <p>
        O teste prático é assistir a conteúdo de filme escuro no seu ambiente normal de
        visualização. Se notar o vazamento durante o uso real, está a afetar a sua experiência.
        Se só o vê durante um teste dedicado de ecrã preto numa sala completamente escura, é
        improvável que afete o seu uso diário.
      </p>

      <h2 className="text-lg font-bold text-fg">Painéis VA e OLED</h2>
      <p>
        Os painéis VA têm tipicamente menos vazamento de luz do que os IPS, devido à sua maior
        taxa de contraste nativa e melhor bloqueio de luz ao exibir preto. Os painéis OLED não
        têm retroiluminação; cada pixel produz a sua própria luz e apaga-se completamente ao
        exibir preto, pelo que o vazamento de luz é impossível em OLED. Se o vazamento de luz
        for uma preocupação para o seu caso de uso, os painéis VA ou OLED são a melhor escolha.
      </p>

      <h2 className="text-lg font-bold text-fg">Vazamento de luz em portáteis</h2>
      <p>
        O vazamento de luz em portáteis é extremamente comum porque os ecrãs de portáteis
        usam painéis finos com retroiluminação lateral e molduras estreitas que aumentam a
        probabilidade de fuga de luz pelas bordas. Os modelos MacBook Pro, portáteis gaming
        e ultrabooks de gama baixa exibem isto em graus variados. O método de teste é idêntico
        ao de um monitor de desktop: escureça a sala, exiba uma imagem preta sólida em tela
        cheia e examine as bordas. Os ecrãs de portáteis também podem mostrar mais fuga de
        luz em determinados ângulos de abertura do ecrã, uma vez que a pressão da moldura
        no painel muda com a posição da dobradiça. O termo nublagem de retroiluminação
        refere-se ao mesmo fenómeno onde a luz se acumula em manchas irregulares na superfície
        do painel em vez de apenas nas bordas.
      </p>
      <p>
        Não existe solução de software fiável para o vazamento de luz de fundo. Sugestões
        sobre apertar parafusos da moldura ou aplicar pressão na borda do painel acarretam
        um risco real de partir o ecrã e anular a garantia. Se o vazamento for suficientemente
        grave para afetar o uso real, a solução correta é a substituição ao abrigo da garantia.
        Um vazamento ligeiro que só aparece num ambiente de teste escuro normalmente não é
        coberto pelas políticas dos fabricantes.
      </p>
      <p>
        Um equívoco comum é que os ecrãs OLED podem desenvolver vazamento de luz de fundo.
        Não podem. O que as pessoas por vezes descrevem como sangramento de ecrã OLED é
        geralmente um envelhecimento desigual dos pixels ou uma identificação incorreta de
        um defeito diferente. Como os pixels OLED emitem a sua própria luz individualmente,
        não há retroiluminação para vazar.
      </p>
    </>
  )
}

// ─── 3. Taxa de Atualização ──────────────────────────────────────────────────

function RefreshRatePostPT() {
  return (
    <>
      <p>
        A taxa de atualização é uma das especificações mais publicitadas na indústria de
        monitores e também uma das mais importantes na prática para determinados usos.
        Compreender o que a taxa de atualização realmente faz e como verificar a que frequência
        o seu monitor está a funcionar é essencial antes de gastar dinheiro numa atualização.
      </p>

      <h2 className="text-lg font-bold text-fg">O que significa a taxa de atualização</h2>
      <p>
        A taxa de atualização, medida em Hertz (Hz), é o número de vezes por segundo que o
        monitor redesenha a imagem no ecrã. A 60 Hz, o ecrã atualiza 60 vezes por segundo.
        A 144 Hz, atualiza 144 vezes por segundo. Uma taxa de atualização mais alta significa
        que o ecrã pode mostrar mais fotogramas únicos por segundo, o que produz movimento
        mais suave em tudo o que se move: jogos, scroll, vídeo, movimento do cursor e animações.
      </p>
      <p>
        A taxa de atualização do monitor é uma propriedade de hardware do painel. No entanto,
        para que o benefício seja visível, o computador também precisa de produzir fotogramas
        a essa taxa ou acima dela. Um monitor de 144 Hz a executar um jogo a 40 fotogramas por
        segundo não parece diferente de um monitor de 60 Hz em termos de suavidade de movimento,
        porque a GPU é o bottleneck.
      </p>

      <h2 className="text-lg font-bold text-fg">Como verificar a taxa de atualização real</h2>
      <p>
        O seu monitor pode estar classificado a 144 Hz mas a funcionar a 60 Hz devido a
        definições ou limitações do cabo. O Verificador de Taxa de Atualização deste site
        mede a taxa de fotogramas real que o seu navegador está a usar, o que reflete a taxa
        de atualização real de funcionamento, não o máximo de hardware.
      </p>
      <p>
        A razão mais comum para um monitor de alta frequência funcionar a 60 Hz é uma
        definição incorreta do sistema operativo. No Windows, clique com o botão direito no
        ambiente de trabalho, selecione Definições de Ecrã e depois Definições Avançadas de
        Ecrã, e verifique o menu suspenso da taxa de atualização. No macOS, vá a Definições
        do Sistema e depois a Ecrãs. Defina sempre o valor mais alto que o seu monitor suporta.
      </p>

      <h2 className="text-lg font-bold text-fg">Limitações de largura de banda do cabo</h2>
      <p>
        O cabo que liga o monitor ao computador também limita a taxa de atualização. O HDMI 1.4,
        que vem com muitos monitores, não consegue transportar 1920x1080 a 144 Hz nem 2560x1440
        a nenhuma taxa de atualização alta. O HDMI 2.0 suporta 1440p a 144 Hz. O DisplayPort 1.2
        suporta 1440p a 165 Hz. O DisplayPort 1.4 suporta 4K a 144 Hz. Se o monitor mostrar
        60 Hz apesar das definições corretas do sistema operativo, tente primeiro um cabo diferente.
      </p>

      <h2 className="text-lg font-bold text-fg">60 Hz vs 120 Hz vs 144 Hz na prática</h2>
      <p>
        A mudança de 60 Hz para 120 Hz ou 144 Hz é claramente percetível para a maioria dos
        utilizadores, especialmente na suavidade do movimento do rato e nos jogos. O scroll
        de texto e as animações de interface parecem notavelmente mais fluidos. A maioria dos
        utilizadores que usa um monitor de 144 Hz durante uma semana relata que voltar a 60 Hz
        parece visivelmente instável.
      </p>
      <p>
        A mudança de 144 Hz para 240 Hz é menor em termos percetivos, embora os jogadores
        competitivos beneficiem da latência de ecrã reduzida. Acima de 240 Hz o benefício
        adicional é marginal para a maioria dos utilizadores. Para consumo de conteúdo e
        produtividade geral, 60 Hz é completamente funcional; 120 Hz ou 144 Hz é uma
        atualização significativa para jogos e scroll rápido.
      </p>

      <h2 className="text-lg font-bold text-fg">Sincronização adaptativa: VSync, G-Sync, FreeSync</h2>
      <p>
        A uma taxa de atualização fixa, se a GPU produzir menos fotogramas do que a taxa de
        atualização do monitor, pode ver tearing ou stuttering no ecrã. As tecnologias de
        sincronização adaptativa (G-Sync da NVIDIA, FreeSync da AMD) ajustam dinamicamente
        a taxa de atualização do monitor para corresponder à saída da GPU dentro de um intervalo
        suportado, eliminando tanto o tearing como a latência de entrada do VSync tradicional.
        Se estiver a comprar um monitor de alta frequência para jogos, o suporte a sincronização
        adaptativa vale a pena priorizar.
      </p>

      <h2 className="text-lg font-bold text-fg">Monitores CRT e taxas de atualização altas</h2>
      <p>
        Antes dos painéis LCD se tornarem padrão, os monitores CRT funcionavam rotineiramente
        a taxas de atualização bem acima de 60 Hz. Como os ecrãs CRT redesenhavam a imagem
        varrendo fisicamente um feixe de eletrões sobre uma superfície de fósforo, o flickering
        era notável a taxas de atualização baixas. Isto empurrou os alvos de Hz dos monitores
        CRT para 85 Hz, 100 Hz e mais, para uso confortável. O primeiro monitor de 120 Hz
        após o CRT foi painéis LCD iniciais destinados ao mercado de gaming, altura em que
        a era dos LCD de alta frequência começou.
      </p>

      <h2 className="text-lg font-bold text-fg">Taxa de atualização em consolas</h2>
      <p>
        A taxa de atualização das consolas depende tanto do hardware da consola como do ecrã
        ao qual está ligada. A PlayStation 5 suporta até 120 Hz para títulos compatíveis, mas
        a definição de Hz da PS5 deve ser ativada nas definições do sistema da consola e o
        ecrã deve aceitar HDMI 2.1. O Xbox Series X funciona da mesma forma: 120 Hz requer
        HDMI 2.1 tanto na saída da consola como na entrada do ecrã. Use o Verificador de Taxa
        de Atualização deste site para confirmar a que taxa o seu ecrã está realmente a
        funcionar após ligar uma consola.
      </p>
    </>
  )
}

// ─── 4. Pixels Presos ────────────────────────────────────────────────────────

function StuckPixelsPostPT() {
  return (
    <>
      <p>
        Os pixels presos são um dos defeitos de ecrã mais frustrantes porque estão exatamente
        na fronteira entre o que é e o que não é reparável. Compreender o mecanismo por trás
        deles ajuda a definir expectativas realistas antes de tentar qualquer correção.
      </p>

      <h2 className="text-lg font-bold text-fg">Pixels mortos versus pixels presos</h2>
      <p>
        Os dois termos são frequentemente usados de forma intercambiável, mas referem-se a
        falhas diferentes. Um pixel morto perdeu a capacidade de receber ou responder a um
        sinal. O transistor que o controla falhou, deixando-o permanentemente apagado. Aparece
        como um ponto preto em qualquer cor de fundo e não pode ser reparado por nenhum método
        de software.
      </p>
      <p>
        Um pixel preso tem um transistor funcional, mas um ou mais dos seus subpixels vermelho,
        verde ou azul estão bloqueados num estado fixo. O pixel recebe energia e sinal, mas não
        responde corretamente. Os pixels presos aparecem como pontos coloridos brilhantes
        (vermelho, verde, azul, branco, ciano, magenta ou amarelo, dependendo dos subpixels
        presos) contra qualquer fundo. Como o transistor subjacente é funcional, há alguma
        possibilidade de o estado preso ser interrompido.
      </p>

      <h2 className="text-lg font-bold text-fg">Por que os pixels ficam presos</h2>
      <p>
        Os subpixels LCD são controlados por moléculas de cristal líquido que rodam em resposta
        a um campo elétrico. Num pixel preso, o material de cristal líquido num subpixel ficou
        imóvel, tipicamente devido a variação de fabrico, pressão física ou exibição prolongada
        de conteúdo estático. As moléculas já não estão a rodar com o sinal, razão pela qual o
        pixel permanece num estado fixo.
      </p>

      <h2 className="text-lg font-bold text-fg">Como funciona o ciclo rápido de cores</h2>
      <p>
        A teoria por trás dos corretores de pixels presos é que alternar rapidamente a tensão
        aplicada às moléculas de cristal líquido presas pode gerar agitação suficiente para
        libertar as moléculas da sua posição bloqueada e restaurar a capacidade de resposta
        normal. A técnica envolve ciclar entre vermelho, verde, azul, branco e preto a alta
        velocidade, tipicamente várias vezes por segundo, sobre a área afetada.
      </p>
      <p>
        O Corretor de Pixels Presos deste site faz exatamente isso. Posiciona uma área alvo
        sobre o pixel preso e executa o ciclo durante um período de tempo. As durações
        recomendadas variam de 10 minutos a algumas horas para pixels persistentemente presos.
        Alguns utilizadores relatam também sucesso com pressão suave aplicada através de um
        pano macio, embora isso acarrete o risco de criar marcas de pressão nos painéis LCD
        e deva ser feito com cuidado.
      </p>

      <h2 className="text-lg font-bold text-fg">Taxas de sucesso e expectativas realistas</h2>
      <p>
        Não há dados fiáveis sobre a taxa de sucesso das técnicas de ciclo de pixels presos,
        pois os resultados dependem muito do modo de falha específico, do tipo de painel e
        de há quanto tempo o pixel está preso. Anedoticamente, os pixels que estão presos há
        pouco tempo em painéis IPS respondem com mais frequência do que os que estão presos
        há meses em painéis mais antigos. Os pixels mortos, conforme descrito acima, não
        responderão a esta técnica.
      </p>
      <p>
        Se o ciclo não funcionar após várias horas, o pixel provavelmente está morto e não
        preso, ou o modo de falha específico não responde a esta técnica. Nesse ponto, o
        próximo passo adequado é uma reclamação de garantia se o monitor ainda estiver dentro
        do período de garantia.
      </p>

      <h2 className="text-lg font-bold text-fg">Retenção de imagem e queima de ecrã</h2>
      <p>
        A retenção de imagem é um problema relacionado, mas distinto. Ocorre quando uma imagem
        estática exibida por um longo período deixa um fantasma temporário no painel. Isto é
        comum em painéis IPS e geralmente é temporário. O conteúdo estático prolongado pode
        causar queima permanente em ecrãs OLED. O Teste de Retenção de Imagem deste site
        ajuda a identificar se existem imagens fantasma no seu painel.
      </p>

      <h2 className="text-lg font-bold text-fg">Pixels presos em telemóveis e tablets</h2>
      <p>
        Os pixels presos ocorrem em ecrãs de telemóveis e tablets pelas mesmas razões que nos
        monitores de desktop. Um pixel preso num iPhone aparece como um ponto brilhante
        persistente que não muda de cor com o fundo. Os pixels presos num iPad, telemóvel
        Android ou ecrã AMOLED comportam-se de forma idêntica. A abordagem de ciclo rápido
        de cores usada pelos corretores de pixels presos pode ajudar em ecrãs móveis, embora
        seja mais difícil posicionar uma região de ciclo com precisão num ecrã de telemóvel
        em comparação com um monitor de desktop.
      </p>
      <p>
        Os ecrãs OLED de telemóveis apresentam uma diferença específica: como cada pixel
        produz a sua própria luz, um pixel preso é visível mesmo com baixo brilho, tornando-o
        mais fácil de confirmar. Se o ciclo não resolver um pixel preso num ecrã de MacBook
        Pro, iPhone ou dispositivo Android após várias horas, o próximo passo adequado é uma
        reclamação de garantia. A maioria dos fabricantes trata defeitos de pixels brilhantes
        persistentes como falhas de hardware elegíveis para reparação ou substituição dentro
        do período de garantia.
      </p>
    </>
  )
}

// ─── 5. Tipos de Painel ──────────────────────────────────────────────────────

function PanelTypesPostPT() {
  return (
    <>
      <p>
        A tecnologia de painel de um monitor afeta quase todas as características visuais:
        contraste, precisão de cor, ângulo de visão, tempo de resposta e preço. Compreender
        as diferenças práticas ajuda a escolher o monitor certo para o seu caso de uso e a
        interpretar os resultados dos testes com precisão.
      </p>

      <h2 className="text-lg font-bold text-fg">Painéis IPS</h2>
      <p>
        Os painéis IPS (In-Plane Switching) alinham os cristais líquidos horizontalmente, o
        que produz amplos ângulos de visão com reprodução de cor consistente quando vistos de
        lado. Os painéis IPS tipicamente oferecem a cor mais precisa entre os tipos de painel
        LCD, razão pela qual são a escolha padrão para edição de fotografia, design gráfico
        e trabalho profissional com cor.
      </p>
      <p>
        A contrapartida é que os painéis IPS têm uma taxa de contraste nativa mais baixa do
        que os painéis VA, tipicamente 1000:1, e são suscetíveis ao brilho IPS: um brilho
        nebuloso, com tonalidade dourada, visível perto dos cantos ao visualizar conteúdo
        escuro em ângulos fora do eixo. O vazamento de luz de fundo também é mais notável
        em IPS do que em VA. Os painéis IPS modernos eliminaram em grande parte os tempos
        de resposta mais lentos que eram uma limitação anterior.
      </p>

      <h2 className="text-lg font-bold text-fg">Painéis VA</h2>
      <p>
        Os painéis VA (Vertical Alignment) usam cristais líquidos alinhados verticalmente
        que proporcionam taxas de contraste nativas muito mais altas do que os IPS, tipicamente
        3000:1 a 6000:1. Isto torna os painéis VA significativamente melhores a exibir pretos
        profundos, particularmente em gaming em sala escura e home cinema. Cenas escuras em
        filmes e jogos parecem visivelmente mais imersivas num painel VA do que em IPS.
      </p>
      <p>
        Os painéis VA têm o seu próprio defeito característico: o borrão preto. Objetos escuros
        em movimento rápido deixam um borrão ou rasto visível nos painéis VA devido ao tempo
        de resposta mais lento da camada de cristal líquido ao transitar entre estados escuros.
        Isto é mais visível em jogos rápidos do que no uso típico de desktop. Os painéis VA
        também têm ângulos de visão mais estreitos do que os IPS.
      </p>

      <h2 className="text-lg font-bold text-fg">Painéis OLED</h2>
      <p>
        Os painéis OLED (Organic Light-Emitting Diode) produzem a sua própria luz por pixel,
        eliminando completamente a retroiluminação. Cada pixel pode apagar-se completamente ao
        exibir preto, produzindo uma taxa de contraste verdadeira que é teoricamente infinita.
        Os painéis OLED têm precisão de cor excecional, amplos ângulos de visão e tempos de
        resposta extremamente rápidos sem borrão.
      </p>
      <p>
        A principal desvantagem é o risco de queima permanente de conteúdo estático exibido
        por longos períodos. Os monitores OLED são mais adequados a conteúdo variado do que
        a fluxos de trabalho com elementos de interface persistentes como barras de tarefas
        de desktop. Os painéis OLED também são mais caros e, em tamanhos de monitor,
        relativamente recentes no mercado. Como os pixels OLED emitem a sua própria luz, os
        testes de vazamento de luz e brilho IPS que se aplicam aos painéis LCD não são
        relevantes para OLED.
      </p>

      <h2 className="text-lg font-bold text-fg">Queima de ecrã OLED: causas e como reduzir o risco</h2>
      <p>
        A queima de ecrã OLED ocorre quando pixels específicos são ativados com alto brilho
        por períodos prolongados, fazendo com que o material orgânico emissor de luz se
        degrade mais rapidamente do que os pixels vizinhos. Isto produz um fantasma permanente
        e ténue do elemento estático. Vários padrões específicos causam isto no uso real.
        A queima de legendas aparece em TVs e monitores OLED após milhares de horas de
        conteúdo legendado. A queima de letterbox vem de barras pretas em conteúdo não
        widescreen. A queima de logotipo é causada por logotipos de canal persistentes ou
        elementos de HUD estáticos em jogos. Os monitores gaming OLED têm um risco de queima
        mais alto do que os monitores de desktop gerais porque muitos jogos exibem barras de
        vida, mapas e temporizadores estáticos em posições fixas do ecrã.
      </p>
      <p>
        Prevenir a queima de ecrã OLED envolve gerir como o conteúdo estático é exibido.
        Ative o deslocamento de pixel e a redução de luminância de logotipo nas definições
        do ecrã se estas funcionalidades estiverem disponíveis. Mantenha o brilho de pico
        abaixo do máximo para uso diário, uma vez que um brilho mais baixo abranda a
        degradação do material orgânico. Evite deixar imagens estáticas no ecrã quando o
        monitor estiver sem vigilância. O Teste de Retenção de Imagem deste site pode ajudar
        a identificar retenção de imagem em fase inicial antes de progredir para queima permanente.
      </p>

      <h2 className="text-lg font-bold text-fg">Qual tipo de painel escolher</h2>
      <p>
        Para trabalho com cor precisa, o IPS continua a ser o padrão profissional. Para gaming
        em sala escura e cinema, os painéis VA oferecem o melhor contraste sem o risco de
        queima do OLED. Para gaming de maior desempenho com a melhor qualidade visual quando
        o orçamento não é restrição, o OLED proporciona a melhor combinação de tempo de
        resposta, contraste e cor. Para trabalho de escritório e produtividade geral, qualquer
        tipo de painel é adequado no ponto de preço relevante.
      </p>
    </>
  )
}

// ─── 6. Resolução e DPI ──────────────────────────────────────────────────────

function ResolutionPostPT() {
  return (
    <>
      <p>
        Resolução, densidade de pixels e escalonamento são frequentemente confundidos entre si.
        A mesma resolução pode parecer completamente diferente em dois monitores distintos, e
        uma resolução mais baixa pode parecer mais nítida do que uma mais alta dependendo do
        tamanho do painel. Compreender como estes fatores interagem ajuda a interpretar o que
        o Verificador de Resolução reporta.
      </p>

      <h2 className="text-lg font-bold text-fg">Resolução de ecrã: pixels CSS</h2>
      <p>
        Quando vê as definições de resolução do sistema operativo ou do navegador, a resolução
        mostrada é expressa em pixels lógicos ou CSS. Este é o espaço de coordenadas que as
        aplicações utilizam. Num ecrã padrão, um pixel CSS corresponde a um pixel de hardware
        físico no painel. Num ecrã HiDPI ou Retina, o sistema operativo escala a interface
        para que um pixel CSS corresponda a dois ou mais pixels físicos.
      </p>
      <p>
        Este escalonamento existe para que os elementos da interface permaneçam a um tamanho
        físico confortável em painéis de alta densidade. Sem ele, um monitor 4K num portátil
        de 15 polegadas exibiria texto e ícones a uma fração do seu tamanho normal e seria
        inutilizável. O Verificador de Resolução mostra tanto a resolução em pixels CSS como
        a contagem de pixels físicos derivada da proporção de pixels do dispositivo.
      </p>

      <h2 className="text-lg font-bold text-fg">Proporção de pixels do dispositivo (DPR)</h2>
      <p>
        A proporção de pixels do dispositivo é o multiplicador entre pixels CSS e pixels físicos.
        Um DPR de 1 significa densidade padrão: um pixel CSS por pixel físico. Um DPR de 2
        significa que cada pixel CSS é suportado por uma grelha de 2x2 pixels físicos, que é o
        padrão Retina nos ecrãs Apple. Um DPR de 1,5 ou 1,25 é comum em portáteis Windows onde
        o sistema operativo aplica escalonamento fracionário.
      </p>
      <p>
        O DPR afeta como as imagens e gráficos web são exibidos. Imagens fornecidas sem uma
        versão de alto DPR aparecem desfocadas em ecrãs Retina. Imagens responsivas e gráficos
        vetoriais permanecem nítidos em qualquer DPR.
      </p>

      <h2 className="text-lg font-bold text-fg">Pixels por polegada e nitidez percebida</h2>
      <p>
        Pixels por polegada (PPI) mede quantos pixels cabem numa polegada da superfície do
        painel. Um PPI mais alto significa pixels individuais menores e, portanto, mais detalhe.
        Um painel 1920x1080 a 24 polegadas tem aproximadamente 92 PPI. A mesma resolução a 27
        polegadas tem aproximadamente 82 PPI. Um painel 2560x1440 a 27 polegadas tem
        aproximadamente 109 PPI.
      </p>
      <p>
        Para monitores de desktop vistos ao comprimento normal do braço (60 a 80 cm), cerca de
        95 a 110 PPI é o ponto a partir do qual os pixels individuais se tornam difíceis de
        distinguir em condições normais. Acima de 140 PPI, densidade adicional oferece pouco
        benefício visível a distâncias normais de visualização.
      </p>

      <h2 className="text-lg font-bold text-fg">Resolução nativa e escalonamento</h2>
      <p>
        Cada painel tem uma resolução nativa, que é a contagem de pixels físicos com que foi
        fabricado. Executar um ecrã na sua resolução nativa produz a imagem mais nítida. Para
        a melhor qualidade de imagem, execute sempre o monitor na sua resolução nativa e use
        o escalonamento do sistema operativo para o tamanho da interface.
      </p>

      <h2 className="text-lg font-bold text-fg">Nomes comuns de resolução e o que significam</h2>
      <p>
        Os nomes de resolução de ecrã são usados de forma inconsistente nos materiais de
        marketing. Full HD (FHD) refere-se a 1920x1080. Quad HD (QHD), também designado 2K
        em muitas listagens, refere-se a 2560x1440. 4K UHD refere-se a 3840x2160. WUXGA
        refere-se a 1920x1200, uma proporção 16:10 que oferece mais espaço vertical do que
        o FHD. O Verificador de Resolução e Proporção deste site identifica automaticamente
        a sua resolução e proporção.
      </p>
    </>
  )
}

// ─── 7. Gama ─────────────────────────────────────────────────────────────────

function GammaPostPT() {
  return (
    <>
      <p>
        O gama é uma das propriedades fundamentais da calibração de ecrã e uma das mais
        frequentemente mal compreendidas. Um gama incorreto faz com que as imagens pareçam
        planas e desbotadas, ou excessivamente escuras com detalhe nas sombras esmagado.
        Testar o gama do monitor não requer hardware de calibração dispendioso.
      </p>

      <h2 className="text-lg font-bold text-fg">O que é o gama</h2>
      <p>
        O gama descreve a relação entre o valor numérico de um pixel num ficheiro de imagem
        e o brilho que o ecrã produz para esse pixel. É expresso como um expoente numa curva
        de potência. Um gama de 2,2 significa que um valor de pixel de 128 (a meio entre 0
        e 255) deve produzir aproximadamente 22% do brilho máximo do ecrã, não 50%. Esta
        curva não linear imita como a visão humana percebe as diferenças de brilho.
      </p>
      <p>
        O padrão de cores sRGB, que rege a maioria dos monitores de consumo e imagens digitais,
        tem como alvo um gama geral de aproximadamente 2,2. Um ecrã a gama 1,8 parecerá
        desbotado e excessivamente brilhante. Um ecrã a gama 2,6 parecerá demasiado escuro
        com detalhe perdido nas sombras.
      </p>

      <h2 className="text-lg font-bold text-fg">Como testar o gama sem hardware</h2>
      <p>
        A Verificação de Calibração de Gama deste site usa uma técnica chamada dithering em
        tabuleiro de xadrez. Um padrão de tabuleiro 50% preto-branco, quando visto de uma
        ligeira distância, parece um tom cinza médio uniforme. O brilho desse cinza aparente
        corresponde ao que o ecrã está a fazer ao nível de 50% do tabuleiro. Ao colocar uma
        amostra cinza sólida de referência ao lado do padrão dithered, pode comparar se o
        ecrã está a renderizar o tom médio corretamente para um alvo de gama.
      </p>
      <p>
        A ferramenta fornece quatro cinzas de referência correspondentes a valores de gama de
        1,8, 2,0, 2,2 e 2,4. A amostra cinza que mais se aproxima do brilho aparente do
        tabuleiro indica a definição de gama aproximada do monitor.
      </p>

      <h2 className="text-lg font-bold text-fg">Corrigir o gama</h2>
      <p>
        Se o gama do monitor parecer demasiado alto ou baixo, o primeiro passo é verificar o
        menu de configuração no próprio monitor. Muitos monitores incluem uma definição de gama
        diretamente nos controlos de imagem, normalmente predefinida em 1,8, 2,0, 2,2 ou 2,4.
        Defina para 2,2 para trabalho sRGB padrão. Se o monitor não tiver um controlo de gama,
        a ferramenta de calibração de ecrã do sistema operativo pode aplicar uma correção de
        gama por software através da placa de vídeo.
      </p>

      <h2 className="text-lg font-bold text-fg">Gama e faixas em gradiente</h2>
      <p>
        Um gama incorreto pode agravar as faixas em gradiente, onde uma transição tonal suave
        numa imagem mostra passos visíveis em vez de uma gradação suave. O Teste de Faixas em
        Gradiente deste site revela como o ecrã lida com gradientes lineares suaves. Faixas
        significativas num ecrã configurado corretamente podem indicar que o painel tem
        profundidade tonal limitada em certas regiões tonais.
      </p>
    </>
  )
}

// ─── 8. Uniformidade de Tela ─────────────────────────────────────────────────

function UniformityPostPT() {
  return (
    <>
      <p>
        A uniformidade do ecrã descreve com que consistência um monitor reproduz a mesma cor
        e nível de brilho em toda a superfície do painel. Uniformidade perfeita significa que
        um campo cinza sólido parece idêntico do canto superior esquerdo ao inferior direito.
        Na prática, todos os monitores têm algum grau de não uniformidade; a questão é quão
        significativa é para o seu caso de uso.
      </p>

      <h2 className="text-lg font-bold text-fg">O que causa problemas de uniformidade</h2>
      <p>
        Nos monitores LCD, a não uniformidade tem duas fontes principais. A primeira é a não
        uniformidade da retroiluminação: os painéis com retroiluminação lateral usam LEDs
        posicionados nas bordas do painel, e a luz difunde-se pela superfície do painel. Isto
        produz variações subtis de brilho, tipicamente mais brilhante nas bordas onde os LEDs
        estão localizados.
      </p>
      <p>
        A segunda fonte é o próprio painel LCD. Variações no alinhamento dos cristais líquidos,
        consistência do revestimento polarizador e tolerâncias de fabrico do painel criam
        variações subtis de cor ou brilho. Um campo cinza pode parecer ligeiramente mais frio
        (azulado) num canto e mais quente (amarelado) noutro.
      </p>

      <h2 className="text-lg font-bold text-fg">Como testar a uniformidade do ecrã</h2>
      <p>
        O Teste de Uniformidade de Tela deste site exibe um painel cinza sólido em tela cheia
        em três tons: cinza escuro, cinza médio e cinza claro. A visualizar estes painéis numa
        sala com pouca luz, examine o ecrã metodicamente. Procure áreas onde o brilho pareça
        mais alto ou mais baixo do que a área circundante, ou onde o tom muda de cinza neutro
        para azul, amarelo ou verde.
      </p>
      <p>
        A ferramenta divide o ecrã numa grelha de referência 3x3 para o ajudar a descrever
        qual zona do ecrã mostra variação. Lembre-se de que os problemas de uniformidade são
        mais fáceis de ver no cinza médio do que no escuro ou claro, porque o olho é mais
        sensível a diferenças de luminância nos meios-tons.
      </p>

      <h2 className="text-lg font-bold text-fg">Quanto de não uniformidade é aceitável</h2>
      <p>
        Para uso geral de escritório e gaming, uma variação ligeira de brilho no painel que
        só é visível em campos cinza de teste é improvável que afete a sua experiência durante
        o uso normal. Para fotografia, edição de vídeo ou qualquer trabalho crítico de cor,
        mesmo uma variação moderada de uniformidade é significativa.
      </p>
      <p>
        Monitores profissionais de certos fabricantes incluem dados de calibração de
        uniformidade do painel individual, compensando as variações medidas. Para trabalho
        crítico de cor, esta funcionalidade vale a pena priorizar sobre maior resolução ou
        taxa de atualização.
      </p>

      <h2 className="text-lg font-bold text-fg">Uniformidade e tamanho do ecrã</h2>
      <p>
        Os problemas de uniformidade escalam com o tamanho do ecrã. Um monitor de 27 polegadas
        ou maior tem um caminho de luz mais longo do LED ao centro do painel, dando mais
        oportunidade para variação. Os painéis ultrawide são particularmente difíceis de
        fabricar com uniformidade consistente. Se estiver a comprar um monitor grande para
        trabalho crítico de cor, os resultados de testes de uniformidade em análises
        profissionais são uma especificação importante a pesquisar antes de comprar.
      </p>
    </>
  )
}

// ─── 9. Como Limpar o Ecrã ───────────────────────────────────────────────────

function CleaningPostPT() {
  return (
    <>
      <p>
        A maioria das pessoas limpa o ecrã do monitor de forma errada, e os danos
        frequentemente não são visíveis de imediato. Os revestimentos nos painéis modernos
        são duráveis o suficiente para limpeza regular, mas são facilmente danificados pelos
        materiais ou técnica errados. Fazer isto corretamente não custa nada extra e preserva
        a qualidade de imagem do monitor durante toda a sua vida útil.
      </p>

      <h2 className="text-lg font-bold text-fg">O único material de que precisa</h2>
      <p>
        Um pano de microfibra limpo e seco é tudo o que é necessário para a limpeza rotineira
        do monitor. Os panos de microfibra usam fibras mais finas do que um cabelo humano, o
        que significa que removem o pó e os óleos da superfície sem riscar ou borrar. Os
        mesmos panos usados para óculos são adequados para monitores. Não use toalhas de papel,
        lenços de papel, camisolas de algodão antigas ou qualquer tecido áspero. Estes materiais
        contêm fibras abrasivas que vão riscar permanentemente os revestimentos antirreflexo e
        antirreflexo ao longo do tempo.
      </p>

      <h2 className="text-lg font-bold text-fg">Líquidos e solventes a evitar</h2>
      <p>
        Nunca pulverize qualquer líquido diretamente num ecrã de monitor. O líquido que entra
        pela borda da moldura pode penetrar no conjunto do painel e causar danos internos
        permanentes. Se precisar de um líquido, aplique uma quantidade muito pequena de água
        destilada no pano, não no ecrã, e certifique-se de que o pano está apenas ligeiramente
        húmido antes de limpar.
      </p>
      <p>
        Evite todos os seguintes em qualquer painel de monitor: limpador de vidros, spray
        multiusos doméstico, álcool, amónia, acetona, lixívia ou qualquer produto comercializado
        para limpeza de janelas ou superfícies duras. Estes solventes removem os revestimentos
        do painel que proporcionam propriedades antirreflexo, deixando o ecrã permanentemente
        nebuloso ou com danos visíveis.
      </p>

      <h2 className="text-lg font-bold text-fg">Usar o modo de limpeza de tela</h2>
      <p>
        A ferramenta Modo de Limpeza de Tela deste site preenche o ecrã com um painel branco
        ou preto sólido e bloqueia o ecrã durante 15 segundos, evitando entrada acidental do
        pano de limpeza em dispositivos com ecrã tátil. O branco é a cor de limpeza mais útil
        porque torna o pó, manchas e impressões digitais claramente visíveis para identificar
        cada área que precisa de atenção.
      </p>

      <h2 className="text-lg font-bold text-fg">Considerações sobre o tipo de painel</h2>
      <p>
        Os painéis LCD e IPS têm um revestimento de vidro ou plástico duro que é relativamente
        tolerante à limpeza suave. Limpe em traços horizontais ou verticais retos com pressão
        leve. Os painéis OLED são fisicamente mais finos e frágeis do que os painéis LCD. Use
        menos pressão no OLED e certifique-se de que o pano está completamente livre de qualquer
        partícula que possa riscar a superfície. Os ecrãs de portáteis e monitores portáteis
        com revestimentos brilhantes limpam-se mais facilmente com uma única limpeza seca.
        Os revestimentos antirreflexo mate têm uma superfície texturada que pode reter manchas;
        aplique uma pressão ligeiramente mais firme com um pano seco.
      </p>

      <h2 className="text-lg font-bold text-fg">Com que frequência limpar</h2>
      <p>
        Limpe o pó do ecrã levemente com um pano de microfibra seco sempre que houver
        acumulação visível, tipicamente a cada uma ou duas semanas num ambiente normal de
        escritório. Limpe impressões digitais e manchas conforme necessário. A limpeza leve
        regular é melhor do que a limpeza pesada pouco frequente, pois evita que o óleo das
        manchas adira mais firmemente à superfície ao longo do tempo.
      </p>
    </>
  )
}

// ─── 10. Proporções de Monitor ───────────────────────────────────────────────

function AspectRatiosPostPT() {
  return (
    <>
      <p>
        A proporção do monitor é a relação proporcional entre a largura e a altura da superfície
        do ecrã. Afeta a quantidade de conteúdo que cabe horizontal e verticalmente, a
        imersividade da experiência em jogos e vídeo, e como o fluxo de trabalho de
        produtividade é organizado. Escolher a proporção certa para o seu caso de uso principal
        é tão importante como escolher a resolução certa.
      </p>

      <h2 className="text-lg font-bold text-fg">16:9: a proporção widescreen padrão</h2>
      <p>
        A proporção 16:9 é o padrão global atual para monitores, televisões e conteúdo de vídeo.
        Foi adotada como padrão para transmissão HDTV e manteve-se dominante em todos os ecrãs
        de consumo e comerciais desde então. Praticamente todo o conteúdo de vídeo, jogos e
        serviços de streaming são produzidos para 16:9. As resoluções 16:9 mais comuns incluem
        1920x1080 (Full HD), 2560x1440 (Quad HD), 3840x2160 (4K UHD) e 5120x2880 (5K).
      </p>

      <h2 className="text-lg font-bold text-fg">16:10: o widescreen mais alto</h2>
      <p>
        A proporção 16:10 oferece mais espaço vertical de ecrã do que 16:9 para a mesma largura.
        Isto torna-a popular em portáteis de negócios e monitores de produtividade. As resoluções
        comuns incluem 1920x1200 e 2560x1600. Os ecrãs MacBook Pro e MacBook Air usam proporções
        16:10. Para leitura de documentos, escrita e programação, o espaço vertical extra reduz
        a necessidade de scroll e encaixa mais conteúdo no ecrã simultaneamente.
      </p>

      <h2 className="text-lg font-bold text-fg">21:9: ultrawide</h2>
      <p>
        A proporção 21:9 é o padrão para monitores ultrawide. As resoluções comuns são 2560x1080
        e 3440x1440. Os ecrãs ultrawide proporcionam espaço horizontal que permite duas janelas
        de aplicações lado a lado sem sobreposição, o que se adapta tanto à multitarefa
        profissional como ao gaming cinematográfico onde o campo de visão mais amplo é uma
        vantagem significativa. Muitos filmes são rodados em proporções próximas de 21:9, pelo
        que os ecrãs ultrawide eliminam as barras pretas visíveis nos ecrãs 16:9.
      </p>

      <h2 className="text-lg font-bold text-fg">32:9: super ultrawide</h2>
      <p>
        A proporção 32:9, com resoluções como 5120x1440 e 3840x1080, substitui efetivamente
        dois monitores 16:9 num único painel sem lacuna de moldura entre eles. Este formato
        adapta-se a profissionais que precisam de monitorizar múltiplos feeds ou aplicações
        simultaneamente. A expansão horizontal é visualmente imersiva em jogos que o suportam,
        embora a curvatura comum nos painéis 32:9 também ajude a usabilidade nestas larguras
        extremas.
      </p>

      <h2 className="text-lg font-bold text-fg">Verificar a sua proporção</h2>
      <p>
        O Verificador de Resolução deste site calcula e exibe a sua proporção automaticamente
        a partir das dimensões do ecrã reportadas, juntamente com o nome comum da sua proporção
        quando aplicável. Se a proporção exibida não corresponder à proporção especificada do
        monitor, pode estar a funcionar a uma resolução não nativa, ou a proporção no monitor
        pode ter sido definida incorretamente através de uma opção de escalonamento do sistema
        operativo.
      </p>
    </>
  )
}

export const POST_CONTENT_PT: Record<string, FC> = {
  'how-to-test-monitor-dead-pixels': DeadPixelPostPT,
  'what-is-backlight-bleed': BacklightBleedPostPT,
  'refresh-rate-60hz-vs-144hz': RefreshRatePostPT,
  'stuck-pixels-causes-and-fixes': StuckPixelsPostPT,
  'monitor-panel-types-ips-va-oled': PanelTypesPostPT,
  'understanding-monitor-resolution-dpi': ResolutionPostPT,
  'gamma-calibration-guide': GammaPostPT,
  'screen-uniformity-test-guide': UniformityPostPT,
  'how-to-clean-monitor-screen': CleaningPostPT,
  'monitor-aspect-ratios-explained': AspectRatiosPostPT,
}
