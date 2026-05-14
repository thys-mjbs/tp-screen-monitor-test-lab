import type { Tool } from '@/lib/tools'

type ToolTranslation = Pick<Tool, 'name' | 'shortDescription' | 'metaTitle' | 'metaDesc'>

export const toolTranslations: Record<string, ToolTranslation> = {
  'dead-pixel-test': {
    name: 'Teste de Pixels Mortos',
    shortDescription: 'Alterna entre cores sólidas para revelar pixels mortos ou presos na sua tela.',
    metaTitle: 'Teste de Pixels Mortos: Verificador de Monitor Gratuito Online',
    metaDesc: 'Verifique o seu monitor para pixels mortos instantaneamente. Alterne entre telas de cores sólidas para detetar pixels mortos, presos ou quentes.',
  },
  'stuck-pixel-fixer': {
    name: 'Corretor de Pixels Presos',
    shortDescription: 'Pisca cores rapidamente sobre uma área alvo para tentar libertar um pixel preso.',
    metaTitle: 'Corretor de Pixels Presos: Ferramenta Gratuita Online',
    metaDesc: 'Tente corrigir um pixel preso piscando cores rapidamente sobre a área afetada. Gratuito, sem instalação.',
  },
  'white-screen': {
    name: 'Tela Branca',
    shortDescription: 'Um painel branco em tela cheia para inspeção de pixels ou limpeza do monitor.',
    metaTitle: 'Tela Branca: Painel Branco em Tela Cheia Online',
    metaDesc: 'Exibe um painel branco puro em tela cheia para detetar sujidade, manchas ou defeitos de pixels.',
  },
  'black-screen': {
    name: 'Tela Preta',
    shortDescription: 'Um painel preto sólido em tela cheia para verificar vazamento de luz de fundo e brilho IPS.',
    metaTitle: 'Tela Preta: Painel Preto em Tela Cheia Online',
    metaDesc: 'Preencha a sua tela com preto puro para detetar vazamento de luz, brilho IPS e outros defeitos.',
  },
  'red-screen': {
    name: 'Tela Vermelha',
    shortDescription: 'Preencha a tela de vermelho para isolar problemas de cor e subpixels.',
    metaTitle: 'Tela Vermelha: Painel Vermelho em Tela Cheia Online',
    metaDesc: 'Exibe um painel vermelho sólido em tela cheia para detetar defeitos de subpixels e problemas de cor.',
  },
  'green-screen': {
    name: 'Tela Verde',
    shortDescription: 'Preencha a tela de verde para isolar problemas de pixels e tonalidade.',
    metaTitle: 'Tela Verde: Painel Verde em Tela Cheia Online',
    metaDesc: 'Exibe um painel verde sólido em tela cheia para detetar defeitos de pixels e problemas de tonalidade.',
  },
  'blue-screen': {
    name: 'Tela Azul',
    shortDescription: 'Preencha a tela de azul para expor artefactos de ecrã e falhas de subpixels.',
    metaTitle: 'Teste de Tela Azul: Painel Azul em Tela Cheia Online',
    metaDesc: 'Exibe um painel azul sólido em tela cheia para detetar artefactos de ecrã e falhas de subpixels.',
  },
  'grey-screen': {
    name: 'Tela Cinza',
    shortDescription: 'Um painel cinza neutro para revelar o efeito de tela suja e problemas de uniformidade.',
    metaTitle: 'Tela Cinza: Painel Cinza em Tela Cheia Online',
    metaDesc: 'Exibe um painel cinza neutro em tela cheia para detetar o efeito de tela suja e problemas de uniformidade.',
  },
  'yellow-screen': {
    name: 'Tela Amarela',
    shortDescription: 'Use um painel amarelo para detetar tonalidades e defeitos de subpixels.',
    metaTitle: 'Tela Amarela: Painel Amarelo em Tela Cheia Online',
    metaDesc: 'Preencha a sua tela de amarelo para detetar tonalidades e defeitos de subpixels.',
  },
  'pink-screen': {
    name: 'Tela Rosa',
    shortDescription: 'Use um painel rosa para detetar tonalidades e defeitos de subpixels.',
    metaTitle: 'Tela Rosa: Painel Rosa em Tela Cheia Online',
    metaDesc: 'Exibe um painel rosa sólido em tela cheia para detetar tonalidades e defeitos de subpixels.',
  },
  'fullscreen-colour-cycle': {
    name: 'Ciclo de Cores em Tela Cheia',
    shortDescription: 'Alterna automaticamente entre várias cores sólidas em toda a tela.',
    metaTitle: 'Ciclo de Cores em Tela Cheia: Teste de Cores Online',
    metaDesc: 'Alterne automaticamente entre múltiplas cores sólidas em tela cheia para detetar defeitos de ecrã.',
  },
  'gradient-banding-test': {
    name: 'Teste de Faixas em Gradiente',
    shortDescription: 'Gradientes suaves que revelam faixas de cor e compressão de tons no seu monitor.',
    metaTitle: 'Teste de Faixas em Gradiente: Teste de Monitor Gratuito Online',
    metaDesc: 'Exibe gradientes de cor suaves para verificar se o seu monitor tem faixas de cor ou compressão de tons.',
  },
  'backlight-bleed-test': {
    name: 'Teste de Vazamento de Luz de Fundo',
    shortDescription: 'Use um painel preto num quarto escuro para revelar o vazamento de luz nas bordas da tela.',
    metaTitle: 'Teste de Vazamento de Luz de Fundo: Verificação de Monitor Gratuita Online',
    metaDesc: 'Teste o seu monitor para vazamento de luz de fundo com esta ferramenta gratuita.',
  },
  'ips-glow-test': {
    name: 'Teste de Brilho IPS',
    shortDescription: 'Distingue o brilho IPS do vazamento de luz de fundo usando padrões de teste escuros.',
    metaTitle: 'Teste de Brilho IPS: Verifique o Seu Monitor Online Gratuitamente',
    metaDesc: 'Use este teste online para diferenciar o brilho IPS do vazamento de luz de fundo.',
  },
  'contrast-black-level-test': {
    name: 'Teste de Contraste e Nível de Preto',
    shortDescription: 'Padrões de passos em preto para verificar o detalhe nas sombras e a separação do nível de preto.',
    metaTitle: 'Teste de Nível de Preto: Verificação de Contraste do Monitor Online',
    metaDesc: 'Verifique o nível de preto e o detalhe nas sombras do seu monitor com esta ferramenta gratuita.',
  },
  'white-saturation-test': {
    name: 'Teste de Saturação de Branco',
    shortDescription: 'Padrões de passos em branco para verificar o detalhe nos realces e a separação do nível de branco.',
    metaTitle: 'Teste de Saturação de Branco: Verificação de Realces do Monitor Online',
    metaDesc: 'Teste a saturação de branco e o detalhe nos realces do seu monitor.',
  },
  'gamma-calibration-check': {
    name: 'Verificação de Calibração de Gama',
    shortDescription: 'Padrões de gama para estimar a precisão do gama do seu monitor sem hardware adicional.',
    metaTitle: 'Teste de Gama Online: Verificação de Calibração de Monitor',
    metaDesc: 'Verifique a precisão do gama do seu monitor usando padrões de teste de gama padrão.',
  },
  'sharpness-focus-chart': {
    name: 'Gráfico de Nitidez e Foco',
    shortDescription: 'Linhas finas e padrões de texto para revelar suavidade, excesso de nitidez ou problemas de escalonamento.',
    metaTitle: 'Teste de Nitidez do Monitor: Gráfico de Foco Online Gratuito',
    metaDesc: 'Teste a nitidez e o foco do seu monitor usando padrões de linhas finas.',
  },
  'moire-pattern-test': {
    name: 'Teste de Padrão Moiré',
    shortDescription: 'Padrões de linhas para revelar moiré, aliasing ou artefactos de escalonamento de pixels.',
    metaTitle: 'Teste de Padrão Moiré: Verificação de Artefactos de Tela Online',
    metaDesc: 'Detete padrões moiré, aliasing e artefactos de escalonamento de pixels na sua tela.',
  },
  'screen-uniformity-test': {
    name: 'Teste de Uniformidade de Tela',
    shortDescription: 'Detete o efeito de tela suja e a luminosidade irregular no seu monitor.',
    metaTitle: 'Teste de Uniformidade de Tela: Verificação DSE Online Gratuita',
    metaDesc: 'Verifique o seu monitor para efeito de tela suja e luminosidade irregular.',
  },
  'viewing-angle-test': {
    name: 'Teste de Ângulo de Visão',
    shortDescription: 'Padrões que tornam fácil detetar mudanças de cor e contraste em diferentes ângulos.',
    metaTitle: 'Teste de Ângulo de Visão: Verificação do Painel do Monitor Online',
    metaDesc: 'Verifique os ângulos de visão do seu monitor usando padrões de teste.',
  },
  'refresh-rate-checker': {
    name: 'Verificador de Taxa de Atualização',
    shortDescription: 'Lê e exibe a taxa de atualização real que o seu navegador deteta.',
    metaTitle: 'Verificador de Taxa de Atualização: Teste os Hz do Seu Monitor Online',
    metaDesc: 'Verifique a taxa de atualização real do seu monitor diretamente no navegador.',
  },
  'resolution-checker': {
    name: 'Verificador de Resolução e Proporção',
    shortDescription: 'Reporta a resolução da sua tela, proporção e densidade de pixels.',
    metaTitle: 'Verificador de Resolução de Tela: Verifique a Resolução do Monitor',
    metaDesc: 'Verifique instantaneamente a resolução da sua tela, proporção e densidade de pixels.',
  },
  'image-retention-test': {
    name: 'Teste de Retenção de Imagem',
    shortDescription: 'Verifique se há retenção de imagem ou queima no seu monitor OLED ou LCD.',
    metaTitle: 'Teste de Retenção de Imagem: Verificação de Queima Online Gratuita',
    metaDesc: 'Teste o seu monitor OLED ou LCD para retenção de imagem e queima de tela.',
  },
  'screen-clean-mode': {
    name: 'Modo de Limpeza de Tela',
    shortDescription: 'Bloqueie o seu monitor num painel liso para que possa limpá-lo com segurança.',
    metaTitle: 'Modo de Limpeza de Tela: Ferramenta Segura para Limpar o Monitor',
    metaDesc: 'Bloqueie o seu monitor num painel liso para limpá-lo com segurança.',
  },
  'motion-blur-test': {
    name: 'Teste de Borrão de Movimento',
    shortDescription: 'Uma barra em movimento que revela ghosting, smearing e tempo de resposta dos pixels no seu monitor.',
    metaTitle: 'Teste de Borrão de Movimento: Verificação de Ghosting do Monitor Online',
    metaDesc: 'Teste o seu monitor para borrão de movimento, ghosting e tempo de resposta de pixels.',
  },
  'input-lag-test': {
    name: 'Teste de Lag de Entrada',
    shortDescription: 'Meça o seu tempo de reação visual e estime o lag de entrada do monitor com um teste de clique.',
    metaTitle: 'Teste de Lag de Entrada: Verificação de Tempo de Reação Online',
    metaDesc: 'Teste o lag de entrada e o tempo de reação clicando o mais rápido possível.',
  },
  'pwm-flicker-test': {
    name: 'Teste de Cintilação PWM',
    shortDescription: 'Visualize a cintilação PWM da retroiluminação e compare painéis com e sem cintilação.',
    metaTitle: 'Teste de Cintilação PWM: Verificação de Cintilação de Retroiluminação Online',
    metaDesc: 'Detete a cintilação PWM da retroiluminação no seu monitor.',
  },
  'colour-temperature-test': {
    name: 'Teste de Temperatura de Cor',
    shortDescription: 'Identifique a tonalidade de cor do seu monitor encontrando qual branco parece neutro para si.',
    metaTitle: 'Teste de Temperatura de Cor: Verificação de Balanço de Branco do Monitor',
    metaDesc: 'Verifique a temperatura de cor e o balanço de branco do seu monitor.',
  },
  'black-smear-test': {
    name: 'Teste de Borrão Preto',
    shortDescription: 'Objetos escuros lentos sobre fundo escuro para revelar o ghosting escuro-escuro dos painéis VA.',
    metaTitle: 'Teste de Borrão Preto: Verificação de Ghosting em Painéis VA Online',
    metaDesc: 'Teste o seu monitor VA para borrão preto e ghosting escuro-escuro.',
  },
  'overdrive-test': {
    name: 'Teste de Overdrive',
    shortDescription: 'Barras de alta velocidade para revelar ghosting inverso e halos causados pelo overdrive do monitor.',
    metaTitle: 'Teste de Overdrive: Verificação de Ghosting Inverso Online',
    metaDesc: 'Teste o overdrive do seu monitor para ghosting inverso, coronas e halos.',
  },
  'hdr-test': {
    name: 'Teste HDR',
    shortDescription: 'Deteta o suporte do navegador a HDR e gama de cores ampla e avalia o intervalo de brilho máximo.',
    metaTitle: 'Teste de Monitor HDR: Verifique o Suporte HDR Online',
    metaDesc: 'Verifique se o seu monitor e navegador suportam HDR.',
  },
}

export const categoryTranslations: Record<string, { label: string; description: string }> = {
  'screen-state': {
    label: 'Estado de Tela',
    description: 'Painéis de cor sólida em tela cheia para inspeção de pixels, limpeza e verificações de retroiluminação.',
  },
  'visual-test': {
    label: 'Testes Visuais',
    description: 'Padrões de diagnóstico para revelar pixels mortos, faixas, vazamento, gama, nitidez e mais.',
  },
  'checker': {
    label: 'Verificadores e Utilitários',
    description: 'Ferramentas baseadas no navegador que leem e reportam as propriedades do seu monitor.',
  },
}
