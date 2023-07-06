import type { DocumentNode } from 'graphql';
  export const typeDefs = {"kind":"Document","definitions":[{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Query","loc":{"start":5,"end":10}},"interfaces":[],"directives":[],"fields":[],"loc":{"start":0,"end":10}},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Mutation","loc":{"start":17,"end":25}},"interfaces":[],"directives":[],"fields":[],"loc":{"start":12,"end":25}},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Book","loc":{"start":31,"end":35}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"title","loc":{"start":40,"end":45}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":47,"end":53}},"loc":{"start":47,"end":53}},"directives":[],"loc":{"start":40,"end":53}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"author","loc":{"start":56,"end":62}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":64,"end":70}},"loc":{"start":64,"end":70}},"directives":[],"loc":{"start":56,"end":70}}],"loc":{"start":26,"end":72}},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"AddBookMutationResponse","loc":{"start":79,"end":102}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"code","loc":{"start":107,"end":111}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":113,"end":119}},"loc":{"start":113,"end":119}},"loc":{"start":113,"end":120}},"directives":[],"loc":{"start":107,"end":120}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"success","loc":{"start":123,"end":130}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean","loc":{"start":132,"end":139}},"loc":{"start":132,"end":139}},"loc":{"start":132,"end":140}},"directives":[],"loc":{"start":123,"end":140}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"message","loc":{"start":143,"end":150}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":152,"end":158}},"loc":{"start":152,"end":158}},"loc":{"start":152,"end":159}},"directives":[],"loc":{"start":143,"end":159}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"book","loc":{"start":162,"end":166}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Book","loc":{"start":168,"end":172}},"loc":{"start":168,"end":172}},"directives":[],"loc":{"start":162,"end":172}}],"loc":{"start":74,"end":174}},{"kind":"ObjectTypeExtension","name":{"kind":"Name","value":"Query","loc":{"start":188,"end":193}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"books","loc":{"start":198,"end":203}},"arguments":[],"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Book","loc":{"start":206,"end":210}},"loc":{"start":206,"end":210}},"loc":{"start":205,"end":211}},"directives":[],"loc":{"start":198,"end":211}}],"loc":{"start":176,"end":213}},{"kind":"ObjectTypeExtension","name":{"kind":"Name","value":"Mutation","loc":{"start":227,"end":235}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"addBook","loc":{"start":240,"end":247}},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"title","loc":{"start":248,"end":253}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":255,"end":261}},"loc":{"start":255,"end":261}},"directives":[],"loc":{"start":248,"end":261}},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"author","loc":{"start":263,"end":269}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":271,"end":277}},"loc":{"start":271,"end":277}},"directives":[],"loc":{"start":263,"end":277}}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"AddBookMutationResponse","loc":{"start":280,"end":303}},"loc":{"start":280,"end":303}},"directives":[],"loc":{"start":240,"end":303}}],"loc":{"start":215,"end":305}},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Movie","loc":{"start":311,"end":316}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"id","loc":{"start":321,"end":323}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int","loc":{"start":325,"end":328}},"loc":{"start":325,"end":328}},"loc":{"start":325,"end":329}},"directives":[],"loc":{"start":321,"end":329}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"title","loc":{"start":332,"end":337}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":339,"end":345}},"loc":{"start":339,"end":345}},"loc":{"start":339,"end":346}},"directives":[],"loc":{"start":332,"end":346}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"year","loc":{"start":349,"end":353}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int","loc":{"start":355,"end":358}},"loc":{"start":355,"end":358}},"loc":{"start":355,"end":359}},"directives":[],"loc":{"start":349,"end":359}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"genre","loc":{"start":362,"end":367}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":369,"end":375}},"loc":{"start":369,"end":375}},"directives":[],"loc":{"start":362,"end":375}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"createdAt","loc":{"start":378,"end":387}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":389,"end":395}},"loc":{"start":389,"end":395}},"loc":{"start":389,"end":396}},"directives":[],"loc":{"start":378,"end":396}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"updatedAt","loc":{"start":399,"end":408}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":410,"end":416}},"loc":{"start":410,"end":416}},"loc":{"start":410,"end":417}},"directives":[],"loc":{"start":399,"end":417}}],"loc":{"start":306,"end":419}},{"kind":"ObjectTypeExtension","name":{"kind":"Name","value":"Query","loc":{"start":433,"end":438}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"movies","loc":{"start":443,"end":449}},"arguments":[],"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Movie","loc":{"start":452,"end":457}},"loc":{"start":452,"end":457}},"loc":{"start":451,"end":458}},"directives":[],"loc":{"start":443,"end":458}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"movie","loc":{"start":461,"end":466}},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"id","loc":{"start":467,"end":469}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int","loc":{"start":471,"end":474}},"loc":{"start":471,"end":474}},"loc":{"start":471,"end":475}},"directives":[],"loc":{"start":467,"end":475}}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Movie","loc":{"start":478,"end":483}},"loc":{"start":478,"end":483}},"directives":[],"loc":{"start":461,"end":483}}],"loc":{"start":421,"end":485}},{"kind":"ObjectTypeExtension","name":{"kind":"Name","value":"Mutation","loc":{"start":499,"end":507}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"createMovie","loc":{"start":512,"end":523}},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"title","loc":{"start":524,"end":529}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":531,"end":537}},"loc":{"start":531,"end":537}},"loc":{"start":531,"end":538}},"directives":[],"loc":{"start":524,"end":538}},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"year","loc":{"start":540,"end":544}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int","loc":{"start":546,"end":549}},"loc":{"start":546,"end":549}},"loc":{"start":546,"end":550}},"directives":[],"loc":{"start":540,"end":550}},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"genre","loc":{"start":552,"end":557}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":559,"end":565}},"loc":{"start":559,"end":565}},"directives":[],"loc":{"start":552,"end":565}}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Movie","loc":{"start":568,"end":573}},"loc":{"start":568,"end":573}},"directives":[],"loc":{"start":512,"end":573}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"deleteMovie","loc":{"start":576,"end":587}},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"id","loc":{"start":588,"end":590}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int","loc":{"start":592,"end":595}},"loc":{"start":592,"end":595}},"loc":{"start":592,"end":596}},"directives":[],"loc":{"start":588,"end":596}}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Movie","loc":{"start":599,"end":604}},"loc":{"start":599,"end":604}},"directives":[],"loc":{"start":576,"end":604}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"updateMovie","loc":{"start":607,"end":618}},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"id","loc":{"start":619,"end":621}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int","loc":{"start":623,"end":626}},"loc":{"start":623,"end":626}},"loc":{"start":623,"end":627}},"directives":[],"loc":{"start":619,"end":627}},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"year","loc":{"start":629,"end":633}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int","loc":{"start":635,"end":638}},"loc":{"start":635,"end":638}},"loc":{"start":635,"end":639}},"directives":[],"loc":{"start":629,"end":639}}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Movie","loc":{"start":642,"end":647}},"loc":{"start":642,"end":647}},"directives":[],"loc":{"start":607,"end":647}}],"loc":{"start":487,"end":649}},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"User","loc":{"start":655,"end":659}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"id","loc":{"start":664,"end":666}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID","loc":{"start":668,"end":670}},"loc":{"start":668,"end":670}},"loc":{"start":668,"end":671}},"directives":[],"loc":{"start":664,"end":671}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"fullName","loc":{"start":674,"end":682}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":684,"end":690}},"loc":{"start":684,"end":690}},"loc":{"start":684,"end":691}},"directives":[],"loc":{"start":674,"end":691}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"isAdmin","loc":{"start":694,"end":701}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean","loc":{"start":703,"end":710}},"loc":{"start":703,"end":710}},"loc":{"start":703,"end":711}},"directives":[],"loc":{"start":694,"end":711}}],"loc":{"start":650,"end":713}},{"kind":"ObjectTypeExtension","name":{"kind":"Name","value":"Query","loc":{"start":727,"end":732}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"user","loc":{"start":737,"end":741}},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"id","loc":{"start":742,"end":744}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID","loc":{"start":746,"end":748}},"loc":{"start":746,"end":748}},"loc":{"start":746,"end":749}},"directives":[],"loc":{"start":742,"end":749}}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"User","loc":{"start":752,"end":756}},"loc":{"start":752,"end":756}},"directives":[],"loc":{"start":737,"end":756}}],"loc":{"start":715,"end":758}}],"loc":{"start":0,"end":759}} as unknown as DocumentNode