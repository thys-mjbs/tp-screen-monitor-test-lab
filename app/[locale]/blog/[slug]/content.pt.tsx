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

export const POST_CONTENT_PT: Record<string, FC> = {
  'how-to-test-monitor-dead-pixels': DeadPixelPostPT,
  'what-is-backlight-bleed': BacklightBleedPostPT,
  'refresh-rate-60hz-vs-144hz': RefreshRatePostPT,
  'stuck-pixels-causes-and-fixes': StuckPixelsPostPT,
  'monitor-panel-types-ips-va-oled': PanelTypesPostPT,
}
