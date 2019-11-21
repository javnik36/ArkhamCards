const starterDecks: { [investigatorId: string]: {} } = {
  // Roland Banks
  '01001': {
    '01000': 1,
    '01006': 1,
    '01007': 1,
    '01016': 1,
    '01017': 1,
    '01018': 1,
    '01019': 1,
    '01020': 1,
    '01021': 1,
    '01022': 1,
    '01023': 1,
    '01024': 1,
    '01025': 1,
    '01030': 1,
    '01031': 1,
    '01032': 1,
    '01033': 1,
    '01034': 1,
    '01035': 1,
    '01036': 1,
    '01037': 1,
    '01038': 1,
    '01039': 1,
    '01086': 2,
    '01087': 2,
    '01088': 2,
    '01089': 2,
    '01092': 2,
  },
  // Daisy Walker
  '01002': {
    '01000': 1,
    '01008': 1,
    '01009': 1,
    '01030': 1,
    '01031': 1,
    '01032': 1,
    '01033': 1,
    '01034': 1,
    '01035': 1,
    '01036': 1,
    '01037': 1,
    '01038': 1,
    '01039': 1,
    '01058': 1,
    '01059': 1,
    '01060': 1,
    '01061': 1,
    '01062': 1,
    '01063': 1,
    '01064': 1,
    '01065': 1,
    '01066': 1,
    '01067': 1,
    '01086': 2,
    '01087': 2,
    '01088': 2,
    '01090': 2,
    '01092': 2,
  },
  // Skids O Toole
  '01003': {
    '01000': 1,
    '01010': 1,
    '01011': 1,
    '01016': 1,
    '01017': 1,
    '01018': 1,
    '01019': 1,
    '01020': 1,
    '01021': 1,
    '01022': 1,
    '01023': 1,
    '01024': 1,
    '01025': 1,
    '01044': 1,
    '01045': 1,
    '01046': 1,
    '01047': 1,
    '01048': 1,
    '01049': 1,
    '01050': 1,
    '01051': 1,
    '01052': 1,
    '01053': 1,
    '01086': 2,
    '01087': 2,
    '01088': 2,
    '01089': 2,
    '01091': 2,
  },
  // Agnes Baker
  '01004': {
    '01000': 1,
    '01012': 1,
    '01013': 1,
    '01058': 1,
    '01059': 1,
    '01060': 1,
    '01061': 1,
    '01062': 1,
    '01063': 1,
    '01064': 1,
    '01065': 1,
    '01066': 1,
    '01067': 1,
    '01072': 1,
    '01073': 1,
    '01074': 1,
    '01075': 1,
    '01076': 1,
    '01077': 1,
    '01078': 1,
    '01079': 1,
    '01080': 1,
    '01081': 1,
    '01086': 2,
    '01087': 2,
    '01088': 2,
    '01090': 2,
    '01093': 2,
  },
  // Wendy Adams
  '01005': {
    '01000': 1,
    '01014': 1,
    '01015': 1,
    '01044': 1,
    '01045': 1,
    '01046': 1,
    '01047': 1,
    '01048': 1,
    '01049': 1,
    '01050': 1,
    '01051': 1,
    '01052': 1,
    '01053': 1,
    '01072': 1,
    '01073': 1,
    '01074': 1,
    '01075': 1,
    '01076': 1,
    '01077': 1,
    '01078': 1,
    '01079': 1,
    '01080': 1,
    '01081': 1,
    '01086': 2,
    '01087': 2,
    '01088': 2,
    '01091': 2,
    '01093': 2,
  },
  // Zoey Samaras
  '02001': {
    '01000': 1,
    '01016': 1,
    '01017': 1,
    '01018': 1,
    '01019': 1,
    '01020': 1,
    '01021': 1,
    '01022': 1,
    '01023': 1,
    '01024': 1,
    '01025': 1,
    '01059': 1,
    '01066': 1,
    '01067': 1,
    '01086': 2,
    '01087': 2,
    '01088': 2,
    '01089': 2,
    '01091': 2,
    '02006': 1,
    '02007': 1,
    '02016': 1,
    '02017': 2,
    '02018': 1,
    '02028': 1,
    '02030': 1,
    '02036': 1,
  },

  // Rex Murphy
  '02002': {
    '01000': 1,
    '01030': 1,
    '01031': 1,
    '01032': 1,
    '01033': 1,
    '01034': 1,
    '01035': 1,
    '01036': 1,
    '01037': 1,
    '01038': 1,
    '01039': 1,
    '01045': 1,
    '01046': 1,
    '01050': 1,
    '01053': 1,
    '01087': 2,
    '01088': 2,
    '01090': 2,
    '01092': 2,
    '02008': 1,
    '02009': 1,
    '02020': 1,
    '02022': 2,
    '02023': 2,
    '02025': 1,
    '02036': 2,
  },

  // Jenny Barnes
  '02003': {
    '01000': 1,
    '01021': 1,
    '01024': 1,
    '01025': 1,
    '01044': 1,
    '01045': 1,
    '01046': 1,
    '01047': 1,
    '01048': 1,
    '01049': 1,
    '01050': 1,
    '01051': 1,
    '01052': 1,
    '01053': 1,
    '01086': 2,
    '01087': 2,
    '01088': 2,
    '01091': 2,
    '01092': 2,
    '02010': 1,
    '02011': 1,
    '02016': 1,
    '02018': 1,
    '02024': 2,
    '02025': 1,
    '02026': 2,
  },
  // Jim Culver
  '02004': {
    '01000': 1,
    '01058': 1,
    '01059': 1,
    '01060': 1,
    '01061': 1,
    '01062': 1,
    '01063': 1,
    '01064': 1,
    '01065': 1,
    '01066': 1,
    '01067': 1,
    '01075': 1,
    '01078': 1,
    '01079': 1,
    '01080': 1,
    '01086': 2,
    '01087': 2,
    '01088': 2,
    '01089': 2,
    '01093': 2,
    '02012': 1,
    '02013': 1,
    '02028': 1,
    '02029': 2,
    '02030': 1,
    '02033': 1,
    '02036': 1,
  },

  // Ashcan Pete
  '02005': {
    '01000': 1,
    '01030': 1,
    '01031': 1,
    '01037': 1,
    '01039': 1,
    '01072': 1,
    '01073': 1,
    '01074': 1,
    '01075': 1,
    '01076': 1,
    '01077': 1,
    '01078': 1,
    '01079': 1,
    '01080': 1,
    '01081': 1,
    '01086': 2,
    '01087': 2,
    '01088': 2,
    '01090': 2,
    '01093': 2,
    '02014': 1,
    '02015': 1,
    '02020': 1,
    '02032': 2,
    '02033': 1,
    '02034': 2,
  },
  // Mark Harrington

  '03001': {
    '01000': 1,
    '01016': 1,
    '01017': 1,
    '01018': 1,
    '01019': 1,
    '01020': 1,
    '01021': 1,
    '01022': 1,
    '01023': 1,
    '01024': 1,
    '01025': 1,
    '01038': 1,
    '01050': 1,
    '01051': 1,
    '01052': 1,
    '01078': 1,
    '01086': 2,
    '01087': 2,
    '01088': 2,
    '01091': 2,
    '01092': 1,
    '03007': 1,
    '03008': 1,
    '03020': 2,
    '03021': 2,
    '03022': 2,
  },
  // Mihn Thi Phan
  '03002': {
    '01000': 1,
    '01030': 1,
    '01031': 1,
    '01033': 1,
    '01034': 1,
    '01035': 1,
    '01036': 1,
    '01037': 1,
    '01039': 1,
    '01072': 1,
    '01073': 1,
    '01074': 1,
    '01075': 1,
    '01076': 1,
    '01077': 1,
    '01079': 1,
    '01080': 1,
    '01081': 1,
    '01086': 2,
    '01087': 2,
    '01093': 2,
    '03010': 1,
    '03011': 1,
    '03024': 2,
    '03025': 1,
    '03026': 2,
    '03038': 2,
  },
  // Sefina Rousseau
  '03003': {
    '01000': 1,
    '01044': 1,
    '01046': 1,
    '01047': 1,
    '01048': 1,
    '01049': 1,
    '01050': 1,
    '01051': 1,
    '01052': 1,
    '01053': 1,
    '01059': 1,
    '01060': 1,
    '01061': 1,
    '01062': 1,
    '01063': 1,
    '01064': 1,
    '01065': 1,
    '01066': 1,
    '01067': 1,
    '01086': 2,
    '01087': 2,
    '01088': 2,
    '01089': 1,
    '01090': 1,
    '01092': 1,
    '03012': 3,
    '03013': 1,
    '03028': 2,
    '03029': 2,
    '03030': 2,
  },
  // Akachi Onyele
  '03004': {
    '01000': 1,
    '01058': 1,
    '01059': 1,
    '01060': 1,
    '01061': 1,
    '01062': 1,
    '01063': 1,
    '01064': 1,
    '01065': 1,
    '01066': 1,
    '01067': 1,
    '01086': 2,
    '01087': 2,
    '01088': 2,
    '01089': 2,
    '01090': 2,
    '01092': 1,
    '01093': 2,
    '03014': 1,
    '03015': 1,
    '03025': 1,
    '03032': 2,
    '03033': 2,
    '03034': 2,
  },
  // William Yorick
  '03005': {
    '01000': 1,
    '01016': 1,
    '01017': 1,
    '01018': 1,
    '01019': 1,
    '01020': 1,
    '01021': 1,
    '01022': 1,
    '01023': 1,
    '01025': 1,
    '01072': 1,
    '01073': 1,
    '01074': 1,
    '01075': 1,
    '01076': 1,
    '01077': 1,
    '01079': 1,
    '01080': 1,
    '01081': 1,
    '01086': 2,
    '01087': 2,
    '01088': 2,
    '03016': 1,
    '03017': 1,
    '03036': 2,
    '03037': 2,
    '03039': 2,
  },
  // Lola Hayes
  '03006': {
    '01000': 1,
    '01016': 1,
    '01018': 1,
    '01019': 1,
    '01020': 1,
    '01023': 1,
    '01025': 1,
    '01030': 1,
    '01031': 1,
    '01033': 1,
    '01037': 1,
    '01038': 1,
    '01039': 1,
    '01072': 1,
    '01076': 1,
    '01078': 1,
    '01079': 1,
    '01080': 1,
    '01081': 1,
    '01086': 2,
    '01087': 2,
    '01088': 2,
    '01090': 2,
    '01091': 2,
    '01092': 2,
    '01093': 2,
    '03018': 2,
    '03019': 2,
    '03021': 1,
    '03026': 1,
    '03038': 1,
  },
  // Leo Anderson
  '04001': {
    '01000': 1,
    '01016': 1,
    '01017': 1,
    '01018': 1,
    '01019': 1,
    '01020': 1,
    '01021': 1,
    '01022': 1,
    '01023': 1,
    '01024': 1,
    '01025': 1,
    '01044': 1,
    '01047': 1,
    '01048': 1,
    '01049': 1,
    '01050': 1,
    '01053': 1,
    '01087': 2,
    '01088': 1,
    '01090': 1,
    '01091': 1,
    '04006': 1,
    '04007': 1,
    '04017': 2,
    '04018': 2,
    '04019': 2,
    '04026': 2,
    '04037': 1,
  },
  // Ursula Downs
  '04002': {
    '01000': 1,
    '01030': 1,
    '01031': 1,
    '01032': 1,
    '01033': 1,
    '01034': 1,
    '01035': 1,
    '01036': 1,
    '01037': 1,
    '01038': 1,
    '01039': 1,
    '01086': 1,
    '01087': 2,
    '01088': 2,
    '01089': 1,
    '01090': 1,
    '01092': 2,
    '01093': 2,
    '04008': 1,
    '04009': 1,
    '04021': 2,
    '04023': 2,
    '04024': 2,
    '04030': 2,
    '04037': 1,
  },
  // Finn Edwards
  '04003': {
    '01000': 1,
    '01044': 1,
    '01045': 1,
    '01046': 1,
    '01047': 1,
    '01048': 1,
    '01049': 1,
    '01050': 1,
    '01051': 1,
    '01052': 1,
    '01053': 1,
    '01073': 1,
    '01075': 1,
    '01077': 1,
    '01080': 1,
    '01081': 1,
    '01086': 2,
    '01087': 2,
    '01088': 2,
    '01090': 1,
    '01091': 1,
    '04010': 1,
    '04011': 1,
    '04012': 1,
    '04026': 2,
    '04027': 2,
    '04028': 2,
    '04037': 1,
  },
  // Father Mateo
  '04004': {
    '01000': 1,
    '01059': 1,
    '01060': 1,
    '01061': 1,
    '01062': 1,
    '01063': 1,
    '01064': 1,
    '01065': 1,
    '01066': 1,
    '01067': 1,
    '01071': 1,
    '01086': 1,
    '01087': 2,
    '01088': 2,
    '01089': 2,
    '01090': 1,
    '01092': 2,
    '01093': 2,
    '04013': 1,
    '04014': 1,
    '04029': 2,
    '04030': 2,
    '04031': 1,
    '04032': 2,
    '04037': 1,
  },
  // Calvin Wright
  '04005': {
    '01000': 1,
    '01065': 1,
    '01072': 1,
    '01073': 1,
    '01074': 1,
    '01075': 1,
    '01076': 1,
    '01077': 1,
    '01078': 1,
    '01079': 1,
    '01080': 1,
    '01081': 1,
    '01086': 2,
    '01087': 2,
    '01088': 2,
    '01089': 1,
    '01090': 1,
    '01091': 1,
    '01092': 1,
    '01093': 2,
    '04015': 1,
    '04016': 1,
    '04033': 2,
    '04034': 2,
    '04036': 2,
    '04037': 1,
  },
};

export default starterDecks;