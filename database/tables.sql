-- DROP TABLE IF EXISTS `users`;

CREATE TABLE users (
  id INTEGER NOT NULL AUTO_INCREMENT,
  email VARCHAR(90) UNIQUE,
  password VARCHAR(90),
  PRIMARY KEY(`id`)
);

INSERT INTO `users` (email, password) VALUES 
('agp.formulario.contacto@gmail.com', 'teste23'),
('margbsousa@gmail.com', 'teste23'),
('isadorahaas@gmail.com', 'teste23');
('antoniobranco@sapo.pt', 'teste23');

-- DROP TABLE IF EXISTS `homepage`;

CREATE TABLE `homepage` (
  `teaser` TEXT NOT NULL,
  `journal_edition`	INT NOT NULL,
  `article_1`	INT NOT NULL,
  `article_2`	INT NOT NULL,
  `article_3`	INT NOT NULL,
  `pt_modelo_title`	VARCHAR(60) NOT NULL,
  `en_modelo_title`	VARCHAR(60) NOT NULL,
  `ramo1_image` TEXT NOT NULL,
  `ramo2_image` TEXT NOT NULL,
  `ramo3_image` TEXT NOT NULL,
  `ramo4_image` TEXT NOT NULL,
  `pt_pais_title`	VARCHAR(60) NOT NULL,
  `en_pais_title`	VARCHAR(60) NOT NULL,
  `pt_pais_subtitle`	VARCHAR(60) NOT NULL,
  `en_pais_subtitle`	VARCHAR(60) NOT NULL,
  `pt_pais_intro`	VARCHAR(200) NOT NULL,
  `en_pais_intro`	VARCHAR(200) NOT NULL,
  `pais_image` TEXT NOT NULL,
  `pt_jornal_title`	VARCHAR(60) NOT NULL,
  `en_jornal_title`	VARCHAR(60) NOT NULL,
  `jornal_image` TEXT NOT NULL
);

INSERT INTO `homepage` (teaser, journal_edition, article_1, article_2, article_3, pt_modelo_title, en_modelo_title, ramo1_image, ramo2_image, ramo3_image, ramo4_image, pt_pais_title, en_pais_title, pt_pais_subtitle, en_pais_subtitle, pt_pais_intro, en_pais_intro, pais_image, pt_jornal_title, en_jornal_title, jornal_image)
VALUES ('https://drive.google.com/uc?export=view&id=1J8tvbQeSA499BzfMSVJsyuZp3NoAfyQ7', 
25, 0, 0, 0,
'Modelo Pedagógico',
'Pedagogical Model',
'https://drive.google.com/uc?export=view&id=1NpI-tyvV_S1syoMK2ZNS6OxEQKs_e-YW',
'https://drive.google.com/uc?export=view&id=1BVdzD6T98aa5cyeI2fVO_PPce85UB2dF',
'https://drive.google.com/uc?export=view&id=1vn8OLbLbUrIukwoqoWhkTlEsrJoETyvD',
'https://drive.google.com/uc?export=view&id=1X42LIhogN8dDkG4xADJMFSx2Q4KvZ-7b',
'Palavra aos Pais',
'Advice for Parents',
'Ter uma filha nas Guias, porque sim?',
'Why should your daughter be a Girl Guide?',
'Nas Guias ajudamos as crianças e jovens a desenvolverem plenamente o seu potencial como cidadãs universais responsáveis...',
'In Guias we help children and young girls to fully develop their potential as responsible universal citizens...',
'https://drive.google.com/uc?export=view&id=19-JO2ACYloLXijYZpsW5pVkaIFIgMOZK',
'Jornal "O Trevo"',
'"O Trevo" Magazine',
'https://drive.google.com/uc?export=view&id=1bAyNcu9xFh3mcTwxT4Bc8oBEscgqarnM'
);
 

-- DROP TABLE IF EXISTS `news`;

CREATE TABLE `news`(
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `pt_title` VARCHAR(80) NOT NULL,
  `en_title` VARCHAR(80) NOT NULL,
  `thumbnail` TEXT NOT NULL,
  `image` TEXT NOT NULL,
  `pt_intro_text` VARCHAR(100) NOT NULL,
  `en_intro_text` VARCHAR(100) NOT NULL,
  `pt_date` VARCHAR(8) NOT NULL,
  `en_date` VARCHAR(8) NOT NULL,
  `pt_content` LONGTEXT NOT NULL,
  `en_content` LONGTEXT NOT NULL,
  `publish`	BOOL NOT NULL,
  `date` DATE, 
  PRIMARY KEY(`id`)
);

INSERT INTO `news` (pt_title, en_title, thumbnail, image, pt_intro_text, en_intro_text, pt_date, en_date, pt_content, en_content, publish, date) VALUES 
('O Trevo também fica em casa','O Trevo também fica em casa','https://drive.google.com/uc?export=view&id=11-56o6QWUOzIJqhiz3sKXFrK-Ics-ltG','https://drive.google.com/uc?export=view&id=1ZWfRbvsJoISby8APyw4ldQX2oUP3Prvh','Enquanto não sai para as ruas, o jornal O Trevo sai em casa. Versão digital já disponível.','Enquanto não sai para as ruas, o jornal O Trevo sai em casa. Versão digital já disponível.','MAI 2020','MAY 2020','<p style=\"text-align:justify;\">&nbsp;<span style=\"color: rgb(51,51,51);background-color: white;font-size: 14px;font-family: Verdana;\">O jornal O Trevo é a publicação semestral da Associação Guias de Portugal que aborda temas da atualidade e</span><br><span style=\"color: rgb(51,51,51);background-color: white;font-size: 14px;font-family: Verdana;\">divulga as atividades da Associação.</span>&nbsp;</p>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(51,51,51);background-color: white;font-size: 14px;font-family: Verdana;\">Na impossibilidade de as Guias distribuírem o próximo jornal nas comunidades como habitualmente, lançamos uma versão digital para que possa continuar a chegar a todos.</span>&nbsp;</p>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(51,51,51);background-color: white;font-size: 14px;font-family: Verdana;\">Esta edição tem como tema O Outro, que se revela ainda mais adequado abordar, pela época em que vivemos.</span>&nbsp;</p>\n<p><span style=\"color: rgb(51,51,51);font-size: 14px;font-family: Verdana;\">Fique em casa. Leia a 27ª edição do jornal O </span><a href=\"http://www.google.pt\" target=\"_self\"><span style=\"color: rgb(51,51,51);font-size: 14px;font-family: Verdana;\">Trevo</span></a><span style=\"color: rgb(51,51,51);font-size: 14px;font-family: Verdana;\"> .</span></p>\n<p><span style=\"color: rgb(51,51,51);font-size: 14px;font-family: Verdana;\">(Para aceder às edições anteriores de O Trevo clicar aqui.)</span></p>\n','<p style=\"text-align:justify;\"><span style=\"color: rgb(51,51,51);background-color: white;font-size: 14px;font-family: Verdana;\">O jornal O Trevo é a publicação semestral da Associação Guias de Portugal que aborda temas da atualidade e<br>divulga as atividades da Associação.</span>&nbsp;</p>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(51,51,51);background-color: white;font-size: 14px;font-family: Verdana;\">Na impossibilidade de as Guias distribuírem o próximo jornal nas comunidades como habitualmente, lançamos uma versão digital para que possa continuar a chegar a todos.</span>&nbsp;</p>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(51,51,51);background-color: white;font-size: 14px;font-family: Verdana;\">Esta edição tem como tema O Outro, que se revela ainda mais adequado abordar, pela época em que vivemos.</span>&nbsp;</p>\n<p style=\"text-align:start;\"><span style=\"color: rgb(51,51,51);background-color: rgb(255,255,255);font-size: 14px;font-family: Verdana;\">Fique em casa. Leia a 27ª edição do jornal O Trevo.</span></p>\n<p style=\"text-align:start;\"><span style=\"color: rgb(51,51,51);background-color: rgb(255,255,255);font-size: 14px;font-family: Verdana;\">(Para aceder às edições anteriores de O Trevo clicar aqui.)</span></p>\n','0','2020-05-01'),
('Dicas para te manteres ligada às tuas amigas guias','Dicas para te manteres ligada às tuas amigas guias','https://drive.google.com/uc?export=view&id=1Jv_YQAh7PPFTBe4WQVnPR4tyAyAAgOXi','https://drive.google.com/uc?export=view&id=1hY7YnjxRZEhTfj_WjJA3aMFEL1qXf3zK','Descobre algumas ideias para pores em prática com a tua Patrulha em... casa!','Descobre algumas ideias para pores em prática com a tua Patrulha em... casa!','JUL 2222','JUL 2222','<p style=\"text-align:justify;\">&nbsp;Querida Guia,&nbsp;</p>\n<p style=\"text-align:justify;\">Agora que já sabemos que as atividades presenciais estão suspensas, temos de por a tristeza ao largo e como<br>é típico das Guias encontrar formas de estarmos juntas e contagiar com a nossa alegria todos os que nos rodeiam.&nbsp;</p>\n<p style=\"text-align:justify;\">Deixamos-te algumas dicas - algumas das quais sabemos que já estás a por em prática - para te manteres ligada à tua Patrulha e às tuas amigas Guias neste tempo de distanciamento social.&nbsp;&nbsp;</p>\n<ol>\n<li>Organizar reuniões online, utilizando plataformas de videoconferência. (Plataformas como o Zoom, Skype ou Google Hangout permitem-te sem custos organizar momentos de partilha e encontros virtuais.)&nbsp;</li>\n</ol>\n<img src=\"https://drive.google.com/uc?export=view&id=1Rv3RE4ASbtIWStofMJu7hD-OvMGVx4WS\" alt=\"undefined\" style=\"height: auto;width: auto\"/>\n<p>2. Criar um espaço online para partilha de ideias, comunicação e realização de atividades em conjunto.</p>\n<img src=\"https://drive.google.com/uc?export=view&id=1qRudmXQVW6fdoLHkVQ80udTPJo1djabC\" alt=\"undefined\" style=\"height: auto;width: auto\"/>\n<p>3. Organizar um fogo de conselho virtual, cantando juntas e partilhando as vossas canções favoritas.&nbsp;&nbsp;</p>\n<img src=\"https://drive.google.com/uc?export=view&id=1FpxM_6HMUS6iKyf9HXzFvbIA4_MP7rGU\" alt=\"undefined\" style=\"height: auto;width: auto\"/>\n<p></p>\n','<p style=\"text-align:justify;\"><span style=\"color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 14px;font-family: Poppins, sans-serif;\">Querida Guia, </span></p>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 14px;font-family: Poppins, sans-serif;\">Agora que já sabemos que as atividades presenciais estão suspensas, temos de por a tristeza ao largo e como<br>é típico das Guias encontrar formas de estarmos juntas e contagiar com a nossa alegria todos os que nos rodeiam. </span></p>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 14px;font-family: Poppins, sans-serif;\">Deixamos-te algumas dicas - algumas das quais sabemos que já estás a por em prática - para te manteres ligada à tua Patrulha e às tuas amigas Guias neste tempo de distanciamento social.  </span></p>\n<p><span style=\"color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 14px;font-family: Poppins, sans-serif;\">1. Organizar reuniões online, utilizando plataformas de videoconferência. (Plataformas como o Zoom, Skype ou Google Hangout permitem-te sem custos organizar momentos de partilha e encontros virtuais.) </span></p>\n<img src=\"https://drive.google.com/uc?export=view&id=1Rv3RE4ASbtIWStofMJu7hD-OvMGVx4WS\" alt=\"undefined\" style=\"height: auto;width: auto\"/>\n<p><span style=\"color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 14px;font-family: Poppins, sans-serif;\">2. Criar um espaço online para partilha de ideias, comunicação e realização de atividades em conjunto.</span></p>\n<img src=\"https://drive.google.com/uc?export=view&id=1qRudmXQVW6fdoLHkVQ80udTPJo1djabC \" alt=\"undefined\" style=\"height: auto;width: auto\"/>\n<p><span style=\"color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 14px;font-family: Poppins, sans-serif;\">3. Organizar um fogo de conselho virtual, cantando juntas e partilhando as vossas canções favoritas.  </span></p>\n<img src=\"https://drive.google.com/uc?export=view&id=1FpxM_6HMUS6iKyf9HXzFvbIA4_MP7rGU\" alt=\"undefined\" style=\"height: auto;width: auto\"/>\n<p></p>\n','1','2020-06-28'),
('Pandemia por Surto de Coronavírus','Pandemia por Surto de Coronavírus','https://drive.google.com/uc?export=view&id=1T8z39RdU1d1i1PJ8CNihjIotrp1DzXmU','https://drive.google.com/uc?export=view&id=1AJCAjNs_IibKefFBC_qOw2WnFqJuRFrX','Atividades Guidistas presenciais suspensas pela necessidade do isolamento social.','Atividades Guidistas presenciais suspensas pela necessidade do isolamento social.','MAR 2020','MAR 2020','<p style=\"text-align:justify;\">Com os recentes desenvolvimentos da pandemia por surto pelo novo Coronavírus (COVID-19), e em linha com as recomendações das autoridades nacionais, a Associação Guias de Portugal informa que:&nbsp;&nbsp;</p>\n<ul>\n<li>As atividades presenciais guidistas estão suspensas, sendo retomadas de acordo com a evolução epidemiológica e orientações da Direção Geral de Saúde;</li>\n<li>Os Serviços Administrativos Nacionais estarão a funcionar em regime de teletrabalho, mantendo todo o apoio às associadas por e-mail e telefone;&nbsp;</li>\n<li>O Depósito de Material e Fardamento estará encerrado enquanto estiverem suspensas as atividades presenciais guidistas.&nbsp;&nbsp;</li>\n</ul>\n<p style=\"text-align:justify;\">Estas medidas não devem ser encaradas com alarmismo, mas sim com a prudência e a responsabilidade que a todos se exige neste momento.&nbsp;</p>\n<p style=\"text-align:justify;\">Todos temos a responsabilidade de fazer a nossa parte e com serenidade garantir um comportamento responsável e consciente na prevenção deste surto, por forma a regressar à normalidade o mais breve possível.&nbsp;&nbsp;</p>\n<p style=\"text-align:justify;\">A Direção Geral de Saúde tem informação importante sobre este tema, pelo que partilhamos também algumas das ações que estão ao alcance de todos (disponíveis em:&nbsp;</p>\n<ul>\n<li>A melhor forma de ajudar é mantendo-se informado, recorrendo a fontes de informação de Instituições Oficiais como Direção Geral de Saúde (DGS), Organização Mundial de Saúde (OMS), Serviço Nacional de Saúde (SNS), Instituto Nacional de Emergência Médica (INEM), com factos que combatam as informações enviesadas ou contraditórias;&nbsp;</li>\n<li>Em caso de sintomas contacte o SNS24 (808 24 24 24) e siga as recomendações que lhe forem dadas;&nbsp;</li>\n<li style=\"text-align:justify;\">Seja um “Agente de Saúde Pública” e promova boas práticas como higiene das mãos e etiqueta respiratória;&nbsp;</li>\n<li>Consulte os materiais de divulgação e partilhe-o com a sua rede de contactos. Mantenha-se informado!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>\n</ul>\n','<p style=\"text-align:justify;\"><span style=\"color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 14px;font-family: Poppins, sans-serif;\">Com os recentes desenvolvimentos da pandemia por surto pelo novo Coronavírus (COVID-19), e em linha com as recomendações das autoridades nacionais, a Associação Guias de Portugal informa que:  </span></p>\n<ul>\n<li style=\"margin-left:1.5em;\"><span style=\"color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 14px;font-family: Poppins, sans-serif;\">As atividades presenciais guidistas estão suspensas, sendo retomadas de acordo com a evolução epidemiológica e orientações da Direção Geral de Saúde;</span></li>\n<li style=\"margin-left:1.5em;\"><span style=\"color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 14px;font-family: Poppins, sans-serif;\">Os Serviços Administrativos Nacionais estarão a funcionar em regime de teletrabalho, mantendo todo o apoio às associadas por e-mail e telefone; </span></li>\n<li style=\"margin-left:1.5em;\"><span style=\"color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 14px;font-family: Poppins, sans-serif;\">O Depósito de Material e Fardamento estará encerrado enquanto estiverem suspensas as atividades presenciais guidistas.  </span></li>\n</ul>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 14px;font-family: Poppins, sans-serif;\">Estas medidas não devem ser encaradas com alarmismo, mas sim com a prudência e a responsabilidade que a todos se exige neste momento. </span></p>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 14px;font-family: Poppins, sans-serif;\">Todos temos a responsabilidade de fazer a nossa parte e com serenidade garantir um comportamento responsável e consciente na prevenção deste surto, por forma a regressar à normalidade o mais breve possível.  </span></p>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 14px;font-family: Poppins, sans-serif;\">A Direção Geral de Saúde tem informação importante sobre este tema, pelo que partilhamos também algumas das ações que estão ao alcance de todos (disponíveis em: </span></p>\n<ul>\n<li style=\"margin-left:1.5em;\"><span style=\"color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 14px;font-family: Poppins, sans-serif;\">A melhor forma de ajudar é mantendo-se informado, recorrendo a fontes de informação de Instituições Oficiais como Direção Geral de Saúde (DGS), Organização Mundial de Saúde (OMS), Serviço Nacional de Saúde (SNS), Instituto Nacional de Emergência Médica (INEM), com factos que combatam as informações enviesadas ou contraditórias; </span></li>\n<li style=\"margin-left:1.5em;\"><span style=\"color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 14px;font-family: Poppins, sans-serif;\">Em caso de sintomas contacte o SNS24 (808 24 24 24) e siga as recomendações que lhe forem dadas; </span></li>\n<li style=\"text-align:justify;\"><span style=\"color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 14px;font-family: Poppins, sans-serif;\">Seja um “Agente de Saúde Pública” e promova boas práticas como higiene das mãos e etiqueta respiratória; </span></li>\n<li style=\"margin-left:1.5em;\"><span style=\"color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 14px;font-family: Poppins, sans-serif;\">Consulte os materiais de divulgação e partilhe-o com a sua rede de contactos. Mantenha-se informado!   </span></li>\n</ul>\n','1','2020-03-15'),
('Lição moçambique reconstrói salas de aula','Lição moçambique reconstrói salas de aula','https://drive.google.com/uc?export=view&id=1FR_0HcUPYaeVnobNdaL3yqkYFk3snKwv','https://drive.google.com/uc?export=view&id=16fEzUepR-BLXS6gQ19MIbm8zm0aLTTHY','As Guias da Região de Lisboa e a Helpo em parceria por Moçambique depois da tragédia.','As Guias da Região de Lisboa e a Helpo em parceria por Moçambique depois da tragédia.','JAN 2020','JAN 2020','<p style=\"text-align:justify;\">Após as catástrofes naturais que afetaram Moçambique em março de 2019, as Guias da Região de Lisboa assumiram o compromisso de desenvolver um projeto que ajudasse a população a recuperar da tragédia. Encontrou na <a href=\"https://www.helpo.pt/\" target=\"_blank\">Helpo</a>  , parceria necessária para garantir que o projeto iria de encontro às necessidades locais e que os recursos mobilizados seriam aplicados da melhor forma.&nbsp;</p>\n<p style=\"text-align:justify;\">Assim nasceu o projeto Lição Moçambique que visa a angariação de fundos para a reconstrução de salas de<br>aulas destruídas pelos furacões, para que as crianças possam voltar a ter condições nas escolas.&nbsp;</p>\n<p style=\"text-align:justify;\">Cada Companhia organizou assim um evento de angariação de fundos que reverterá para esta causa. Entre coros de Natal, jantares e almoços temáticos, torneios desportivos, noites de fado, vendas de Natal e muitas outras ideias, a Região levou esta causa a várias comunidades, contando com o envolvimento, participação e criatividade de todas as Guias.&nbsp;</p>\n<p style=\"text-align:justify;\">O fim do projeto assinala-se no próximo dia 22 de fevereiro, Dia Mundial do Pensamento, e as Guias da Região de Lisboa agradecem a todos os que já participaram.</p>\n','<p style=\"text-align:justify;\"><span style=\"color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 14px;font-family: Poppins, sans-serif;\">Após as catástrofes naturais que afetaram Moçambique em março de 2019, as Guias da Região de Lisboa assumiram o compromisso de desenvolver um projeto que ajudasse a população a recuperar da tragédia. Encontrou na </span><a href=\"https://www.helpo.pt/\" target=\"_blank\"><span style=\"color: rgb(0,123,255);background-color: transparent;font-size: 14px;font-family: Poppins, sans-serif;\">Helpo</span></a><span style=\"color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 14px;font-family: Poppins, sans-serif;\">  , parceria necessária para garantir que o projeto iria de encontro às necessidades locais e que os recursos mobilizados seriam aplicados da melhor forma. </span></p>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 14px;font-family: Poppins, sans-serif;\">Assim nasceu o projeto Lição Moçambique que visa a angariação de fundos para a reconstrução de salas de<br>aulas destruídas pelos furacões, para que as crianças possam voltar a ter condições nas escolas. </span></p>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 14px;font-family: Poppins, sans-serif;\">Cada Companhia organizou assim um evento de angariação de fundos que reverterá para esta causa. Entre coros de Natal, jantares e almoços temáticos, torneios desportivos, noites de fado, vendas de Natal e muitas outras ideias, a Região levou esta causa a várias comunidades, contando com o envolvimento, participação e criatividade de todas as Guias. </span></p>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 14px;font-family: Poppins, sans-serif;\">O fim do projeto assinala-se no próximo dia 22 de fevereiro, Dia Mundial do Pensamento, e as Guias da Região de Lisboa agradecem a todos os que já participaram.</span></p>\n','1','2020-01-12'),
('2020, Ano Internacional da Fitossanidade','2020, Ano Internacional da Fitossanidade','https://drive.google.com/uc?export=view&id=1eloPRmng7wokpk-3gvG_8ceVKAsw2--n','https://drive.google.com/uc?export=view&id=1fh-Nr-TpHBP7tXax80PkiAQ3XWYrPulf','Pela iniciativa da FAO e da IPPC este é o ano da proteção da saúde das plantas.','Pela iniciativa da FAO e da IPPC este é o ano da proteção da saúde das plantas.','JAN 2020','JAN 2020','<p style=\"text-align:justify;\">&nbsp;A Assembleia Geral das Nações Unidas proclamou 2020 como o Ano Internacional da Fitossanidade, por sugestão da Organização das Nações Unidas para a Alimentação e a Agricultura (FAO) e do Secretariado do International Plant Protection Convention (IPPC).&nbsp;</p>\n<p style=\"text-align:justify;\">As plantas são a base de toda a vida na Terra e das funções do ecossistema. Elas produzem o oxigénio que respiramos. Fornecem mais de 80% da comida que comemos. Usamo-las para fazer roupa, abrigo, medicamentos e muitas outras coisas que são essenciais para as nossas vidas.&nbsp;</p>\n<p style=\"text-align:justify;\">Mas as plantas estão sob ataque constante de pragas invasoras. Estas pragas podem danificar gravemente as culturas, as florestas e outros recursos naturais dos quais dependemos. A cada ano, causam bilhões de perdas em colheitas e receitas comerciais, além de dispendiosos esforços de erradicação. Na maioria das vezes, estas pragas são disseminadas pelas pessoas, especialmente através de viagens e do comércio internacionais.&nbsp;</p>\n<p style=\"text-align:justify;\">O principal objetivo deste ano é proteger as plantas do mundo contra a propagação de pragas devastadoras, que podem causar danos ambientais e económicos significativos. Pretende-se mobilizar governos, indústrias, organizações, cientistas e a sociedade civil para promover práticas responsáveis que reduzam a sua propagação, desenvolver métodos inovadores e científicos para enfrentar estas ameaças e aumentar o apoio dos sectores público e privado a estratégias e serviços fitossanitários mais sustentáveis.&nbsp;&nbsp;</p>\n<p style=\"text-align:justify;\"><strong>Mas como proteger a saúde das plantas pode ajudar a resolver os grandes desafios globais? </strong></p>\n<p style=\"text-align:justify;\">Ao proteger a saúde vegetal de pragas invasoras, ajudamos a aumentar a segurança alimentar, a reduzir a<br>pobreza, a proteger o meio ambiente e a impulsionar o desenvolvimento económico.&nbsp;</p>\n<p style=\"text-align:justify;\"><ins>Impulsionando a segurança alimentar </ins></p>\n<p style=\"text-align:justify;\">Um abastecimento alimentar suficiente e sustentável é necessário para aumentar a segurança alimentar e<br>eliminar a fome. A FAO estima que as pragas invasoras prejudicam até 40% de todas as culturas alimentares a nível mundial a cada ano. Usando ciência, tecnologia e regulamentações, é possível retardar a disseminação de pragas nocivas que destroem as colheitas de alimentos e outros recursos que são críticos para a segurança alimentar a longo prazo.&nbsp;&nbsp;</p>\n<p style=\"text-align:justify;\"><ins>Reduzindo a pobreza </ins></p>\n<p style=\"text-align:justify;\">Para a maioria dos países emdesenvolvimento, a agricultura é uma fonte primária de rendimento. Os estudos<br>demonstraram que o crescimento dos rendimentos agrícolas pode reduzir significativamente a pobreza. No entanto, as pragas invasoras podem ter efeitos devastadores sobre a agricultura e os recursos naturais e ao proteger as plantas contra as pragas, ajudamos a aumentar a produtividade agrícola e a<br>melhorar os rendimentos rurais, reduzindo a pobreza.&nbsp;&nbsp;</p>\n<p style=\"text-align:justify;\"><ins>Protegendo o meio ambiente e a saúde humana </ins></p>\n<p style=\"text-align:justify;\">As pragas invasoras são um dos principais fatores de perda de biodiversidade em todo o mundo. Quando uma praga é introduzida, pode competir pelos recursos com as espécies nativas, pois pode não ter inimigos naturais. Os surtos de pragas têm devastado as culturas ao longo da história e continuam a ameaçar a segurança alimentar hoje em dia. Ao evitar a propagação de pragas vegetais em novas áreas, ajudamos a preservar a variedade de espécies dentro de um determinado ecossistema. Os esforços para reduzir a propagação de pragas invasoras também podem ajudar a conter o uso de pesticidas, que afetam as abelhas e outros polinizadores. Uma ameaça à saúde das plantas é também uma ameaça à saúde e prosperidade das pessoas em todo o mundo, especialmente as mais vulneráveis.&nbsp;&nbsp;</p>\n','<p style=\"text-align:justify;\"><span style=\"color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 14px;font-family: Poppins, sans-serif;\">A Assembleia Geral das Nações Unidas proclamou 2020 como o Ano Internacional da Fitossanidade, por sugestão da Organização das Nações Unidas para a Alimentação e a Agricultura (FAO) e do Secretariado do International Plant Protection Convention (IPPC). </span></p>\n<p style=\"text-align:left;\"><span style=\"color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 14px;font-family: Poppins, sans-serif;\">As plantas são a base de toda a vida na Terra e das funções do ecossistema. Elas produzem o oxigénio que respiramos. Fornecem mais de 80% da comida que comemos. Usamo-las para fazer roupa, abrigo, medicamentos e muitas outras coisas que são essenciais para as nossas vidas. </span></p>\n<p style=\"text-align:left;\"><span style=\"color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 14px;font-family: Poppins, sans-serif;\">Mas as plantas estão sob ataque constante de pragas invasoras. Estas pragas podem danificar gravemente as culturas, as florestas e outros recursos naturais dos quais dependemos. A cada ano, causam bilhões de perdas em colheitas e receitas comerciais, além de dispendiosos esforços de erradicação. Na maioria das vezes, estas pragas são disseminadas pelas pessoas, especialmente através de viagens e do comércio internacionais. </span></p>\n<p style=\"text-align:left;\"><span style=\"color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 14px;font-family: Poppins, sans-serif;\">O principal objetivo deste ano é proteger as plantas do mundo contra a propagação de pragas devastadoras, que podem causar danos ambientais e económicos significativos. Pretende-se mobilizar governos, indústrias, organizações, cientistas e a sociedade civil para promover práticas responsáveis que reduzam a sua propagação, desenvolver métodos inovadores e científicos para enfrentar estas ameaças e aumentar o apoio dos sectores público e privado a estratégias e serviços fitossanitários mais sustentáveis.  </span></p>\n<p style=\"text-align:left;\"><span style=\"color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 14px;font-family: Poppins, sans-serif;\"><strong>Mas como proteger a saúde das plantas pode ajudar a resolver os grandes desafios globais? </strong></span></p>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 14px;font-family: Poppins, sans-serif;\">Ao proteger a saúde vegetal de pragas invasoras, ajudamos a aumentar a segurança alimentar, a reduzir a<br>pobreza, a proteger o meio ambiente e a impulsionar o desenvolvimento económico. </span></p>\n<p style=\"text-align:left;\"><span style=\"color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 14px;font-family: Poppins, sans-serif;\"><ins>Impulsionando a segurança alimentar </ins></span></p>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 14px;font-family: Poppins, sans-serif;\">Um abastecimento alimentar suficiente e sustentável é necessário para aumentar a segurança alimentar e<br>eliminar a fome. A FAO estima que as pragas invasoras prejudicam até 40% de todas as culturas alimentares a nível mundial a cada ano. Usando ciência, tecnologia e regulamentações, é possível retardar a disseminação de pragas nocivas que destroem as colheitas de alimentos e outros recursos que são críticos para a segurança alimentar a longo prazo.  </span></p>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 14px;font-family: Poppins, sans-serif;\"><ins>Reduzindo a pobreza </ins></span></p>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 14px;font-family: Poppins, sans-serif;\">Para a maioria dos países emdesenvolvimento, a agricultura é uma fonte primária de rendimento. Os estudos<br>demonstraram que o crescimento dos rendimentos agrícolas pode reduzir significativamente a pobreza. No entanto, as pragas invasoras podem ter efeitos devastadores sobre a agricultura e os recursos naturais e ao proteger as plantas contra as pragas, ajudamos a aumentar a produtividade agrícola e a<br>melhorar os rendimentos rurais, reduzindo a pobreza.  </span></p>\n<p style=\"text-align:left;\"><span style=\"color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 14px;font-family: Poppins, sans-serif;\"><ins>Protegendo o meio ambiente e a saúde humana </ins></span></p>\n<p><span style=\"color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 14px;font-family: Poppins, sans-serif;\">As pragas invasoras são um dos principais fatores de perda de biodiversidade em todo o mundo. Quando uma praga é introduzida, pode competir pelos recursos com as espécies nativas, pois pode não ter inimigos naturais. Os surtos de pragas têm devastado as culturas ao longo da história e continuam a ameaçar a segurança alimentar hoje em dia. Ao evitar a propagação de pragas vegetais em novas áreas, ajudamos a preservar a variedade de espécies dentro de um determinado ecossistema. Os esforços para reduzir a propagação de pragas invasoras também podem ajudar a conter o uso de pesticidas, que afetam as abelhas e outros polinizadores. Uma ameaça à saúde das plantas é também uma ameaça à saúde e prosperidade das pessoas em todo o mundo, especialmente as mais vulneráveis.  </span></p>\n','1','2020-01-12'),
('Novembro, Mês do Mar','November, Sea Month','https://drive.google.com/uc?export=view&id=1EThNdykOdXyMsaVzWZ8J-KOXIUZSkASf','https://drive.google.com/uc?export=view&id=1sfY5V2Euy67wM_yi0xxDq4oxFgC2lFR7','AGP em ação comemorativa conjunta com o Oceanário de Lisboa e a Fundação Oceano Azul.','AGP em ação comemorativa conjunta com o Oceanário de Lisboa e a Fundação Oceano Azul.','OUT 2019','OUT 2019','<p><span style=\"font-family: Verdana;\"> A Associação Guias de Portugal associou-se ao Oceanário de Lisboa e à Fundação Oceano Azul para uma ação nacional de limpeza de praias, rios e zonas ribeirinhas durante o mês de novembro, comemorando assim o mês do Mar.</span></p>\n<p><span style=\"font-size: 11pt;font-family: Verdana;\">Esta iniciativa é exclusiva para Guias, Escoteiros e Escuteiros, e pretende ser um exemplo na promoção de boas práticas ambientais e de um futuro mais sustentável.</span></p>\n','<p style=\"text-align:start;\"><span style=\"color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 14px;font-family: Verdana;\">A Associação Guias de Portugal associou-se ao Oceanário de Lisboa e à Fundação Oceano Azul para uma ação nacional de limpeza de praias, rios e zonas ribeirinhas durante o mês de novembro, comemorando assim o mês do Mar.</span></p>\n<p style=\"text-align:start;\"><span style=\"color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 14px;font-family: Verdana;\">Esta iniciativa é exclusiva para Guias, Escoteiros e Escuteiros, e pretende ser um exemplo na promoção de boas práticas ambientais e de um futuro mais sustentável.</span></p>\n','0','2019-10-05'),
('16ª Conferência Europeia','16th European Conference','https://drive.google.com/uc?export=view&id=1X3lcZawKNtj8fktlxb9zl4lfvVVetm0x','https://drive.google.com/uc?export=view&id=17D08eKoLfId1pwOxc9naPaKO48QEizoh','Eleito novo Comité Europeu da Associação Mundial das Guias, este verão, na Croácia.','Eleito novo Comité Europeu da Associação Mundial das Guias, este verão, na Croácia.','OUT 2019','OUT 2019','<p style=\"text-align:justify;\">A Universidade de Split, na Croácia, acolheu, de 24 a 28 de agosto, a 16ª Conferência Europeia da Associação Mundial das Guias (WAGGGS), um momento importante de reunião, encontro e partilha que a cada três anos junta as associações dos países da Região Europa onde existem Guias.&nbsp;</p>\n<p style=\"text-align:justify;\">Estiveram presentes associações de 37 países, incluindo a Associação Guias de Portugal, contribuindo para um amplo debate sobre o trabalho desenvolvido nos últimos anos, bem como os objetivos estratégicos da Região Europa para o próximo triénio. Nesta conferência, foi também eleito o novo Comité Europeu.&nbsp;</p>\n<p style=\"text-align:justify;\">O tema da Conferência foi Unite, Thrive and Growth (unir, prosperar e crescer) e nesse sentido foram também promovidos momentos de formação promovidos pela WAGGGS e espaços de partilha de boas práticas entre países, capazes de reforçar o espírito de união e apoiar o desenvolvimento e crescimento do Guidismo na Região Europa. A Conferência é também uma oportunidade para o país de acolhimento dar a conhecer a sua cultura e através desses momentos promover o convívio e networking entre os países.&nbsp;</p>\n<p style=\"text-align:justify;\">Na Conferência estiveram ainda presentes membros do Comité Mundial da WAGGGS, nomeadamente a Presidente, Ana Maria Mideros, com quem os países puderam agendar um encontro informal. Portugal naturalmente aproveitou esse momento para dar a conhecer alguns desafios do próximo triénio e saber mais sobre os projetos em curso no âmbito da Associação Mundial.&nbsp;</p>\n<p style=\"text-align:justify;\">A próxima Conferência Europeia terá lugar na cidade de Roterdão, na Holanda, em 2022.&nbsp;&nbsp;</p>\n','<p style=\"text-align:justify;\"><span style=\"color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 14px;font-family: Poppins, sans-serif;\">A Universidade de Split, na Croácia, acolheu, de 24 a 28 de agosto, a 16ª Conferência Europeia da Associação Mundial das Guias (WAGGGS), um momento importante de reunião, encontro e partilha que a cada três anos junta as associações dos países da Região Europa onde existem Guias. </span></p>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 14px;font-family: Poppins, sans-serif;\">Estiveram presentes associações de 37 países, incluindo a Associação Guias de Portugal, contribuindo para um amplo debate sobre o trabalho desenvolvido nos últimos anos, bem como os objetivos estratégicos da Região Europa para o próximo triénio. Nesta conferência, foi também eleito o novo Comité Europeu. </span></p>\n<p style=\"text-align:left;\"><span style=\"color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 14px;font-family: Poppins, sans-serif;\">O tema da Conferência foi Unite, Thrive and Growth (unir, prosperar e crescer) e nesse sentido foram também promovidos momentos de formação promovidos pela WAGGGS e espaços de partilha de boas práticas entre países, capazes de reforçar o espírito de união e apoiar o desenvolvimento e crescimento do Guidismo na Região Europa. A Conferência é também uma oportunidade para o país de acolhimento dar a conhecer a sua cultura e através desses momentos promover o convívio e networking entre os países. </span></p>\n<p style=\"text-align:justify;\"><span style=\"color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 14px;font-family: Poppins, sans-serif;\">Na Conferência estiveram ainda presentes membros do Comité Mundial da WAGGGS, nomeadamente a Presidente, Ana Maria Mideros, com quem os países puderam agendar um encontro informal. Portugal naturalmente aproveitou esse momento para dar a conhecer alguns desafios do próximo triénio e saber mais sobre os projetos em curso no âmbito da Associação Mundial. </span></p>\n<p style=\"text-align:left;\"><span style=\"color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 14px;font-family: Poppins, sans-serif;\">A próxima Conferência Europeia terá lugar na cidade de Roterdão, na Holanda, em 2022.</span></p>\n','1','2019-09-30');
('Ser Avezinha, a nova trilogia de livros','Ser Avezinha, a nova trilogia de livros','https://drive.google.com/uc?export=view&id=1F_DpWHctJc3q9P4lKGcXDjBs1RRBDI4S','https://drive.google.com/uc?export=view&id=1F_DpWHctJc3q9P4lKGcXDjBs1RRBDI4S','Ramo Avezinha renovou o programa pedagógico, mais adequado às crianças dos 6 aos 10 anos de hoje','Ramo Avezinha renovou o programa pedagógico, mais adequado às crianças dos 6 aos 10 anos de hoje.','JUN 2019','JUN 2019','<p>A sociedade atual apresenta diversas alterações, quer estruturais, quer ao nível da dinâmica social. A mundo e têm um impacto real, visível nas crianças que chegam hoje à Associação Guias de Portugal.&nbsp;</p>\n<p>Mudaram as suas necessidades e a forma como apreendem o mundo que as rodeia, como se relacionam e onde querem chegar. O imediatismo tecnológico reduziu o tempo dedicado à exploração do mundo (natureza) e à criação de mundos (criatividade).&nbsp;</p>\n<p>As crianças atualmente distinguem-se pela posição crítica que assumem desde muito cedo, aliada a um aumento do conhecimento e domínio tecnológico, por oposição a uma maior dificuldade na relação com os pares e menor capacidade de perseverança e automotivação.&nbsp;&nbsp;</p>\n<p>Se, por um lado, estas condicionantes vêm reforçar a atualidade e a importância do Método Guidista na formação integral de raparigas e jovens mulheres, por outro, trazem consigo novas questões ao nível da adequação dos conteúdos. Como chegar então ao maior número de raparigas? Quais as necessidades sociais que podem ser colmatadas pelo nosso Programa Educativo?&nbsp;</p>\n<p>De nada serve estar parado. Não há alternativa: é o progresso ou a inércia. Avancemos - e com um sorriso no rosto. Baden-Powell&nbsp;&nbsp;</p>\n<p>Foi com este mote que a AGP aceitou o desafio de fazer a revisão do Programa Pedagógico do Ramo Avezinha: atualizar os conteúdos programáticos e otimizar a forma como os comunicamos de forma a dar resposta às Avezinhas, Dirigentes e Encarregados de Educação. Para tal, tínhamos de identificar as mudanças e reajustar os conteúdos a abordar.&nbsp;&nbsp;</p>\n<p>A acção foi, assim, direcionada para seis pontos chave:&nbsp;</p>\n<p>:: Reforçar o imaginário de Ramo de forma a potenciar a criatividade e o brincar, método de excelência para a formação deste segmento etário;&nbsp;</p>\n<p>:: Incentivar várias formas de expressão, para contrariar o crescente isolamento e dificuldades de interação social;&nbsp;</p>\n<p>:: Trabalhar a cidadania e o empreendedorismo;&nbsp;</p>\n<p>:: Capacitar as Avezinhas para os desafios de um mundo cada vez mais rápido, desenvolvendo a observação e a avaliação;&nbsp;</p>\n<p>:: Fortalecer a saúde e a atividade física;&nbsp;&nbsp;</p>\n<p>&nbsp;:: Promover o contacto com a natureza, educando para a ecologia e a sustentabilidade.&nbsp;</p>\n<p>Esta reflexão conduziu à introdução de novas provas, à revisão de conteúdos, à reformulação da comunicação em algumas áreas, e à redação de uma história contínua que fortalecesse o imaginário já existente. Durante os últimos três anos, várias foram as pessoas que fizeram parte deste processo, muitos foram os contributos para que, no dia 7 de setembro, fossem lançados no Encontro Nacional do Ramo Avezinha, os novos Livros da Progressão.&nbsp;&nbsp;</p>\n<img src=\"https://drive.google.com/uc?export=view&id=1ITvARlyLXH7jTbfXxUmxftTAGC-oJ9oE\" alt=\"undefined\" style=\"height: 150px;width: 300px\"/>\n<p></p>\n<p>A nova trilogia SER AVEZINHA apresenta as três etapas da Progressão do Ramo - Tornar-se Avezinha, Asas Verdes e Asas Azuis - com um imaginário contínuo, desde a saída do ovo até ao grande voo para o Ramo Aventura.&nbsp;&nbsp;</p>\n','<p>A sociedade atual apresenta diversas alterações, quer estruturais, quer ao nível da dinâmica social. A mundo e têm um impacto real, visível nas crianças que chegam hoje à Associação Guias de Portugal.&nbsp;</p>\n<p>Mudaram as suas necessidades e a forma como apreendem o mundo que as rodeia, como se relacionam e onde querem chegar. O imediatismo tecnológico reduziu o tempo dedicado à exploração do mundo (natureza) e à criação de mundos (criatividade).&nbsp;</p>\n<p>As crianças atualmente distinguem-se pela posição crítica que assumem desde muito cedo, aliada a um aumento do conhecimento e domínio tecnológico, por oposição a uma maior dificuldade na relação com os pares e menor capacidade de perseverança e automotivação.&nbsp;&nbsp;</p>\n<p>Se, por um lado, estas condicionantes vêm reforçar a atualidade e a importância do Método Guidista na formação integral de raparigas e jovens mulheres, por outro, trazem consigo novas questões ao nível da adequação dos conteúdos. Como chegar então ao maior número de raparigas? Quais as necessidades sociais que podem ser colmatadas pelo nosso Programa Educativo?&nbsp;</p>\n<p>De nada serve estar parado. Não há alternativa: é o progresso ou a inércia. Avancemos - e com um sorriso no rosto. Baden-Powell&nbsp;&nbsp;</p>\n<p>Foi com este mote que a AGP aceitou o desafio de fazer a revisão do Programa Pedagógico do Ramo Avezinha: atualizar os conteúdos programáticos e otimizar a forma como os comunicamos de forma a dar resposta às Avezinhas, Dirigentes e Encarregados de Educação. Para tal, tínhamos de identificar as mudanças e reajustar os conteúdos a abordar.&nbsp;&nbsp;</p>\n<p>A acção foi, assim, direcionada para seis pontos chave:&nbsp;</p>\n<p>:: Reforçar o imaginário de Ramo de forma a potenciar a criatividade e o brincar, método de excelência para a formação deste segmento etário;&nbsp;</p>\n<p>:: Incentivar várias formas de expressão, para contrariar o crescente isolamento e dificuldades de interação social;&nbsp;</p>\n<p>:: Trabalhar a cidadania e o empreendedorismo;&nbsp;</p>\n<p>:: Capacitar as Avezinhas para os desafios de um mundo cada vez mais rápido, desenvolvendo a observação e a avaliação;&nbsp;</p>\n<p>:: Fortalecer a saúde e a atividade física;&nbsp;&nbsp;</p>\n<p>&nbsp;:: Promover o contacto com a natureza, educando para a ecologia e a sustentabilidade.&nbsp;</p>\n<p>Esta reflexão conduziu à introdução de novas provas, à revisão de conteúdos, à reformulação da comunicação em algumas áreas, e à redação de uma história contínua que fortalecesse o imaginário já existente. Durante os últimos três anos, várias foram as pessoas que fizeram parte deste processo, muitos foram os contributos para que, no dia 7 de setembro, fossem lançados no Encontro Nacional do Ramo Avezinha, os novos Livros da Progressão.&nbsp;&nbsp;</p>\n<img src=\"https://drive.google.com/uc?export=view&id=1ITvARlyLXH7jTbfXxUmxftTAGC-oJ9oE\" alt=\"undefined\" style=\"height: 150px;width: 300px\"/>\n<p></p>\n<p>A nova trilogia SER AVEZINHA apresenta as três etapas da Progressão do Ramo - Tornar-se Avezinha, Asas Verdes e Asas Azuis - com um imaginário contínuo, desde a saída do ovo até ao grande voo para o Ramo Aventura.&nbsp;&nbsp;</p>\n','0','2019-07-27'),



-- DROP TABLE IF EXISTS `journal`;

  CREATE TABLE `journal` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `edition`	VARCHAR(10) NOT NULL,
    `pt_title`	VARCHAR(60) NOT NULL,
    `en_title`	VARCHAR(60) NOT NULL,
    `thumbnail`	TEXT NOT NULL,
    `pdf_link` TEXT NOT NULL,
    `pdf_link_en`	TEXT NOT NULL,
    `year` VARCHAR(20) NOT NULL,
    `pt_intro_text_1`	VARCHAR(250),
    `pt_intro_text_2`	VARCHAR(250),
    `pt_intro_text_3`	VARCHAR(250),
    `pt_intro_text_4`	VARCHAR(250),
    `pt_intro_text_5`	VARCHAR(250),
    `en_intro_text_1`	VARCHAR(250),
    `en_intro_text_2`	VARCHAR(250),
    `en_intro_text_3`	VARCHAR(250),
    `en_intro_text_4`	VARCHAR(250),
    `en_intro_text_5`	VARCHAR(250),
    `publish`	BOOL NOT NULL,
    PRIMARY KEY (`id`)
);


INSERT INTO `journal` 
(
edition, 
year, 
pt_title, 
en_title, 
thumbnail, 
pdf_link, 
pdf_link_en, 
pt_intro_text_1, 
pt_intro_text_2, 
pt_intro_text_3, 
pt_intro_text_4, 
pt_intro_text_5, 
en_intro_text_1, 
en_intro_text_2, 
en_intro_text_3, 
en_intro_text_4, 
en_intro_text_5, 
publish) 
VALUES
(
27,
'2020',
 'EU E OUTRO: DESPERTAR PARA UMA RELAÇÃO POSITIVA', 
 'En_title', 
 'https://drive.google.com/uc?export=view&id=1TrImxBFV6vU8y0jGuvtKwtHnrpY1zy-Z', 
 'https://drive.google.com/uc?export=view&id=1Z-76P_ALdKaxJxOyfUOgBPZ8P_25uaUu', 
 'https://drive.google.com/uc?export=view&id=1Z-76P_ALdKaxJxOyfUOgBPZ8P_25uaUu', 
 'A melhor maneira de ser feliz é contribuir para a felicidade dos outros', 
 'A relação com o outro começa na construção do eu', 
 'Direitos Humanos', 
 '',
 '',
'text1',
'text2',
'text3',
'text4',
'text5',
 1
 ),
(
  26, 
'2019', 
'EDUCAR PARA O EMPREENDEDORISMO', 
'En_title', 
'https://drive.google.com/uc?export=view&id=1YNwHUg6GWBYu5kOdo3ItPosodeFCy-pi', 
'https://drive.google.com/uc?export=view&id=1WAhv9i43bEh6pnNW_xkQEEq5AF4n9HAv', 
'https://drive.google.com/uc?export=view&id=1WAhv9i43bEh6pnNW_xkQEEq5AF4n9HAv', 
'Compreender o empreendedorismo', 
'Empreendedores ao longo dos tempos', 
'Como o Guidismo lança a semente do Guidismo', 
'',
'',
'text1',
'text2',
'text3',
'text4',
'text5',
1
),
(
  25, 
'2019', 
'OLAVE, A CRIANÇA, A MULHER, A CHEFE MUNDIAL DAS GUIAS',
'En_title', 
'https://drive.google.com/uc?export=view&id=1_sJmkaYbQbg943ktZ6gCPDRMzu_CqTxS',
'https://drive.google.com/uc?export=view&id=113uZ8lbSvKDzzLMgYbFImYTFCgz8mxL4',
'https://drive.google.com/uc?export=view&id=113uZ8lbSvKDzzLMgYbFImYTFCgz8mxL4',
'À conversa com a neta de Olave', 
'A Guia portuguesa que se correspondia com Olave', 
'Olave Baden-Powell Society', 
'Prémio Olave',
'',
'text1',
'text2',
'text3',
'text4',
'text5',
1
),
(
  24, 
'2018', 
'OBJECTIVOS DE DESENVOLVIMENTO SUSTENTÁVEL', 
'En_title', 
'https://drive.google.com/uc?export=view&id=1rRBvuZqKjMv62uWlnSbGzuir7Hk3Y0cf',
'https://drive.google.com/uc?export=view&id=16akc18T8YmXV_t5sWLgPtNFdAaXPMIUE',
'https://drive.google.com/uc?export=view&id=16akc18T8YmXV_t5sWLgPtNFdAaXPMIUE',
'Uma agenda para sensibilizar', 
'Uma agenda para reflectir', 
'Uma agenda para viver', 
'',
'',
'text1',
'text2',
'text3',
'text4',
'text5',
1
),
(
  23, 
'2018', 
'JOGAR O JOGO', 
'En_title', 
'https://drive.google.com/uc?export=view&id=1H1Ph59vJSZ-iTUFkf4Y9tcpwHWuqTVJ6',
'https://drive.google.com/uc?export=view&id=1kFeKACNrVsauL0s2LlCOsg9my1fRGhVB',
'https://drive.google.com/uc?export=view&id=1kFeKACNrVsauL0s2LlCOsg9my1fRGhVB',
'O jogo como veículo de aprendizagem', 
'O jogo no centro do Método Guidista e como objetivo pedagógico', 
'Jogos populares e tradicionais', 
'',
'',
'text1',
'text2',
'text3',
'text4',
'text5',
1
),
(
  22, 
'2017', 
'OTIMISMO: CAMINHO A SEGUIR', 
'En_title', 
'https://drive.google.com/uc?export=view&id=1YEXpkiBbYLWcoaxHB3y-CetXgJJQp-IC',
'https://drive.google.com/uc?export=view&id=1lZvNfIxyd2mnSppdHXtHRDg2vgbrnJOF',
'https://drive.google.com/uc?export=view&id=1lZvNfIxyd2mnSppdHXtHRDg2vgbrnJOF',
'O sorriso é um dom biológico', 
'A Guia tem sempre boa disposição de espírito', 
'Fontes de inspiração', 
'',
'',
'text1',
'text2',
'text3',
'text4',
'text5',
1
),
(
  21, 
'2017', 
'AR LIVRE: UM LABORATÓRIO, UM CLUBE, UM TEMPLO', 
'En_title', 
'https://drive.google.com/uc?export=view&id=12c5YOzAlMSdjjGtw3Mn1iv_I2moG6Vm0',
'https://drive.google.com/uc?export=view&id=1yPT8LR9TannTEFrpxPxlcV3SCB26Fwqx',
'https://drive.google.com/uc?export=view&id=1yPT8LR9TannTEFrpxPxlcV3SCB26Fwqx',
'A importância da convivência com o ar livre', 
'O ar livre como ferramenta do Método Guidista', 
'O acampamento Guidista', 
'',
'',
'text1',
'text2',
'text3',
'text4',
'text5',
1
),
(
  20, 
'2016', 
'ASSOCIAÇÃO GUIAS DE PORTUGAL: 85 ANOS A EDUCAR', 
'En_title', 
'https://drive.google.com/uc?export=view&id=156C-bFPr4yYpkwF5we24IOaYADNz_uPo',
'https://drive.google.com/uc?export=view&id=14-NmXQOFLtBcR5Kq2srhVOr0z6J-sgrc',
'https://drive.google.com/uc?export=view&id=14-NmXQOFLtBcR5Kq2srhVOr0z6J-sgrc',
'Impacto do Guidismo', 
'Origem do Guidismo em Portugal', 
'Presidentes e Comissárias Nacionais', 
'Entrevista com duas das Guias mais antigas de Portugal',
'Sedes Nacionais',
'text1',
'text2',
'text3',
'text4',
'text5',
1
),
(
  19, 
'2016', 
'JOGOS OLÍMPICOS: MAIS RÁPIDO, MAIS ALTO E MAIS FORTE', 
'En_title', 
'https://drive.google.com/uc?export=view&id=1p3HnwNww8Ii5pmoSfz75ErHQFY6QKbx6',
'https://drive.google.com/uc?export=view&id=1XfisjmHR42w1Jo9_IdVzg3AF5HVu3NPX',
'https://drive.google.com/uc?export=view&id=1XfisjmHR42w1Jo9_IdVzg3AF5HVu3NPX',
'Semelhanças entre o Guidismo e os Jogos Olímpicos', 
'História dos Jogos Olímpicos e recordes mundiais', 
'Os símbolos e as modalidades', 
'Jogos de Inverno e Paralímpicos',
'Portugal nas Olimpíadas',
'text1',
'text2',
'text3',
'text4',
'text5',
1
),
(
  18, 
'2015', 
'POLÍTICA: DE TODOS PARA TODOS', 
'En_title', 
'https://drive.google.com/uc?export=view&id=1ufDQCMobjO38PP1LDR9u8FZc19jtp9ON',
'https://drive.google.com/uc?export=view&id=1SOAADFFGFFDtOtO1EgI5mv-mzt3rM1Wh',
'https://drive.google.com/uc?export=view&id=1SOAADFFGFFDtOtO1EgI5mv-mzt3rM1Wh',
'Democracia vs ditadura', 
'Monarquia, república e sistemas de governo', 
'ONU e UE', 
'Sistema político português',
'',
'text1',
'text2',
'text3',
'text4',
'text5',
1
),
(
  17, 
'2015', 
'INTERNET: NAVEGAR É PRECISO, MAS EM SEGURANÇA', 
'En_title', 
'https://drive.google.com/uc?export=view&id=1v0gf6t33_Wo7cebzNCQTA2EGJsHVglxV',
'https://drive.google.com/uc?export=view&id=146g7Wop6II0m0GhyihJ4tWS0pxBLjMV_',
'https://drive.google.com/uc?export=view&id=146g7Wop6II0m0GhyihJ4tWS0pxBLjMV_',
'Entrevista com o Centro Internet Segura', 
'Os direitos dos utilizadores da Internet', 
'Surf Smart, uma proposta da WAGGGS', 
'O que fazer para uma navegação segura',
'',
'text1',
'text2',
'text3',
'text4',
'text5',
1
),
(
  16, 
'2014', 
'DESPERDÍCIO ALIMENTAR - DA TERRA ATÉ À MESA', 
'En_title', 
'https://drive.google.com/uc?export=view&id=1Q66krApx_Bil41jtYuJm4uX6rxeTU8DX',
'https://drive.google.com/uc?export=view&id=1q7OKJ3rMlyvPzgngq4DuqLSvZRjZQlc5',
'https://drive.google.com/uc?export=view&id=1q7OKJ3rMlyvPzgngq4DuqLSvZRjZQlc5',
'Desperdício alimentar no mundo', 
'Campanha ONU think eat save', 
'Desperdício alimentar em Portugal', 
'As iniciativas portuguesas',
'As iniciativas das Guias',
'text1',
'text2',
'text3',
'text4',
'text5',
1
);




-- DROP TABLE IF EXISTS `store`;

CREATE TABLE `store` (
  `id`	INTEGER NOT NULL AUTO_INCREMENT,
  `category_pt` VARCHAR(60) NOT NULL,
  `category_en` VARCHAR(60) NOT NULL,
  `pt_description`	VARCHAR(60) NOT NULL,
  `en_description`	VARCHAR(60) NOT NULL,
  `thumbnail`	TEXT NOT NULL,
  `price`	VARCHAR(25) NOT NULL,
  `publish`	BOOL NOT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO `store` (category_pt, category_en, pt_description, en_description, thumbnail, price, publish) VALUES
( 'livros', 'books', 'Tornar-se Avezinha', 'en_description', 'https://drive.google.com/uc?export=view&id=1w8iZUzbIL5WIytDLzQonPN_uSu4kGNMi' ,'2,5€', 1 ),
( 'livros', 'books', 'Asas Verdes', 'en_description', 'https://drive.google.com/uc?export=view&id=1Lc4HlTRLpv3usHoKKQ_fmDtNvcAfKsfe' ,'2,5€', 1 ),
( 'livros', 'books', 'Asas Azuis', 'en_description', 'https://drive.google.com/uc?export=view&id=1HrdLhv-4nGw6d73H7k8PdQ-lv0KHuUvD' ,'1,5€', 1 ),
( 'livros', 'books', 'Primeira Aventura', 'en_description', 'https://drive.google.com/uc?export=view&id=1eDpFVevkWlVDaW_2nD_MxZDyNQ5UAD5i' ,'2,5€', 1 ),
( 'livros', 'books', 'Escalada', 'en_description', 'https://drive.google.com/uc?export=view&id=1TvGnd2PsgtI5B1-1tPy00PU3zdL35EGD' ,'2,5€', 1 ),
( 'livros', 'books', 'Horizonte', 'en_description', 'https://drive.google.com/uc?export=view&id=135tzBKeMs9LEBuv9SyvJIpfZX4ARK4Rm' ,'2,55€', 1 ),
( 'livros', 'books', 'Expedição', 'en_description', 'https://drive.google.com/uc?export=view&id=1tk3j7VUcuc0VkFnRchPJll096Vsbn9Y2' ,'9€', 1 ),
( 'livros', 'books', 'Ser Moinho', 'en_description', 'https://drive.google.com/uc?export=view&id=1opJuaRj8a4m1lMyC5YN09UWWDJZ1Dcir' ,'4,5€', 1 ),
( 'livros', 'books', 'O Livro da Dirigente', 'en_description', 'https://drive.google.com/uc?export=view&id=19-S9uBOWASlxVQw_vvoKPEGWKwLnk3Xm' ,'3,75€', 1 ),
( 'livros', 'books', 'Árvores, Lenha e Fogueiras', 'en_description', 'https://drive.google.com/uc?export=view&id=1E3fvThCOkYUzXCAy7RmAYHTQAvRLDVar' ,'2€', 1 ),
( 'fardas', 'Uniforms', 'Lenço de Guia', 'en_description', 'https://drive.google.com/uc?export=view&id=1VzCy9aT2qKpaZnNtc2d8pT3NXu4mnXBd', '2,5€/3,5€', 1 ),
( 'fardas', 'Uniforms', 'Lenço de Dirigente', 'en_description', 'https://drive.google.com/uc?export=view&id=1lmv5voNGfx_IcnwjVo54zO7CmIqWBOFa','3,5€', 1),
( 'fardas', 'Uniforms', 'Lenço de Comissária', 'en_description', 'https://drive.google.com/uc?export=view&id=1kflQSrqkpfpTrvllH47gzfYxflhWaHW8', '3,5€/3,5€', 1 ),
( 'fardas', 'Uniforms', 'Lenço de Efetiva', 'en_description', 'https://drive.google.com/uc?export=view&id=1XekLaa-iq2IoLxySbVgzcE8K2OqYvdQR','3,5€', 1),
( 'fardas', 'Uniforms', 'T-shirt de Avezinha', 'en_description', 'https://drive.google.com/uc?export=view&id=1A1bUwCdroPTqrdBy67F5swsCl7B79bkJ','7,5€', 1),
( 'fardas', 'Uniforms', 'T-shirt de Guia', 'en_description', 'https://drive.google.com/uc?export=view&id=1Jdpq4K3hNUgJ3I1qiLyLvxEh2NZHxrVE','7,5€', 1),
( 'fardas', 'Uniforms', 'Sweat-shirt', 'en_description', 'https://drive.google.com/uc?export=view&id=1056OUCrEgC9V2UkV28mI6YCsuGJjuxur','12€', 1),
( 'fardas', 'Uniforms', 'Camisola de lã', 'en_description', 'https://drive.google.com/uc?export=view&id=1FGpJ1MhdvJIBrZK9TSDe1ksTLDfED1Wp','23,5€', 1),
( 'fardas', 'Uniforms', 'Casaco Polar', 'en_description', 'https://drive.google.com/uc?export=view&id=1KIqJ4S5Rt_yKCI-JNIEsj8pPkbL3cMZL','17,5€/19,5€', 1),
( 'fardas', 'Uniforms', 'Panamá', 'en_description', 'https://drive.google.com/uc?export=view&id=1DsNxRVMUwhbBKmxrSwDQ_9LAklqmSF5S','6,5€', 1),
( 'diversos', 'others', 'Faca de Mato', 'en_description', 'https://drive.google.com/uc?export=view&id=1qYaXphrHtUvJ08r9RTLZkXYBOjokDsIB' , '14,5€', 1),
( 'diversos', 'others', 'Apito', 'en_description', 'https://drive.google.com/uc?export=view&id=1HBTxHmIIGmCiKmHXTVP-2nHs4SquSnBd' , '3,2€', 1),
( 'diversos', 'others', 'Colete AGP', 'en_description', 'https://drive.google.com/uc?export=view&id=1Yhq8lpTAhiv-FmiipImWET_mok_Yd3Xf' , '6,5€/7,5€', 1),
( 'diversos', 'others', 'Cadernos', 'en_description', 'https://drive.google.com/uc?export=view&id=1sfB8fpIhH6eLVY9kbtVU5RdTbVELgc-u' , '3,5€', 1),
( 'diversos', 'others', 'Caneta', 'en_description', 'https://drive.google.com/uc?export=view&id=15HIAR4LHJPdatnaSfb7y7XCTW793D22D', '0,50€', 1 );

-- DROP TABLE IF EXISTS `Association_Sections`;

CREATE TABLE `Association_Sections` (
  `section_id` INTEGER NOT NULL AUTO_INCREMENT,
  `section_text_pt` MEDIUMTEXT NOT NULL,
  `section_text_en` MEDIUMTEXT,
  `section_thumbnail` TEXT NOT NULL,
  `position` INTEGER NOT NULL,
  `publish`BOOL NOT NULL,
  PRIMARY KEY (`section_id`)
);

INSERT INTO `Association_Sections` (
  section_text_pt,
  section_text_en, 
  section_thumbnail,
  position,
  publish) 
  VALUES 
(
'<p><span style="color: rgb(44,130,201);"><strong>Anos 20 </strong></span></p>
<p><strong>As primeiras Guias em Portugal </strong></p>
<p>Em Portugal, o Movimento Guidista surge devido ao entusiasmo de antigas guias inglesas residentes em Portugal que, nos anos 20, juntam grupos de raparigas inglesas e portuguesas, no Porto e depois em Carcavelos e na Madeira, com as quais formam as primeiras Companhias. Estas Companhias estão associadas a colégios ingleses e dependem diretamente da Associação Mundial.</p>',
'section_text_en',
'https://drive.google.com/uc?export=view&id=1xo7pXJ7n_-cacolVYIPp6mMWBTG0AYLR',
1,
TRUE  
),
(
'<p><span style="color: rgb(44,130,201);"><strong>1931</strong></span></p>
<p><strong>Primeira visita de BP e Olave a Portugal </strong></p>
<p>Baden-Powell e Olave, os fundadores do Movimento, visitam a Madeira. Neste ano, começam a ser dinamizadas as primeiras Companhias de Guias portuguesas, no continente e na Madeira.&nbsp;</p>
<p><span style="color: rgb(44,130,201);"><strong>1934</strong></span>&nbsp;</p>
<p><strong>Aprovação dos Estatutos da AGP </strong></p>
<p>Os Estatutos da AGP são aprovados pelo Governo e elege-se a primeira Comissária Nacional, Fernanda D Orey, e a Comissária Internacional, Miss Pope, Guia inglesa que muito ajudou na consolidação da nossa Associação. Este ano foi ainda marcado pela receção do segundo cruzeiro de Guias e Escuteiros Britânicos, cujo último destino era Lisboa.  Nesse dia, cerca de 200 Guias caminharam juntas na cidade, sendo vistas pela primeira vez, pela população. O espírito do Movimento estende-se por Portugal e pelas Províncias Ultramarinas.</p>',
'section_text_en',
'https://drive.google.com/uc?export=view&id=1havBQ01nbuATNmBedC7wz7Tr9PaqzRNi',
2,
TRUE),
(
'<p><span style="color: rgb(44,130,201);"><strong>1936</strong></span></p>
<p><strong>Dia Mundial do Pensamento</strong></p>
<p><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;font-family: Poppins;">Comemora-se pela primeira vez em Portugal, o</span><span style="color: rgb(44,130,201);background-color: rgb(255,255,255);font-size: 16px;font-family: Poppins;"> </span><a href="http://www.guiasdeportugal.org/sobre/associacao-mundial" target="_blank"><span style="color: rgb(44,130,201);background-color: rgb(255,255,255);font-size: 16px;font-family: Poppins;">Dia Mundial do Pensamento</span></a><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;font-family: Poppins;">  (22 de fevereiro). </span></p>
<p><span style="color: rgb(44,130,201);"><strong>1937</strong></span>&nbsp;</p>
<p><strong>Cessação de atividades</strong></p>
<p><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;font-family: Poppins;">A situação da Associação altera-se com o pedido de cessação das atividades feito pelo Governo, motivado pela criação da Mocidade Portuguesa. Agravada com os anos de agitação da Guerra Civil de Espanha e mais tarde com a II Guerra Mundial, o Movimento acaba por ser suspenso no continente e nos Açores. Apenas a Madeira se mantém em plena atividade, dinamizada pela "Chefe Carolina", que desenvolve diversas ações sociais na Ilha, entre elas, a criação da fundação "O Ninho", um lar de apoio a crianças necessitadas, onde as Guias prestavam serviço e para onde eram dirigidos os fundos conseguidos nas atividades por elas planeadas. Esta Fundação ainda se mantém ativa nos dias de hoje.</span></p>',
'section_text_en',
'https://drive.google.com/uc?export=view&id=1SmazUhsNkYIzPRiBK33pOE_Dwr8I0hWg',
3,
TRUE
),
(
'<p><span style="color: rgb(44,130,201);"><strong>1954</strong></span></p>
<p><strong>Reinício das atividades</strong></p>
<p><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;font-family: Poppins;">Por iniciativa de um grupo de antigas Guias que consegue obter o apoio do Patriarcado de</span><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;font-family: Poppins;">Lisboa e do Ministério da Educação, a Associação reinicia as atividades em Lisboa.  O grupo elege como Presidente Maria do Carmo Pombeiro e como Comissária Nacional Isabel de Estarreja, que dão um forte impulso à Associação iniciando um período de grande expansão pelo Continente e Províncias Ultramarinas.</span></p>
<p><span style="color: rgb(44,130,201);"><strong>1960</strong></span></p>
<p><strong>Visita da Chefe Mundial das Guias</strong></p>
<p><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;font-family: Poppins;">A AGP recebe a</span><span style="color: rgb(44,130,201);background-color: rgb(255,255,255);font-size: 16px;font-family: Poppins;"> </span><a href="http://www.guiasdeportugal.org/sobre/historia-guidismo" target="_blank"><span style="color: rgb(44,130,201);background-color: rgb(255,255,255);font-size: 16px;font-family: Poppins;">Chefe Mundial das Guias</span></a><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;font-family: Poppins;"> , que passa por Portugal no âmbito de uma viagem que realizou pelos países onde o Guidismo se encontrava em desenvolvimento.</span></p>',
'section_text_en',
'https://drive.google.com/uc?export=view&id=18o6mOIVQx1GzS35Vm84awmCYlH6NQE80',
4,
TRUE
),
(
'<p><span style="color: rgb(44,130,201);"><strong>1963</strong></span></p>
<p><strong>Membro Aspirante da WAGGGS</strong></p>
<p><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;font-family: Poppins;">A AGP é aceite como Membro Aspirante da </span><a href="http://www.guiasdeportugal.org/http://localhost:3000/sobre/associacao-mundial" target="_blank"><span style="color: rgb(44,130,201);background-color: rgb(255,255,255);font-size: 16px;font-family: Poppins;">WAGGGS</span></a><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;font-family: Poppins;">  - World Association of Girl Guides and Girl Scouts – (Associação Mundial das Guias) na 18ª Conferência Mundial realizada na Dinamarca. Foram, no entanto, necessários 12 anos e uma visita da Associação Mundial a diversas Companhias de Guias do nosso País, para a AGP ser reconhecida como Membro Efetivo da WAGGGS, na 22ª Conferência Mundial, que teve lugar em Brighton, Inglaterra, em 1975.  A nova condição foi motivo de grande alegria para todas, porque se demonstrou que o Guidismo estava, de novo, bem implantado em Portugal.</span></p>
<p><span style="color: rgb(44,130,201);"><strong>Anos 70</strong></span></p>
<p><strong>País de lés a lés</strong></p>
<p><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;font-family: Poppins;">Na década de 70, já existiam Companhias de Guias em Viana do Castelo, Porto, Braga, Guarda, Viseu, Aveiro, Leiria, Lisboa, Almada, Beja, Portalegre, Batalha, Faro, Santarém, Castelo Branco, Açores e Madeira.</span></p>',
'section_text_en',
'https://drive.google.com/uc?export=view&id=1BjNfFTgiqGuNF40P21ZEQ0fWU-TtLQqC',
5,
TRUE
),
(
'<p><span style="color: rgb(44,130,201);"><strong>1973</strong></span></p>
<p><strong>I Acampamento Nacional</strong></p>
<p><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;font-family: Poppins;">Realiza-se o I Acampamento Nacional, na Quinta do Ripilau, em Vila Chã de Ourique, sob o tema "Na Aventura da Descoberta", que contou com a participação de cerca de 1000 Guias portuguesas, incluindo Guias moçambicanas e Guias angolanas, e com a presença de Guias inglesas e polacas.</span></p>
<p><span style="color: rgb(44,130,201);"><strong>1978</strong></span><strong> </strong></p>
<p><strong>II Acampamento Nacional</strong></p>
<p><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;font-family: Poppins;">Foi organizado o II Acampamento Nacional com o tema "Festa no Mundo", em que se celebrou a aceitação da AGP como Membro Efetivo da WAGGGS. No Bombarral, encontravam-se Patrulhas com nomes de cidades de todo o mundo e foram convidadas as Guias do México.</span></p>
<p><span style="color: rgb(44,130,201);"><strong>1985</strong></span></p>
<p><strong>Conselho Nacional de Juventude</strong></p>
<p><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;font-family: Poppins;">A AGP procurou sempre colaborar com outras organizações juvenis, sendo neste ano um dos</span><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;font-family: Poppins;">membros fundadores do Conselho Nacional de Juventude. Também neste ano foi declarada Associação de Utilidade Pública.</span></p>',
'section_text_en',
'https://drive.google.com/uc?export=view&id=1meq_pWcSx2KTtLDPpH-e3wF0a6IwQuKW',
6,
TRUE
),
(
'<p><span style="color: rgb(44,130,201);"><strong>1986</strong></span><strong> </strong></p>
<p><strong>Conferência Europeia</strong></p>
<p><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;font-family: Poppins;">A AGP, em conjunto com as associações de escuteiros portuguesas, teve a honra de organizar a Conferência Europeia das Guias e Escuteiros que decorreu em Ofir, Esposende, e onde estiveram representadas associações de 24 países da Europa.</span></p>
<p><span style="color: rgb(44,130,201);"><strong>1988</strong></span><strong> </strong></p>
<p><strong>III Acampamento Nacional</strong></p>
<p><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;font-family: Poppins;">No ano em que se celebraram os 500 anos dos Descobrimentos Marítimos Portugueses, realizou-se o III Acampamento Nacional, no Vale do Zebro (Barreiro), sob o tema “Vale a pena correr o risco”.</span></p>
<p><span style="color: rgb(44,130,201);"><strong>1990</strong></span></p>
<p><strong>Apadrinhamento do coala</strong></p>
<p><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;font-family: Poppins;">A AGP apadrinha o coala no Jardim Zoológico de Lisboa, participando em iniciativas para a proteção da espécie em vias de extinção.</span></p>',
'section_text_en',
'https://drive.google.com/uc?export=view&id=1-150kdIIpcj72oZ57PEs8NoU8OWwKZ0N',
7,
TRUE
),
(
'<p><span style="color: rgb(44,130,201);"><strong>1992</strong></span>&nbsp;</p>
<p><strong>Prémio Olave</strong>&nbsp;</p>
<p>A Patrulha Poney, do Ramo Moinho, recebe o Prémio Olave, pelo excelente trabalho de serviço comunitário desenvolvido para os refugiados da guerra da Bósnia. Criado para homenagear a memória da Chefe Mundial, este prémio anual procura manter vivo o espírito do “Serviço”.</p>
<p><span style="color: rgb(44,130,201);"><strong>1994</strong></span>&nbsp;</p>
<p><strong>Projeto Pacotes da Paz</strong>&nbsp;</p>
<p>A AGP, em colaboração com o Alto Comissariado das Nações Unidas para os Refugiados, promove o Projeto “Pacotes da Paz”, recolhendo e enviando material de higiene pessoal e material escolar para as crianças vítimas da guerra em Angola e Moçambique.</p>
<p><span style="color: rgb(44,130,201);"><strong>1994</strong></span>&nbsp;</p>
<p><strong>IV Acampamento Nacional </strong></p>
<p>Realiza-se o IV Acampamento nacional, no Cartaxo, com o tema “Junta-te às Estrelas”.</p>',
'section_text_en',
'https://drive.google.com/uc?export=view&id=1mjoCNnCWMpbFDepZ5lN7qOJDY0U1UFRv',
8,
TRUE
),
(
'<p><span style="color: rgb(44,130,201);"><strong>1997</strong></span><strong> </strong></p>
<p><strong>V Acampamento Nacional </strong></p>
<p><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;font-family: Poppins;">Em Sesimbra, com o tema “Os Oceanos”, acontece o V Acampamento Nacional, denominado Nacional e Internacional, contando com a presença de Guias dos EUA, Irlanda, Japão e Hong-Kong.</span></p>
<p><span style="color: rgb(44,130,201);"><strong>1999</strong></span><strong> </strong></p>
<p><strong>Missão SOS Kosovo</strong></p>
<p><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;font-family: Poppins;">As Guias envolvem-se na Missão SOS Kosovo, que consistiu na recolha e organização dos donativos da população - alimentos, roupas e cobertores, para ajudar o tão massacrado e necessitado povo do Kosovo.</span></p>
<p><span style="color: rgb(44,130,201);"><strong>1999</strong></span><strong> </strong></p>
<p><strong>I Acamp. de Chefes e Subchefes de Patrulha</strong></p>
<p><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;font-family: Poppins;">Realiza-se o I Acampamento Nacional de Chefes e Subchefes de Patrulha dos Ramos Aventura e</span><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;font-family: Poppins;">Caravela, em Belmonte. Este acampamento contou também com a presença de Guias de Moçambique e de São Tomé e Príncipe.</span></p>',
'section_text_en',
'https://drive.google.com/uc?export=view&id=14dDwbU3oyr40_FCm-hLK7_vmLoJwKPXW',
9,
TRUE
),
(
'<p><span style="color: rgb(44,130,201);"><strong>1999</strong></span></p>
<p><strong>Conferência Olave Baden-Powel Society</strong></p>
<p><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;font-family: Poppins;">Realiza-se em Óbidos, a Conferência da Olave Baden-Powell Society, organização fundada em1984 com o objetivo de apoiar o desenvolvimento do Guidismo no mundo, lideradapela Princesa Benedikte da Dinamarca.</span></p>
<p><span style="color: rgb(44,130,201);"><strong>2001</strong></span></p>
<p><strong>Condecoração da Presidência da República</strong></p>
<p><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;font-family: Poppins;">Por todo o trabalho desenvolvido pelo Movimento Guidista e no âmbito das comemorações dos 70 anos da AGP, Sua Excelência o Presidente da República</span><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;font-family: Poppins;">Dr. Jorge Sampaio, atribuiu à Associação,</span><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;font-family: Poppins;">a Condecoração de Membro Honorário</span><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;font-family: Poppins;">da Ordem de Mérito.</span></p>
<p><span style="color: rgb(44,130,201);"><strong>2002</strong></span></p>
<p><strong>VI Acampamento Nacional</strong></p>
<p><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;font-family: Poppins;">Realiza-se o VI Acampamento Nacional, em Viana do Castelo, com o tema “Guidismo É... Crescer, Ser Capaz, Arriscar e Aceitar Desafios”.</span></p>',
'section_text_en',
'https://drive.google.com/uc?export=view&id=1hKd8YbElzbGdKo8SFi1P0O9Osh3hEV4m',
10,
TRUE
),
(
'<p><span style="color: rgb(44,130,201);"><strong>2005/2016</strong></span></p>
<p><strong>Ação Saca-Rolhas</strong></p>
<p><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;font-family: Poppins;">A AGP lança um projeto ambiental pioneiro em Portugal, a Ação Saca-Rolhas, que consistia na recolha de rolhas, recuperando-as para uma nova utilização. Este projeto contribuiu para várias instituições de cariz social.</span><span style="color: rgb(44,130,201);"><strong>2006</strong></span></p>
<p><strong>VII Acampamento Nacional</strong></p>
<p><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;font-family: Poppins;">No ano comemorativo dos 75 anos do Guidismo em Portugal, realiza-se o VII Acampamento Nacional, em Alcochete, sob o tema "Cidadãs do Mundo".</span><span style="color: rgb(44,130,201);"><strong>2009/2010</strong></span></p>
<p><strong>Projeto Ter Mãos Grandes  </strong></p>
<p><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;font-family: Poppins;">A AGP associa-se à Fundação Fé e Cooperação, participando numa iniciativa de apoio a Timor-Leste, Moçambique e Angola. A Associação angariou fundos suficientes para concretizar três projetos de desenvolvimento local, através da venda de bolachas feitas pelas Guias, no âmbito do Projeto Ter Mãos Grandes.</span></p>',
'section_text_en',
'https://drive.google.com/uc?export=view&id=1c2L5shYTmCfpxtovxguSQGb3OajQ1Vy2',
11,
TRUE
),

(
'<p><span style="color: rgb(44,130,201);"><strong>2012</strong></span></p>
<p><strong>VIII Acampamento Nacional</strong></p>
<p><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;font-family: Poppins;">Realiza-se o VIII Acampamento Nacional, em Soutelo (Braga), com o tema “100 anos a mudar vidas”, assinalando o final das comemorações do Centenário do Guidismo no Mundo. Participaram Guias de Hong-Kong e da Nova Zelândia.</span><span style="color: rgb(44,130,201);"><strong>2015</strong></span><strong> </strong></p>
<p><strong>II Acamp. de Chefes e Subchefes de Patrulha</strong></p>
<p><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;font-family: Poppins;">Realiza-se o II Acampamento de Chefes e Subchefes de Patrulha dos Ramos Aventura e Caravela, em Santa Margarida (Santarém).</span></p>',
'section_text_en',
'https://drive.google.com/uc?export=view&id=1ZJhWMN9P0YceTYyal9AkTI10x0OG9dVx', 
12,
TRUE
),
(
'<p><span style="color: rgb(44,130,201);"><strong>2015/2017</strong></span>&nbsp;</p>
<p><strong>Projeto Vozes Contra a Violência</strong></p>
<p><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;font-family: Poppins;">A AGP implementou o projeto Vozes Contra a Violência, lançado pela WAGGGS, capacitando as Guias como vozes ativas contra a violência, que realizaram mais de 200 ações em cerca de 80 escolas, sensibilizando mais de 5000 crianças e jovens, com idades entre os 6 e os 25 anos, em todo o País.</span><span style="color: rgb(44,130,201);"><strong>2017</strong></span>&nbsp;</p>
<p><strong>Missão Esperança</strong></p>
<p><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;font-family: Poppins;">A AGP apoiou as vítimas do incêndio de Pedrógão Grande, numa pimeira fase com recolha de bens necessários e numa segunda com a mobilização nacional de Guias para os dois municípios mais afetados, Castanheira de Pera e Figueiró do Vinhos.</span></p>',
'section_text_en',
'https://drive.google.com/uc?export=view&id=1pVmebOz8XC9OgisAGVSuOEaKql60eAjF',
13,
TRUE
);



-- DROP TABLE IF EXISTS `Association_Header`;

CREATE TABLE `Association_Header` (
  `banner` TEXT NOT NULL,
  `title_pt` VARCHAR(100) NOT NULL,
  `title_en` VARCHAR(100),
  `text1_pt` MEDIUMTEXT NOT NULL,
  `text1_en` MEDIUMTEXT,
  `text2_pt` MEDIUMTEXT NOT NULL,
  `text2_en` MEDIUMTEXT,
  `title_sections_pt` VARCHAR(100) NOT NULL,
  `title_sections_en` VARCHAR(100)
);

INSERT INTO `Association_Header` ( banner, title_pt, title_en, text1_pt, text1_en, text2_pt, text2_en,title_sections_pt, title_sections_en ) VALUES
(
  'https://drive.google.com/uc?export=view&id=1FSI241W2jjJmY_SSLrVfhXVhsir4FbVs',
  'A ASSOCIAÇÃO',
  'THE ASSOCIATION',
  '<p>A Associação Guias de Portugal (AGP) é uma associação de utilidade pública,  assente no voluntariado e que promove o Guidismo – movimento de educação não formal, baseado no método criado por Robert Baden-Powell.</p><p>Tem como missão proporcionar às raparigas e jovens mulheres a oportunidade de desenvolverem plenamente o seu potencial como cidadãs universais responsáveis,  através de um método próprio: atribuição gradual de responsabilidade, fomentando o trabalho de grupo e a sua autonomia, comprometendo-se com a comunidade onde estão inseridas, tendo como espaço privilegiado de formação o ar livre.</p><p>A AGP é membro da Associação Mundial das Guias - WAGGGS (World Association of Girl Guides and Girl Scouts), a que pertencem 10 milhões de Guias espalhadas por 150 países.</p>',
  'text1_en',
  'O Guidismo procura contribuir para a formação de carácter, através de uma pedagogia ativa,  baseada no jogo, desenvolvendo capacidades e atitudes e promovendo a vivência de valores fundamentais.',
  'Girl Guiding aims at developing character, through an active approach based on playing and the development of skills, attitudes and experiencing fundamental values.',
  'História do Guidismo em Portugal',
  'History of Guiding in Portugal'
);


-- DROP TABLE IF EXISTS `ramos`;

CREATE TABLE `ramos` (
  `type`	VARCHAR(15) NOT NULL,
  `image_1` TEXT NOT NULL,
  `image_2` TEXT NOT NULL,
  `image_3` TEXT NOT NULL,
  `pt_banner` TEXT NOT NULL,
  `en_banner` TEXT NOT NULL,
  `pt_content` LONGTEXT NOT NULL,
  `en_content` LONGTEXT NOT NULL,
  PRIMARY KEY (`type`)
);

INSERT INTO `ramos` (type, image_1, image_2, image_3, pt_banner, en_banner, pt_content, en_content) VALUES
('Ramo Avezinha', 'https://drive.google.com/uc?export=view&id=1eT0o6-ckGUiGw7KEogEo_gpW-Tt45Qnv', 'https://drive.google.com/uc?export=view&id=1CMsea5N7JxKBqPBklp_GdHECyC19kajb','https://drive.google.com/uc?export=view&id=1wOev8F-gK7jVP6hpZPLZm80ulm4hjSAg','https://drive.google.com/uc?export=view&id=18Yp-_ytM5hegN7ufWA86wIJAKZol-Bhs', 'https://drive.google.com/uc?export=view&id=18Yp-_ytM5hegN7ufWA86wIJAKZol-Bhs', '<p><span style="background-color: white;font-size: 14px;font-family: Poppins;"><strong>Cor:</strong></span> <span style="background-color: white;font-size: 14px;font-family: Poppins;"><strong>AMARELO</strong>, cor do sol.</span></p><p><span style="background-color: white;font-size: 14px;font-family: Poppins;"><strong>Simbologia</strong>: </span> <span style="background-color: white;font-size: 14px;font-family: Poppins;"><strong>AVEZINHA</strong>, pequeno pássaro</span> <span style="background-color: white;font-size: 14px;font-family: Poppins;">que comandado pelo <strong>SONHO</strong> ganha asas e aprende a voar.</span>&nbsp;</p><p style="text-align:justify;"><span style="background-color: white;font-size: 14px;font-family: Poppins;"><strong>Estrutura: </strong>4 a 6 Avezinhas formam um <strong>NINHO</strong></span> <span style="background-color: white;font-size: 14px;font-family: Poppins;">que reunidas com os restantes Ninhos constituem o <strong>BANDO</strong>.</span>&nbsp;</p><p style="text-align:left;"><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 14px;font-family: Poppins;">É num mundo de sonho que cada criança será convidada a <strong>TORNAR-SE AVEZINHA</strong>, ganhar asas e aprender a voar. Considerando o imaginário deste Ramo, as Dirigentes são designadas por Águias e Corujas.</span></p><p style="text-align:left;"><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 14px;font-family: Poppins;">Sair do ovo e aprender a relacionar-se com o seu Ninho, sempre com o apoio da Águia e das Corujas, permitirá que cada Avezinha ganhe as competências e a autonomia necessárias ao seu Primeiro Voo, fazer a sua PROMESSA DE AVEZINHA. Alegre e curiosa, com vontade de crescer forte e saudável, com gosto pela natureza e sempre disposta a ajudar.</span></p><p style="text-align:left;"><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 14px;font-family: Poppins;">Capaz de pequenos voos a Avezinha ganha <strong>ASAS</strong> e explora os <strong>VERDES</strong> do bosque, conhece vários animais e é com eles que aprende novos saberes, que aprende a conhecer as árvores e as plantas, as praias e os rios… Descobre os seus gostos, supera alguns receios e desenvolve os seus dons através da realização de <strong>ESPECIALIDADES</strong>, até estar pronta para voar mais alto.</span></p><p style="text-align:left;"><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 14px;font-family: Poppins;">Já mais autónoma, mais capaz de tomar conta de si própria e de trabalhar com os outros, está na altura da Avezinha deixar as suas <strong>ASAS</strong> cruzarem os <strong>AZUIS</strong> do céu. Para tal terá de olhar em redor de forma atenta (no Ninho, no Bando, na Companhia, em casa, na turma, na escola, na comunidade), definir um destino (escolher onde pode proporcionar uma mudança positiva) e aperfeiçoar as técnicas de voo para sincronizar o bater das asas com o bater do coração, chegada a hora de partilhar, agir, por um mundo melhor.</span></p><p><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 14px;font-family: Poppins;">Até ao Grande Voo que a conduzirá à sua Primeira Aventura.</span></a>&nbsp;</p>', '<p>TEXT</p><p>Hello</p>'),
('Ramo Aventura', 'https://drive.google.com/uc?export=view&id=1SM6OVLeOQ5poDfrGo5ducZi2rh8jpDZt', 'https://drive.google.com/uc?export=view&id=1QYmv1So4vtIkA2sjOijTBH0ITsv4EHMM', 'https://drive.google.com/uc?export=view&id=11aiNASI4Cs-J3ADRT-eiVk2GdQV14-kp', 'https://drive.google.com/uc?export=view&id=1xxThKoJB7UpQycxAxwZXVwaL101jYin3', 'https://drive.google.com/uc?export=view&id=1xxThKoJB7UpQycxAxwZXVwaL101jYin3', '<p><span style="font-size: 14px;font-family: Poppins;"><strong>Cor: VERDE, </strong>cor da natureza.</span></p><p><span style="font-size: 14px;font-family: Poppins;"><strong>Simbologia: BÚSSOLA</strong>, que ajuda a encontrar o melhor <strong>TRILHO</strong>.</span></p><p><span style="font-size: 14px;font-family: Poppins;"><strong>Estrutura</strong>: 6 a 8 Guias formam uma <strong>PATRULHA</strong> que reunidas com as restantes Patrulhas constituem a <strong>ODISSEIA</strong>.</span></p><p><span style="font-size: 14px;font-family: Poppins;">Na construção do seu trilho, a Guia Aventura é desafiada a descobrir novas capacidades e a aprender a trabalhar em Patrulha, o grupo que a acompanhará ao longo do caminho, partilhando dificuldades e conquistas. Esse trilho a percorrer é dividido em três etapas: PRIMEIRA AVENTURA, ESCALADA E HORIZONTE.</span></p><p><span style="font-size: 14px;font-family: Poppins;">Na <strong>PRIMEIRA AVENTURA</strong>, a Guia Aventura atravessa pontes, visita feiras e conquista castelos, desenvolvendo gradualmente a autonomia e a organização necessárias a esta viagem de descoberta de novas técnicas e aprendizagens.</span></p><p><span style="font-size: 14px;font-family: Poppins;">Durante os acampamentos, cada Patrulha é responsável pela construção e manutenção da sua “casa” (o seu campo), partilhando as tarefas e as responsabilidades com as restantes raparigas da sua idade, oferecendo-lhes a alegria da concretização de pequenos desafios quotidianos.</span></p><p><span style="font-size: 14px;font-family: Poppins;">A viagem da Primeira Aventura culmina na realização Promessa de Guia, em que cada rapariga afirma o seu compromisso para com a Associação e para com a Lei da Guia, passando a assumir os seus valores e princípios como orientadores da sua vida, e afirmando a sua disponibilidade para ajudar o Outro. </span></p><p><span style="font-size: 14px;font-family: Poppins;">Retemperada das emoções desta viagem, a Guia Aventura parte para a <strong>ESCALADA</strong>, aonde a subida apresenta novas oportunidades de aprendizagens e vivência em grupo, aprofundando os temas da Progressão.</span></p><p><span style="font-size: 14px;font-family: Poppins;">Nesta fase, por volta dos 11/12 anos, a Guia Aventura já começa a ganhar apetência por alguns temas, e é nesta altura que é convidada a explorar as suas áreas de interesse através da realização de <strong>ESPECIALIDADES</strong> que incentivam a sua criatividade e iniciativa.</span></p><p><span style="font-size: 14px;font-family: Poppins;">Chegada ao cume da montanha, a Guia Aventura avista um novo <strong>HORIZONTE</strong> de oportunidades. Num trilho já longo, de muito crescimento e descoberta, a Guia Aventura é agora uma rapariga mais autónoma e desperta para o mundo que a rodeia, mais segura dos conhecimentos e técnicas que aprendeu e preparada para realizar tarefas mais complexas.</span></p><p><span style="font-size: 14px;font-family: Poppins;">Chegada ao final do trilho, a Guia Aventura está pronta para, com a sua Patrulha, embarcar numa nova viagem a bordo de uma Caravela</span><span style="font-size: 14px;font-family: Poppins;"> .</span></p>', '<p>TEXT</p><p>Hello</p>'),
('Ramo Caravela', 'https://drive.google.com/uc?export=view&id=1pAA3WeLCUfCPDoZWqkiloklWS2d7Um_Q', 'https://drive.google.com/uc?export=view&id=1z2LzZofqNRCU4F93BG9jb1OM-YiPgFBY', 'https://drive.google.com/uc?export=view&id=1rARgxdHyVj8ic05AQsso9PeCz2fCjy8J', 'https://drive.google.com/uc?export=view&id=1qBWEbVWtG_CzZ2nNe8aMGj8CtG_5EGux', 'https://drive.google.com/uc?export=view&id=1qBWEbVWtG_CzZ2nNe8aMGj8CtG_5EGux', '<p><strong>Cor: LARANJA</strong>, cor do sol poente.</p><p><strong>Simbologia</strong>: <strong>CARAVELA</strong>, para uma importante <strong>EXPEDIÇÃO</strong> que levará a lugares longínquos e misteriosos.</p><p><strong>Estrutura</strong>: 4 a 6 Avezinhas formam uma <strong>PATRULHA</strong> que reunidas com os restantes Patrulhas constituem a <strong>FROTA</strong>.</p><p>Nesta <strong>EXPEDIÇÃO</strong>, a Guia Caravela irá partir à descoberta de novos mundos. Ao longo das três etapas: APARELHAGEM, NAVEGAÇÃO E EXPLORAÇÃO e com o auxílio de diferentes instrumentos náuticos – ROL, CARTA DE MAREAR E ÂNCORA, a Guia Caravela irá embarcar numa nova aventura, desenvolver novas capacidades e adquirir novos conhecimentos, contribuindo para o seu crescimento e formação.</p><p>A <strong>APARELHAGEM</strong> é a primeira etapa da Progressão do Ramo e é dedicada à preparação da caravela. Consiste na reciclagem e na confirmação da técnica Guidista e dos conhecimentos adquiridos no Ramo Aventura.Contempla três fases relacionadas com o aprovisionamento da Caravela: reciclagem de conhecimentos; construção da caravela: Casco, Mastro e Leme; e preparação para o Compromisso e renovação da Promessa de Guia.</p><p>A <strong>NAVEGAÇÃO</strong> é a segunda etapa da Progressão do Ramo e é dedicada à aprendizagem de novas áreas do conhecimento. Os temas estão divididos por oito Ondas: técnica guidista, desporto e saúde, arte, vida ao ar livre, casa, país e civismo, cultura geral e cultura religiosa. Nesta etapa, a Guia Caravela irá testar a sua capacidade de planeamento e execução.</p><p>A <strong>EXPLORAÇÃO</strong> é a última etapa da Progressão do Ramo. Aqui, a Guia Caravela irá especializar-se numa área específica de cada tema (Onda). Conhecendo o Mundo que a rodeia e vivendo com os outros, conhecendo-se a si própria e aperfeiçoando-se no que pensa ser o que mais a completa, ela realizará as <strong>ESPECIALIDADES</strong>.</p><p>A Guia Caravela prepara-se para a viagem que a levará à descoberta do Serviço, no Ramo Moinho .</p>', '<p>TEXT</p><p>Hello</p>'),
('Ramo Moinho', 'https://drive.google.com/uc?export=view&id=1DsxEeALN1UvgopjrfP9KhmMzqWHWnral', 'https://drive.google.com/uc?export=view&id=1bpWoJojhC__IqYY0VAPiago97Bj2Y2zt','https://drive.google.com/uc?export=view&id=11h8ifSZ6LIiE_bBzlxrPADlauE8MP9fT', 'https://drive.google.com/uc?export=view&id=1HmmmkIOGlIaOxjrXZYFx7wGe-NIiQarb', 'https://drive.google.com/uc?export=view&id=1HmmmkIOGlIaOxjrXZYFx7wGe-NIiQarb', '<p><strong>Cor: AZUL</strong>, cor do céu.</p><p><strong>Simbologia</strong>: <strong>MOINHO</strong>, construção de base sólida na terra que simboliza a maturidade atingida e o vento que empurra as velas, a força das escolhas que se fazem, tentando construir um amanhã diferente de hoje.</p><p><strong>Estrutura</strong>: 5 a 8 Guias formam uma <strong>PATRULHA</strong>.</p><p>A base de formação do Ramo Moinho é o <strong>SERVIÇO</strong>, em que a Guia vai partir da descoberta do seu Eu e do Outro para ser <strong>Missão</strong> na sua Comunidade e no Mundo. Ao longo das três etapas: MOINHO EM CONSTRUÇÃO, MOINHO BRANCO E MOINHO AZUL as Guias Moinho, jovens adultas, com a sua personalidade construída, capazes de tomar decisões e assumir responsabilidades segundo os seus valores e ideais irão explorar o seu Moinho de Vento que realça os seguintes aspetos:</p><p>A CASA – conhecimentos e capacidades;</p><p>AS VELAS – atitudes e valores;</p><p>O VEIO – as atividades;</p><p>A MÓ – a meta;</p><p>O VENTO – o lemaaa.</p><p>O <strong>MOINHO EM CONSTRUÇÃO</strong> é a primeira etapa em que a vivência de Patrulha é o principal objetivo, mas também a valorização do Guidismo como experiência pedagógica. Consiste num consolidar de conhecimentos e projeção de um plano de crescimento e aprendizagem, tendo em conta os seus interesses, desenvolvendo a sua autonomia, iniciativa e responsabilidade. Realizam as suas atividades, aceitam desafios, partem à descoberta. No final desta etapa, a Guia Moinho faz o seu Compromisso reforçando a Promessa e a vontade de se empenhar no serviço à comunidade.</p><p>O <strong>MOINHO BRANCO</strong> é a segunda etapa. Agora, a Guia Moinho prepara-se técnica e pessoalmente para esta experiência, adquire conhecimentos numa área específica à sua escolha – nutrição, património, educação, saúde, paz ou ambiente – e lança-se num trabalho de projeto, procurando ir ao encontro das necessidades da comunidade em que está inserida. Ao longo desta segunda etapa de Progressão, a Guia Moinho é desafiada a encontrar áreas de interesse e a delinear as suas próprias <strong>ESPECIALIDADES</strong>.</p><p>O <strong>MOINHO AZUL</strong> é a última etapa do Ramo. A Guia Moinho é desafiada a ter uma visão mais global e o contacto com as iniciativas promovidas pela Associação Mundial das Guias (WAGGGS) será um incentivo e uma motivação ainda maior para promover o crescimento pessoal, contribuindo para o desenvolvimento da sociedade e permitindo a tomada de consciência do papel que as Guias têm no mundo.</p><p>No final desta caminhada, a Guia Moinho estará preparada para aceitar mais um desafio – ser Dirigente , continuando a sua formação pessoal e proporcionando a outras raparigas a vivência do Guidismo, mantendo viva a Missão da Associação.</p>', '<p>TEXT</p><p>Hello</p>'),
('Dirigente', 'https://drive.google.com/uc?export=view&id=1L6ZDEPDRd5v3yScy4XS1NBYmxuqmUZl4', 'https://drive.google.com/uc?export=view&id=1btAwfN9kVlp1Bm41X-5ir1pFbSe5VTTe','https://drive.google.com/uc?export=view&id=1YDcitPyYYE3JV_6fcIZtyTT7jWufsiQr', 'https://drive.google.com/uc?export=view&id=1ONFvVPu3HBkEdS6YjuiWgWuFr2jSDUMm', 'https://drive.google.com/uc?export=view&id=1ONFvVPu3HBkEdS6YjuiWgWuFr2jSDUMm', '<p>Ser Dirigente é um desafio, uma missão e uma descoberta, que se traduz em infindáveis acontecimentos permanentes na memória como alegrias, conquistas e aprendizagens. A Progressão da Dirigente sugerida pela Associação compreende três etapas: NÍVEL 3, NÍVEL 2 e NÍVEL 1. Para cada um destes níveis há um conjunto de conhecimentos a adquirir, atividades a realizar/participar, bem como valores, atitudes e capacidades a desenvolver.</p><p>Iniciando o <strong>NÍVEL 3</strong>, a Dirigente Estagiária inicia um período de estágio numa Companhia, em que terá um espaço privilegiado para aprender, com o acompanhamento e o apoio de uma Dirigente mais experiente que será a sua orientadora de estágio. Irá desenvolver a dimensão local, regional e nacional, com uma intervenção faseada. A participação no TAG 3 (formação em Técnicas de Animação Guidista – Nível 3), a frequência de um curso de Primeiros Socorros ou a realização do Atestado de Campo (primeiro acampamento organizado pela Dirigente Estagiária) são momentos imprescindíveis à realização de um bom trabalho com as Guias, adquirindo-se as ferramentas base desta caminhada. No fim desta etapa, é realizado o Compromisso, confirmação da dedicação e envolvimento com a educação das Guias e, por conseguinte, com a sociedade, com o País e com o Guidismo. O amadurecimento da atuação de cada Dirigente, enriquecido pela crescente experiência no trabalho direto com as Guias, permite aprofundar o porquê daquilo que faz e a forma como faz, compreendendo o Método Guidista numa nova dimensão, mais ampla. Nesta responsabilidade crescente, não somente com as Guias, mas também com as Dirigentes Estagiárias que iniciaram a sua caminhada, a Dirigente em <strong>NÍVEL 2</strong> é vista como um exemplo. A orientação de estágio, a execução de Especialidades e a participação no TAG 2 (formação em Técnicas de Animação Guidista – Nível 2) são os momentos primordiais de formação desta etapa.</p><p></p><p>No último nível da Progressão da Dirigente, o <strong>NÍVEL 1</strong>, espera-se da Dirigente um olhar e pensamento estratégicos sobre a Região e a Associação, demonstrando uma excelente capacidade de análise e de tomada de decisão, tendo em conta os desígnios de ambas. Neste contexto, surge um espaço de consciencialização desta grandeza de pensamento, a formação em TAG 1 (formação em Técnicas de Animação Guidista – Nível 1) e a oportunidade de a Dirigente integrar ou propor projetos regionais e nacionais. Todos estes momentos fazem parte da Progressão da Dirigente e ilustram as estratégias de capacitação das Dirigentes no seu papel educativo, criando um inestimável capital de jovens voluntárias, essenciais à prossecução da missão da Associação. Este percurso capacita cada uma e nesse conjunto é potenciada uma mudança positiva: em cada uma, nos outros e no Mundo.&nbsp;</p>', '<p>TEXT</p><p>Hello</p>');



-- DROP TABLE IF EXISTS `metodo_guidista`;

CREATE TABLE `metodo_guidista` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `banner` TEXT NOT NULL,
  `pt_main_title` VARCHAR(40) NOT NULL,
  `en_main_title` VARCHAR(40) NOT NULL,
  `pt_main_intro` VARCHAR(300) NOT NULL,
  `en_main_intro` VARCHAR(300) NOT NULL,
  `pt_ferramentas_title` VARCHAR(40) NOT NULL,
  `en_ferramentas_title` VARCHAR(40) NOT NULL,
  `pt_constantes_title` VARCHAR(40) NOT NULL,
  `en_constantes_title` VARCHAR(40) NOT NULL,
  `pt_constantes_intro` VARCHAR(300) NOT NULL,
  `en_constantes_intro` VARCHAR(300) NOT NULL,
  `pt_atividades_title` VARCHAR(40) NOT NULL,
  `en_atividades_title` VARCHAR(40) NOT NULL,
  `pt_atividades_intro` VARCHAR(300) NOT NULL,
  `en_atividades_intro` VARCHAR(300) NOT NULL,
  `pt_projetos_title` VARCHAR(40) NOT NULL,
  `en_projetos_title` VARCHAR(40) NOT NULL,
  `pt_projetos_intro` VARCHAR(500) NOT NULL,
  `en_projetos_intro` VARCHAR(500) NOT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO `metodo_guidista` (banner, pt_main_title, en_main_title, pt_main_intro, en_main_intro, pt_ferramentas_title, en_ferramentas_title, pt_constantes_title, en_constantes_title, pt_constantes_intro, en_constantes_intro, pt_atividades_title, en_atividades_title, pt_atividades_intro, en_atividades_intro, pt_projetos_title, en_projetos_title, pt_projetos_intro, en_projetos_intro ) VALUES
(
  'https://drive.google.com/uc?export=view&id=1WmODkBh5B8d8avFj9Nlahsr9qS-ZStsX',
  'Método Guidista',
  'Guiding Method',
  'A abordagem pedagógica do Guidismo combina a utilização de diversas ferramentas educativas, no sentido de alcançar o seu grande objetivo formativo: contribuir para o desenvolvimento do pleno potencial e harmoniosa identidade pessoal de cada rapariga.',
  'Guiding pedagogical approach combines the use of several educational tools, in order to achieve its great training objective: to contribute to the development of the full potential and harmonious personal identity of each girl.',
  'As Oito Ferramentas do Método Guidista',
  'The Eight Tools of the Guiding Method',
  'As quatro constantes',
  'The four constants',
  'O Guidismo tem por base a vivência de Quatro Constantes que potenciam o seu desenvolvimento e motivam as jovens a progredir nas suas capacidades pessoais.',
  'Guiding is based on the experience of Four Constants that enhance their development and motivate young women to progress in their personal abilities.',
  'Atividades',
  'Ativities',
  'As Ferramentas do Método Guidista e as Quatro Constantes são vividas através das várias atividades proporcionadas pela Associação.',
  'The Tools of the Guidist Method and the Four Constants are lived through the various activities provided by the Association.',
  'Projetos realizados a nível nacional',
  'Projects carried out at national levels',
  'Paralelamente aos programas pedagógicos que a Associação propõe às Guias e às iniciativas de cada Companhia a nível local, no âmbito do seu Plano Anual de Atividades, a AGP lança com regularidade projetos de implementação nacional, cumprindo o lema SEMPRE ALERTA. Alguns dos projetos são propostos pela Associação Mundial das Guias (WAGGGS), enquanto membro efetivo de vários Comités das Nações Unidas.',
  'In addition to the pedagogical programs that the Association proposes to the Guides and the initiatives of each Company at the local level, within the scope of its Annual Activity Plan, AGP regularly launches projects of national implementation, complying with the motto ALWAYS ALERT. Some of the projects are proposed by the World Association of Guides (WAGGGS), as an effective member of several United Nations Committees.'
);



-- DROP TABLE IF EXISTS `metodo_constantes`;

CREATE TABLE `metodo_constantes` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `image` TEXT NOT NULL,
  `pt_title` VARCHAR(20) NOT NULL,
  `en_title` VARCHAR(20) NOT NULL,
  `pt_legenda1` VARCHAR(100) NOT NULL,
  `en_legenda1` VARCHAR(100) NOT NULL,
  `pt_legenda2` VARCHAR(100) NOT NULL,
  `en_legenda2` VARCHAR(100) NOT NULL,
  `pt_legenda3` VARCHAR(100) NOT NULL,
  `en_legenda3` VARCHAR(100) NOT NULL,
  PRIMARY KEY(`id`)
);

INSERT INTO `metodo_constantes` (image, pt_title, en_title, pt_legenda1, en_legenda1, pt_legenda2, en_legenda2, pt_legenda3, en_legenda3) VALUES
('https://drive.google.com/uc?export=view&id=1RYmZ0MPvYzbZyTgrV4nk3EZQLV9-nLbH', 'Vida em Grupo', 'Group Life', 'Amizade', 'Friendship', 'Uma amizade para cada uma', 'A friendship for each one', 'Objectivo Comum', 'Common objective'),
('https://drive.google.com/uc?export=view&id=1OxInKzToydXI_FY0iZnH8N17rUjgwkiH', 'Vida ao Ar Livre', 'Outdoor Living', 'Compreensão','Understanding', 'Integração', 'Integration', 'Felicidade','Happiness'),
('https://drive.google.com/uc?export=view&id=1RpZ4bDu3GbDE2Cr4Wl7yTDFo7zWIEFKz', 'Compromisso', 'Commitment', 'Disponibilidade','Availability', 'Responsabilidade', 'Responsibility', 'Empenhamento', 'Commitment'),
('https://drive.google.com/uc?export=view&id=1W_pUPYkrm3B89p8fBtHBTFfI-rvFIKeo', 'Progressão', 'Progression', 'Desafio', 'Challenge', 'Superar', 'Overcome', 'Mais além', 'Go Further');



-- DROP TABLE IF EXISTS `metodo_ferramentas`;

CREATE TABLE `metodo_ferramentas` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `pt_title` VARCHAR(50) NOT NULL,
  `en_title` VARCHAR(50) NOT NULL,
  `icon` VARCHAR(500) NOT NULL,
  `image` TEXT NOT NULL,
  `pt_content` LONGTEXT NOT NULL,
  `en_content` LONGTEXT NOT NULL,
  `link` TEXT NOT NULL,
  PRIMARY KEY(`id`)
);

INSERT INTO `metodo_ferramentas` (pt_title, en_title, icon, image, pt_content, en_content, link ) VALUES
('Compromisso', 'Commitment', 'https://drive.google.com/uc?export=view&id=1lPZFWNXHPChlP8ErlrQDDvfsLzhXp8Xo', 'https://drive.google.com/uc?export=view&id=1GDGUS441lPkvdkv7PPU92oVHIUZiyWQ2', '<p>Cada Guia é convidada a afirmar o seu compromisso com o Guidismo, declarando voluntariamente aceitar e viver segundo os seus Princípios e fazer da Lei a sua orientação de vida. É assim que, conscientemente, no momento da Promessa/Compromisso, a Guia diz a todos que é de sua livre vontade que o faz.</p><p>Os Princípios, a Lei e a Promessa são valores transversais à vida de cada Guia, e reiteram o voluntarismo, o altruísmo, a dedicação e a integridade.</p><p>O Compromisso no Guidismo implica também a garantia de uma dedicação ao Movimento e à sua missão. Cada Guia parte da Associação Guias de Portugal (AGP) de forma voluntária e “fazer parte” significa estar presente nas atividades, cumprir as responsabilidades com brio, ter orgulho no trabalho desenvolvido e estar consciente do seu valor.</p><div style="text-transform: uppercase; text-decoration: underline">Divisa</div><p>Sempre Alerta.</p><div style="text-transform: uppercase; text-decoration: underline">Princípios</div><div>A Guia vive a sua fé.</div><div>A Guia ama a sua pátria.</div><div>O dever da Guia começa em casa.</div><p>A Guia vive a sua fé.</p><div style="text-transform: uppercase; text-decoration: underline">Lei da Guia</div><ol><li>O sentimento de honra da Guia é sagrado, a sua palavra merece toda a confiança.</li><li>A Guia é leal.</li><li>A Guia é útil e pratica diariamente uma boa ação.</li><li>A Guia é amiga de todos e irmã de todas as Guias.</li><li>A Guia é atenciosa e delicada.</li><li>A Guia vê a obra de Deus na natureza e protege as plantas e os animais.</li><li>A Guia é obediente.</li><li>A Guia tem sempre boa disposição de espírito.</li><li>A Guia é económica, amiga do arranjo e da ordem e respeitadora do bem alheio.</li><li>A Guia é pura em pensamentos, palavras e ações.</li></ol>', '<p>Cada Guia é convidada a afirmar o seu compromisso com o Guidismo, declarando voluntariamente aceitar e viver segundo os seus Princípios e fazer da Lei a sua orientação de vida. É assim que, conscientemente, no momento da Promessa/Compromisso, a Guia diz a todos que é de sua livre vontade que o faz.</p><p>Os Princípios, a Lei e a Promessa são valores transversais à vida de cada Guia, e reiteram o voluntarismo, o altruísmo, a dedicação e a integridade.</p><p>O Compromisso no Guidismo implica também a garantia de uma dedicação ao Movimento e à sua missão. Cada Guia parte da Associação Guias de Portugal (AGP) de forma voluntária e “fazer parte” significa estar presente nas atividades, cumprir as responsabilidades com brio, ter orgulho no trabalho desenvolvido e estar consciente do seu valor.</p><div style="text-transform: uppercase; text-decoration: underline">Divisa</div><p>Sempre Alerta.</p><div style="text-transform: uppercase; text-decoration: underline">Princípios</div><div>A Guia vive a sua fé.</div><div>A Guia ama a sua pátria.</div><div>O dever da Guia começa em casa.</div><p>A Guia vive a sua fé.</p><div style="text-transform: uppercase; text-decoration: underline">Lei da Guia</div><ol><li>O sentimento de honra da Guia é sagrado, a sua palavra merece toda a confiança.</li><li>A Guia é leal.</li><li>A Guia é útil e pratica diariamente uma boa ação.</li><li>A Guia é amiga de todos e irmã de todas as Guias.</li><li>A Guia é atenciosa e delicada.</li><li>A Guia vê a obra de Deus na natureza e protege as plantas e os animais.</li><li>A Guia é obediente.</li><li>A Guia tem sempre boa disposição de espírito.</li><li>A Guia é económica, amiga do arranjo e da ordem e respeitadora do bem alheio.</li><li>A Guia é pura em pensamentos, palavras e ações.</li></ol>', '/pedagogia/metodo-guidista/ferramentas/compromisso'),
('Sistema de Patrulhas', 'Patrol System', 'https://drive.google.com/uc?export=view&id=1c9-2qGXaFtyC8BYnHAqTeQzlKxeWqOCr', 'https://drive.google.com/uc?export=view&id=1u15TfaS8M3qP7CCkR37FUM_BvmmGhZ6d', '<p>Desde o primeiro dia, que cada Guia é acompanhada pela Patrulha, pequeno grupo de 6 a 8 elementos, com os quais cumpre tarefas, debate temas, partilha ideias, vive experiências muito diversas e, por isso, com quem cresce.</p><p>A Patrulha encoraja as Guias a aprenderem umas com as outras e proporciona um ambiente em que todas desempenham um papel e têm responsabilidades dentro do grupo.</p><p>Trabalhar com este núcleo cria um forte sentido de pertença e aceitação. Aprende‑se a encorajar o outro, a tomar decisões de forma democrática, a saber transmitir opiniões e necessidades e a resolver problemas, por outras palavras, trabalham‑se capacidades fundamentais de liderança. O trabalho em grupo é assim mais eficaz e é nas responsabilidades atribuídas que se torna mais fácil conseguir reconhecer e melhor atingir o potencial individual de cada Guia.</p><p>Os proveitos educativos que se retiram deste sistema são vários: envolvimento de uma forma ativa; aprender com outras raparigas da mesma idade, num ambiente familiar e favorável, promovendo o espírito de grupo e a cooperação; desenvolvimento da atribuição, aceitação e partilha de responsabilidades; aquisição de capacidades de liderança; prática de competências democráticas, incluindo formas de tomada de decisão e sua implementação.</p><p>As Guias da Patrulha acompanham‑se, por vezes, durante um longo período de tempo, tendo um forte impacto nos seus valores e no percurso que escolhem para a sua própria vida.</p>', '<p>Desde o primeiro dia, que cada Guia é acompanhada pela Patrulha, pequeno grupo de 6 a 8 elementos, com os quais cumpre tarefas, debate temas, partilha ideias, vive experiências muito diversas e, por isso, com quem cresce.</p><p>A Patrulha encoraja as Guias a aprenderem umas com as outras e proporciona um ambiente em que todas desempenham um papel e têm responsabilidades dentro do grupo.</p><p>Trabalhar com este núcleo cria um forte sentido de pertença e aceitação. Aprende‑se a encorajar o outro, a tomar decisões de forma democrática, a saber transmitir opiniões e necessidades e a resolver problemas, por outras palavras, trabalham‑se capacidades fundamentais de liderança. O trabalho em grupo é assim mais eficaz e é nas responsabilidades atribuídas que se torna mais fácil conseguir reconhecer e melhor atingir o potencial individual de cada Guia.</p><p>Os proveitos educativos que se retiram deste sistema são vários: envolvimento de uma forma ativa; aprender com outras raparigas da mesma idade, num ambiente familiar e favorável, promovendo o espírito de grupo e a cooperação; desenvolvimento da atribuição, aceitação e partilha de responsabilidades; aquisição de capacidades de liderança; prática de competências democráticas, incluindo formas de tomada de decisão e sua implementação.</p><p>As Guias da Patrulha acompanham‑se, por vezes, durante um longo período de tempo, tendo um forte impacto nos seus valores e no percurso que escolhem para a sua própria vida.</p>', '/pedagogia/metodo-guidista/ferramentas/sistema-de-patrulhas'),
('Aprender Fazendo', 'Learn by doing', 'https://drive.google.com/uc?export=view&id=1BPhv1RjHgdMhuVEDz-vLAOHDJvdtnUc0', 'https://drive.google.com/uc?export=view&id=18Idu_Xyc_FQAGiv0Qd8ywJxIaFIAEZkU', '<p>A metodologia de aprender através da experimentação está no centro da essência dos movimentos de educação não formal. Aprender fazendo no Guidismo significa que cada rapariga faz coisas por ela própria, e para si, não ficando apenas a ouvir alguém ou a observar passivamente como se faz uma coisa.</p><p>Esta forma de aprendizagem ativa incute grande motivação em cada Guia. Cada experiência de aprendizagem vivenciada impacta a sua vida pessoal e capacita‑a para aprender o que precisa, de forma mais prática, autónoma e sem receios.</p><p>O aprender fazendo estimula a autonomia e fomenta uma aprendizagem mais rápida e melhor, a iniciativa própria e a criatividade, que permitem a cada Guia tentar algo diferente e experimentar novas maneiras de fazer as coisas. Permite ainda que a Guia cometa erros e tente de novo num ambiente seguro, e, se as atividades forem repetidas, demonstrar progressos numa competência, que a encorajarão a tentar ir mais além.</p><p>A Dirigente assume o papel de supervisora ou consultora e não de participante de categoria superior, acompanhando cada Guia durante o processo.</p>', '<p>A metodologia de aprender através da experimentação está no centro da essência dos movimentos de educação não formal. Aprender fazendo no Guidismo significa que cada rapariga faz coisas por ela própria, e para si, não ficando apenas a ouvir alguém ou a observar passivamente como se faz uma coisa.</p><p>Esta forma de aprendizagem ativa incute grande motivação em cada Guia. Cada experiência de aprendizagem vivenciada impacta a sua vida pessoal e capacita‑a para aprender o que precisa, de forma mais prática, autónoma e sem receios.</p><p>O aprender fazendo estimula a autonomia e fomenta uma aprendizagem mais rápida e melhor, a iniciativa própria e a criatividade, que permitem a cada Guia tentar algo diferente e experimentar novas maneiras de fazer as coisas. Permite ainda que a Guia cometa erros e tente de novo num ambiente seguro, e, se as atividades forem repetidas, demonstrar progressos numa competência, que a encorajarão a tentar ir mais além.</p><p>A Dirigente assume o papel de supervisora ou consultora e não de participante de categoria superior, acompanhando cada Guia durante o processo.</p>', '/pedagogia/metodo-guidista/ferramentas/aprender-fazendo'),
('Auto Desenvolvimento Progressivo', 'Progressive Self Development', 'https://drive.google.com/uc?export=view&id=1pN0HZzRMvgSsVmUC-LQGKW1IAM9CRj2j', 'https://drive.google.com/uc?export=view&id=1KU_L7rvmus7T41WE0QeZhLzIJbuO6Iih', '<p>O autodesenvolvimento progressivo significa que cada Guia determina o seu percurso de crescimento, ao seu ritmo, estando envolvida nas atividades em que participa. Para tal, é importante compreender que cada Guia tem um ritmo de desenvolvimento próprio e que aprende de formas muito diferentes.</p><p>Ao envolver as próprias Guias na escolha e no planeamento de atividades, o Guidismo oferece a oportunidade de aprender sem a pressão de atingir marcos definidos. Assim, ao participar numa atividade, cada Guia terá objetivos pessoais distintos, alguns definidos por elas, outros pela Dirigente, que os deve saber identificar e ajudar a atingir.</p><p>Para um eficaz autodesenvolvimento progressivo é importante que cada Guia seja convidada a identificar, no seu percurso de crescimento, o que quer ainda desenvolver, encorajando a sua Progressão e a tomada de decisão. Esta participação ativa da Guia no seu desenvolvimento deve também estender‑se à decisão sobre a forma como o vai realizar, ou seja, as Guias devem ser ativamente envolvidas na preparação das atividades, pois ao serem responsabilizadas por pequenas tarefas estão, na verdade, a ser responsabilizadas pelo seu próprio desenvolvimento.</p><p>O modelo pedagógico apresenta direções possíveis e áreas a explorar, e a Guia escolhe a sua rota, que percorre de acordo com o seu passo, selecionando atividades, trabalhando automotivação, liberdade de escolha e criatividade. Desta forma, cada Guia progride individualmente aprendendo também a interagir com êxito como parte de um grupo. O envolvimento das Guias no planeamento garante ainda que as atividades vão ao encontro dos seus interesses e necessidades individuais, deixando‑as mais realizadas e motivadas.</p><p>O autodesenvolvimento progressivo melhora capacidades como autodisciplina, responsabilidade por si própria e iniciativa e também desenvolve a aptidão para o trabalho em grupo, a tomada de decisão, a resolução de conflitos, a democracia e a ação individual.</p><p>A Dirigente ajuda a Guia a traçar o seu caminho e a refletir sobre os progressos realizados e ainda a criar novas metas.</p><p>Para mais informações sobre a Progressão: <a href="http://localhost:3000/pedagogia/ramos/avezinha">Ramo Avezinha</a>, <a href="http://localhost:3000/pedagogia/ramos/aventura">Ramo Aventura</a>, <a href="http://localhost:3000/pedagogia/ramos/caravela">Ramo Caravela</a>, <a href="http://localhost:3000/pedagogia/ramos/moinho">Ramo Moinho</a>, <a href="http://localhost:3000/pedagogia/dirigente">Dirigente</a>.</p>', '<p>O autodesenvolvimento progressivo significa que cada Guia determina o seu percurso de crescimento, ao seu ritmo, estando envolvida nas atividades em que participa. Para tal, é importante compreender que cada Guia tem um ritmo de desenvolvimento próprio e que aprende de formas muito diferentes.</p><p>Ao envolver as próprias Guias na escolha e no planeamento de atividades, o Guidismo oferece a oportunidade de aprender sem a pressão de atingir marcos definidos. Assim, ao participar numa atividade, cada Guia terá objetivos pessoais distintos, alguns definidos por elas, outros pela Dirigente, que os deve saber identificar e ajudar a atingir.</p><p>Para um eficaz autodesenvolvimento progressivo é importante que cada Guia seja convidada a identificar, no seu percurso de crescimento, o que quer ainda desenvolver, encorajando a sua Progressão e a tomada de decisão. Esta participação ativa da Guia no seu desenvolvimento deve também estender‑se à decisão sobre a forma como o vai realizar, ou seja, as Guias devem ser ativamente envolvidas na preparação das atividades, pois ao serem responsabilizadas por pequenas tarefas estão, na verdade, a ser responsabilizadas pelo seu próprio desenvolvimento.</p><p>O modelo pedagógico apresenta direções possíveis e áreas a explorar, e a Guia escolhe a sua rota, que percorre de acordo com o seu passo, selecionando atividades, trabalhando automotivação, liberdade de escolha e criatividade. Desta forma, cada Guia progride individualmente aprendendo também a interagir com êxito como parte de um grupo. O envolvimento das Guias no planeamento garante ainda que as atividades vão ao encontro dos seus interesses e necessidades individuais, deixando‑as mais realizadas e motivadas.</p><p>O autodesenvolvimento progressivo melhora capacidades como autodisciplina, responsabilidade por si própria e iniciativa e também desenvolve a aptidão para o trabalho em grupo, a tomada de decisão, a resolução de conflitos, a democracia e a ação individual.</p><p>A Dirigente ajuda a Guia a traçar o seu caminho e a refletir sobre os progressos realizados e ainda a criar novas metas.</p><p>Para mais informações sobre a Progressão: <a href="http://localhost:3000/pedagogia/ramos/avezinha">Ramo Avezinha</a>, <a href="http://localhost:3000/pedagogia/ramos/aventura">Ramo Aventura</a>, <a href="http://localhost:3000/pedagogia/ramos/caravela">Ramo Caravela</a>, <a href="http://localhost:3000/pedagogia/ramos/moinho">Ramo Moinho</a>, <a href="http://localhost:3000/pedagogia/dirigente">Dirigente</a>.</p>', '/pedagogia/metodo-guidista/ferramentas/auto-desenvolvimento-progressivo'),
('Simbolismo', 'Symbolism', 'https://drive.google.com/uc?export=view&id=1twAH12u9cf8nWAJLlTyU_CPzSXVOFHNe', 'https://drive.google.com/uc?export=view&id=1IJYJM8XazK6TUqgNKD8dFQY8-ETQ2e_X', '<p>O simbolismo compreende todos os elementos que, no Guidismo, criam o sentimento de pertença e a coesão do grupo. Os símbolos são uma codificação própria, que comportam um significado forte para todas as Guias. A farda que a Guia utiliza, e que permite que seja reconhecida na rua; o Trevo, emblema mundial do Guidismo, nas suas variações em cada país, mas com um significado comum; a Promessa que realiza; a Lei e a Divisa que segue como diretrizes na sua vida.</p><p>O simbolismo do Guidismo inclui também outros elementos, como o imaginário próprio de cada Ramo ou os símbolos de Patrulha, o Cerimonial de Promessas, o hino da Companhia, as tradições de cada Companhia ou Região, uma saudação especial, uma canção, uma bandeira de Patrulha ou uma forma de encerramento no fogo de conselho.</p><p>O Guidismo promove o valor e a força destes símbolos e tradições, numa continuidade ao longo da história, unindo assim várias gerações na partilha de um significado especial.</p>', '<p>O simbolismo compreende todos os elementos que, no Guidismo, criam o sentimento de pertença e a coesão do grupo. Os símbolos são uma codificação própria, que comportam um significado forte para todas as Guias. A farda que a Guia utiliza, e que permite que seja reconhecida na rua; o Trevo, emblema mundial do Guidismo, nas suas variações em cada país, mas com um significado comum; a Promessa que realiza; a Lei e a Divisa que segue como diretrizes na sua vida.</p><p>O simbolismo do Guidismo inclui também outros elementos, como o imaginário próprio de cada Ramo ou os símbolos de Patrulha, o Cerimonial de Promessas, o hino da Companhia, as tradições de cada Companhia ou Região, uma saudação especial, uma canção, uma bandeira de Patrulha ou uma forma de encerramento no fogo de conselho.</p><p>O Guidismo promove o valor e a força destes símbolos e tradições, numa continuidade ao longo da história, unindo assim várias gerações na partilha de um significado especial.</p>', '/pedagogia/metodo-guidista/ferramentas/simbolismo'),
('Cooperação ativa entre jovens e adultos', 'Active cooperation between young people and adults', 'https://drive.google.com/uc?export=view&id=13o4dwxRBSi0D0LTGXfpENx821qW4NAdC', 'https://drive.google.com/uc?export=view&id=1gYTMmujwapxTWuKDKW4jggZCkL_9pJ-3', '<p>O simbolismo compreende todos os elementos que, no Guidismo, criam o sentimento de pertença e a coesão do grupo. Os símbolos são uma codificação própria, que comportam um significado forte para todas as Guias. A farda que a Guia utiliza, e que permite que seja reconhecida na rua; o Trevo, emblema mundial do Guidismo, nas suas variações em cada país, mas com um significado comum; a Promessa que realiza; a Lei e a Divisa que segue como diretrizes na sua vida.</p><p>O simbolismo do Guidismo inclui também outros elementos, como o imaginário próprio de cada Ramo ou os símbolos de Patrulha, o Cerimonial de Promessas, o hino da Companhia, as tradições de cada Companhia ou Região, uma saudação especial, uma canção, uma bandeira de Patrulha ou uma forma de encerramento no fogo de conselho.</p><p>O Guidismo promove o valor e a força destes símbolos e tradições, numa continuidade ao longo da história, unindo assim várias gerações na partilha de um significado especial.</p>', '<p>O simbolismo compreende todos os elementos que, no Guidismo, criam o sentimento de pertença e a coesão do grupo. Os símbolos são uma codificação própria, que comportam um significado forte para todas as Guias. A farda que a Guia utiliza, e que permite que seja reconhecida na rua; o Trevo, emblema mundial do Guidismo, nas suas variações em cada país, mas com um significado comum; a Promessa que realiza; a Lei e a Divisa que segue como diretrizes na sua vida.</p><p>O simbolismo do Guidismo inclui também outros elementos, como o imaginário próprio de cada Ramo ou os símbolos de Patrulha, o Cerimonial de Promessas, o hino da Companhia, as tradições de cada Companhia ou Região, uma saudação especial, uma canção, uma bandeira de Patrulha ou uma forma de encerramento no fogo de conselho.</p><p>O Guidismo promove o valor e a força destes símbolos e tradições, numa continuidade ao longo da história, unindo assim várias gerações na partilha de um significado especial.</p>', '/pedagogia/metodo-guidista/ferramentas/cooperação-entre-jovens-e-adultos'),
('Atividades ao Ar Livre', 'Outdoor Activities', 'https://drive.google.com/uc?export=view&id=1nFDAcT9qQZ4IvklSv1aOGTxr0W1_cezz', 'https://drive.google.com/uc?export=view&id=1NtULslmNTwDsgqZ78lbNCXENl0f-zqGC', '<p>O ar livre é o espaço, por excelência, para o desenrolar das atividades Guidistas. As últimas décadas assistiram a um progressivo abandono do ar livre como local de recreio, mas desde a sua origem que o Guidismo vem invertendo essa tendência, oferecendo às raparigas oportunidades de vivenciarem a Natureza como poucas vezes lhes é permitido.</p><p>É na Natureza que se encontra o espaço mais acertado para realizar as atividades Guidistas, em que a Guia aprende habilidades que lhe serão úteis no seu quotidiano, mas também para promover competências associadas à formação do caráter e ao desenvolvimento progressivo, como a confiança ou a observação. A Natureza pode ser uma força libertadora, ajudando as raparigas e jovens a conhecer as suas forças, limitações e a descobrir a sua própria espiritualidade.</p><p>De todas as experiências de ar livre que o Guidismo proporciona, o acampamento é sem dúvida a mais rica que oferece a uma rapariga. Todas as atividades realizadas durante o acampamento utilizam a Natureza como estratégia para o desenvolvimento de capacidades: montar a sua ‘casa’ com materiais da natureza, cozinhar com fogo, observar as estrelas, fazer grandes caminhadas ou jogos noturnos. O ar livre oferece espaço para as atividades físicas, mas permite também criar um espaço de intimidade, por exemplo, numa velada, junto a uma fogueira. </p><p>As mais valiosas atividades de ar livre podem ser muito simples, como por exemplo, aprender a conhecer diferentes tipos de árvores num parque da localidade ou compreender o funcionamento de um sistema ecológico através do estudo do jardim de uma casa. </p><p>Ao serem estimuladas a gostar de estar ao ar livre e ao experienciarem a Natureza de forma tão próxima, as Guias acabarão por estar também mais atentas às ameaças a que esse espaço está hoje sujeito, aprendendo princípios ecológicos básicos e ganhando uma forte consciência ambiental e tornando‑se um elemento ativo na sua defesa e valorização. </p><p>Saber mais sobre o AR LIVRE aqui.</p>', '<p>O ar livre é o espaço, por excelência, para o desenrolar das atividades Guidistas. As últimas décadas assistiram a um progressivo abandono do ar livre como local de recreio, mas desde a sua origem que o Guidismo vem invertendo essa tendência, oferecendo às raparigas oportunidades de vivenciarem a Natureza como poucas vezes lhes é permitido.</p><p>É na Natureza que se encontra o espaço mais acertado para realizar as atividades Guidistas, em que a Guia aprende habilidades que lhe serão úteis no seu quotidiano, mas também para promover competências associadas à formação do caráter e ao desenvolvimento progressivo, como a confiança ou a observação. A Natureza pode ser uma força libertadora, ajudando as raparigas e jovens a conhecer as suas forças, limitações e a descobrir a sua própria espiritualidade.</p><p>De todas as experiências de ar livre que o Guidismo proporciona, o acampamento é sem dúvida a mais rica que oferece a uma rapariga. Todas as atividades realizadas durante o acampamento utilizam a Natureza como estratégia para o desenvolvimento de capacidades: montar a sua ‘casa’ com materiais da natureza, cozinhar com fogo, observar as estrelas, fazer grandes caminhadas ou jogos noturnos. O ar livre oferece espaço para as atividades físicas, mas permite também criar um espaço de intimidade, por exemplo, numa velada, junto a uma fogueira. </p><p>As mais valiosas atividades de ar livre podem ser muito simples, como por exemplo, aprender a conhecer diferentes tipos de árvores num parque da localidade ou compreender o funcionamento de um sistema ecológico através do estudo do jardim de uma casa. </p><p>Ao serem estimuladas a gostar de estar ao ar livre e ao experienciarem a Natureza de forma tão próxima, as Guias acabarão por estar também mais atentas às ameaças a que esse espaço está hoje sujeito, aprendendo princípios ecológicos básicos e ganhando uma forte consciência ambiental e tornando‑se um elemento ativo na sua defesa e valorização.</p><p>Saber mais sobre o AR LIVRE aqui.</p>', '/pedagogia/metodo-guidista/ferramentas/atividades-ao-ar-livre'),
('Serviço Comunitário', 'Community Service', 'https://drive.google.com/uc?export=view&id=1YG0yWuMOm_z5X49rfmeH8FIfmpe0dYsr', 'https://drive.google.com/uc?export=view&id=1v6Hbzradsyc-BkEWADfGfZo7M1t4EDf-', '<p>O serviço comunitário incute um sentido de responsabilidade pela sociedade, em que a Guia compreende que é parte integrante de uma grande comunidade e de que existem responsabilidades inerentes. Proporciona à Guia a oportunidade de conhecer e respeitar diferentes culturas e maneiras de viver, e realça a influência que ela, como indivíduo, pode exercer no seu ambiente.</p><p>O serviço é uma oportunidade para a Guia crescer como pessoa, pois permite um alargamento de horizontes, um sentido de realização pessoal e um reconhecimento do outro. </p><p>Ao se empenhar na construção e participação em projetos na comunidade local, nacional ou internacional, cada Guia envolve‑se na defesa das causas que mais lhes interessam e preocupam, tornando‑se cidadãs mais interventivas e responsáveis.</p>', '<p>O serviço comunitário incute um sentido de responsabilidade pela sociedade, em que a Guia compreende que é parte integrante de uma grande comunidade e de que existem responsabilidades inerentes. Proporciona à Guia a oportunidade de conhecer e respeitar diferentes culturas e maneiras de viver, e realça a influência que ela, como indivíduo, pode exercer no seu ambiente.</p><p>O serviço é uma oportunidade para a Guia crescer como pessoa, pois permite um alargamento de horizontes, um sentido de realização pessoal e um reconhecimento do outro. </p><p>Ao se empenhar na construção e participação em projetos na comunidade local, nacional ou internacional, cada Guia envolve‑se na defesa das causas que mais lhes interessam e preocupam, tornando‑se cidadãs mais interventivas e responsáveis. </p>', '/pedagogia/metodo-guidista/ferramentas/serviço-comunitario');



-- DROP TABLE IF EXISTS `metodo_projetos`;

CREATE TABLE `metodo_projetos` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `position` INTEGER NOT NULL, 
  `pt_date` VARCHAR(30) NOT NULL,
  `en_date` VARCHAR(30) NOT NULL,
  `pt_title` VARCHAR(100) NOT NULL,
  `en_title` VARCHAR(100) NOT NULL,
  `pt_intro` VARCHAR(500) NOT NULL,
  `en_intro` VARCHAR(500) NOT NULL,
  `thumbnail` TEXT NOT NULL,
  `image` TEXT,
  `pt_content` LONGTEXT,
  `en_content` LONGTEXT,
  `link` TEXT NOT NULL,
  `publish`	BOOL NOT NULL,
  PRIMARY KEY(`id`)
);

INSERT INTO `metodo_projetos` (position, pt_date, en_date, pt_title, en_title, pt_intro, en_intro, thumbnail, image, pt_content, en_content, link, publish ) VALUES
( 1, 'Década de 70, 1985 e 1996', '1970s, 1985 and 1996', 'Maratona do Quadrado de Lã', 'Wool Square Marathon', 'Confeção de mantas, a partir de pequenos quadrados de lã feitos pelas Guias e pelas comunidades de todo o País e que foram distribuídas aos sem abrigo e outras pessoas carenciadas.', 'Making blankets, from small wool squares made by Guides and communities across the country and distributed to homeless and other needy people.', 'https://drive.google.com/uc?export=view&id=199aNfL6xoQUKMWWPOEEdFKC8I0h5FF1H', '', '', '', '/pedagogia/metodo-guidista/projetos/maratona-do-quadrado-de-lã', 1),
( 2, '1985', '1985', 'Bola de Neve', 'Snow Ball', 'Projeto realizado em colaboração com a UNICEF, para recolha de alimentos para serem enviados para as crianças da Etiópia, flageladas pela fome.','Project carried out in collaboration with UNICEF, to receive food to be sent to children in Ethiopia, plagued by hunger.', 'https://drive.google.com/uc?export=view&id=1qq8yRTlg2z6EdPFvZzHSN1wJcn4iFd3N', '', '', '', '/pedagogia/metodo-guidista/projetos/bola-de-neve', 1),
( 3, '1992', '1992', 'Apoio aos refugiados vindos da Bósnia', 'Support for refugees from Bosnia', 'Esta iniciativa mereceu o Prémio Olave, o mais importante dado pela Associação Mundial das Guias (WAGGGS) para projetos de serviço ao próximo.', 'This initiative received the Olave Award, the most important given by the World Association of Guides (WAGGGS) for projects of service to others.', 'https://drive.google.com/uc?export=view&id=1PEf3CpPX1-31lwq4jMS_MuqXmALE528_', '', '', '', '/pedagogia/metodo-guidista/projetos/apoio-aos-refugiados-vindos-da-bósnia', 1),
( 4, '1994', '1994', 'Pacotes da Paz', 'Peace Packages', 'Projeto realizado em colaboração com o Alto Comissariado das Nações Unidas para os Refugiados, para recolha e envio de material de higiene pessoal e material escolar para as crianças atingidas pela guerra em Angola e Moçambique.', 'Project carried out in collaboration with the United Nations High Commissioner for Refugees, to collect and send personal hygiene and school supplies for children affected by the war in Angola and Mozambique.', 'https://drive.google.com/uc?export=view&id=1sz0_z6EVy79ljWSvYn4ohcNRB0HFKruT', '', '', '', '/pedagogia/metodo-guidista/projetos/pacotes-da-paz', 1),
( 5, '1999', '1999', 'SOS Kosovo', 'SOS Kosovo', 'Colaboração na recolha, triagem e embalagem de alimentos e cobertores para o Kosovo, país onde se vivia uma grave crise humanitária, motivada pela guerra.', 'Collaboration in the collecting, sorting and packaging of food and blankets for Kosovo, a country where there was a serious humanitarian crisis, motivated by the war.', 'https://drive.google.com/uc?export=view&id=171fzBZsBrdgJORIFGi-gAfC6BPn7vkUE', '', '', '', '/pedagogia/metodo-guidista/projetos/sos-kosovo', 1),
( 6, '2005 a 2016', '2005 to 2016', 'Ação Saca-Rolhas', 'Ação Saca-Rolhas', 'Projeto de recolha de rolhas usadas, sendo doadas a instituições de solidariedade social, que as recuperaram para uma nova utilização, promovendo a angariação de fundos, tendo uma dupla finalidade: contribuir para a preservação do ambiente, reaproveitando um recurso natural (cortiça) e colaborar com instituições de solidariedade social, numa perspetiva de comunidade.', 'Project to collect used corks, being donated to social solidarity institutions, which recovered them for a new use, promoting fundraising, with a dual purpose: contributing to the preservation of the environment, reusing a natural resource (cork) and collaborating with social solidarity institutions, from a community perspective.', 'https://drive.google.com/uc?export=view&id=1i3St8lunBQJcbnrjb0Jk3UmKkscbkEyv', 'https://drive.google.com/uc?export=view&id=1wORExLJ2z_Jp2RymMGysxKUcgM74i3Kn', '<p>Projeto na área da educação ambiental, através da recolha de rolhas de cortiça usadas, dinamizado pela AGP entre 2005 e 2016.</p><p>Este projeto teve como finalidade contribuir para a preservação do ambiente, reaproveitando um recurso natural, a cortiça, e colaborar com instituições de solidariedade social, uma vez que o valor que resultou da venda das rolhas para novo aproveitamento reverteu a favor destas.</p><p>Em 11 anos, foram recolhidas mais de 32 toneladas, cerca de 8.000 milhões de rolhas.</p><p>Para comemorar os 11 anos do projeto e agradecer a colaboração de toda a comunidade na recolha das rolhas de cortiça, a AGP dinamizou o concurso nacional Rolh’Arte. Cada Companhia criou uma obra de arte, usando rolhas de cortiça, para oferecer ao espaço público. A obra vencedora do Rolh’Arte, uma âncora, foi da autoria das Guias da 1ª Companhia da Apúlia e foi exposta na zona ribeirinha desta vila.</p>', '<p>Hello</p><p>Hello</p>', '/pedagogia/metodo-guidista/projetos/ação-saca-rolhas', 1),
( 7, '2005 a 2009', '2005 to 2009', 'Vamos Utopiar', 'Vamos Utopiar', 'Projeto de sensibilização para a problemática da discriminação associada ao racismo e à xenofobia, incentivando ações que gerassem a mudança de mentalidades, em pareceria com o Graal, o Alto Comissariado para a Imigração e Minorias Étnicas, a Luso Temp e a Associação de Melhoramentos e Recreativo do Talude.', 'Awareness project for the problem of discrimination associated with racism and xenophobia, encouraging actions that generate changes in mentalities, in partnership with the Grail, the High Commissioner for Immigration and Ethnic Minorities, Luso Temp and the Association for Improvements and Recreation of the Slope.', 'https://drive.google.com/uc?export=view&id=19RcfxwdIvJjXHt8ZGTzguCOLr34U9xQV', 'https://drive.google.com/uc?export=view&id=1hVZNrdjWg00OSrlvJNz9K6QTs32rW-sp', '<p>Vamos Utopiar foi um projeto que nasceu da iniciativa de cinco entidades de diferentes quadrantes da sociedade, que decidiram juntar-se e formar um coro a favor da participação igualitária de imigrantes e minorias étnicas na sociedade portuguesa:</p><p>Graal - movimento transnacional de mulheres que tem como missão promover uma cultura de cuidado tendo em vista o futuro do planeta e a qualidade de vida da humanidade, procurando criar novos modelos de vida e estimular a participação na sociedade.</p><p>Alto Comissariado para a Imigração e Minorias Étnicas - departamento governamental de apoio e consulta sobre assuntos relacionados com a imigração. Um dos seus eixos fundamentais é a mobilização e reforço da capacidade de intervenção das associações de imigrantes.</p><p>Associação Guias de Portugal - desenvolve um trabalho contínuo na formação para a cidadania de crianças e jovens raparigas. Valoriza a responsabilização pessoal, a troca de experiências e o contacto próximo com as comunidades.</p><p>Luso Temp - empresa especializada no mercado de trabalho temporário, cuja missão é promover o emprego e a formação profissional. Cultiva relações de proximidade e confiança, antecipando necessidades e promovendo o apoio e orientação do imigrante.</p><p>Associação de Melhoramentos e Recreativo do Talude (AMRT) - cria oportunidades de intervenção e desenvolvimento pessoal e coletivo a crianças, jovens e adultos imigrantes e de minorias étnicas residentes na Freguesia de Unhos.</p><p>Este projeto pretendia, primeiro que tudo, que existisse uma maior sensibilização das pessoas para a problemática da discriminação associada ao racismo e à xenofobia. E também que, em última instância, as suas ações provocassem uma mudança de mentalidades.</p><p>Para atingir esse objetivo coletivo, foram organizado e promovido um conjunto de atividades: </p><p>“Educar para o Futuro” - Começou com a sensibilização e abordagem da temática da interculturalidade às Guias entre os seis e os 22 anos, passou depois pelo trabalho conjunto com a AMRT para interação entre jovens raparigas do bairro do Talude e uma Companhia de Guias de Lisboa. O envolvimento dos pais das jovens raparigas foi também um ponto fundamental, uma vez que a valorização da consciência intercultural, nestas faixas etárias, começa no seio da família.</p><p>“Fórum da Interculturalidade” - Evento aberto à comunidade que reuniu todos os parceiros e participantes, incluindo meios de comunicação e atores-chave locais e nacionais. Nele foram apresentadas as perspetivas dos imigrantes e das associações de imigrantes envolvidas nas várias atividades do projeto.</p><p>Foi ainda criado um documento, o KIT da Cidadania , com algumas diretrizes para ajudar à implementação de todo o projeto.</p>', '<p>Hello</p><p>Hello</p>', '/pedagogia/metodo-guidista/projetos/vamos-utopiar', 1),
( 8, '2008 e 2009', '2008 to 2009', 'Portugalta', 'Portugalta', 'Projeto realizado em parceria com as Guias de Malta com o objetivo de promover uma alimentação saudável, envolvendo uma aprendizagem aprofundada sobre o tema e uma intervenção nas comunidades com atividades sobre nutrição.', 'Project carried out in partnership with the Guides of Malta with the objective of promoting healthy eating, involving in-depth learning on the subject and an intervention in communities with activities on nutrition.', 'https://drive.google.com/uc?export=view&id=1_clkQWCesA6MWFKUUDQy2EUIq0KNDoSO', 'https://drive.google.com/uc?export=view&id=1_tcRDankUus7U54ppt1S1Coro0YxQrrL', '<p>As doenças relacionadas com a nutrição afetam muitas pessoas de todas as idades pelo que é importante promover estilos de vida saudável para contrariar esta tendência.</p><p>Tentando combater uma má alimentação, que se tem vindo a transformar num hábito comum geral, as Guias de Malta desenvolveram, em 2007, um trabalho no âmbito da nutrição que se tornou muito eficaz. Foram realizadas várias atividades envolvendo as Guias, os familiares e as comunidades que as rodeiam, tentando informar e incutir mudanças nos seus estilos de vida.</p><p>Mas o seu espírito Guidista impeliu-as a ir mais além e passaram este testemunho a Portugal. Foi assim que surgiu o Portugalta, que proporcionou às Guias Caravelas e Guias Moinhos uma aprendizagem mais aprofundada sobre o tema, uma intervenção nas suas comunidades e ainda a oportunidade de irem a Malta no verão de 2009 para partilharem o trabalho realizado.</p><p>Depois de levantarem as necessidades das suas comunidades, as Guias realizaram contactos com entidades e projetaram as atividades a realizar. As 12 Patrulhas de Guias Caravelas e Guias Moinhos envolvidas no projeto passaram para a implementação das suas ideias e desenvolveram atividades relacionadas com a nutrição nas suas comunidades. São exemplos dessas atividades um jogo como forma de trabalhar hábitos de higiene com as Avezinhas e Guias Aventuras; uma palestra de higiene e hábitos de alimentação num centro social; atividades Guidistas para os mais pequenos em ATL, relacionadas com o tema; um almoço saudável para a comunidade; medição da tensão arterial junto dos idosos de um lar; uma palestra sobre doenças cardiovasculares; ou a distribuição de maçãs em transportes públicos.</p>', '<p>Hello</p><p>Hello</p>', '/pedagogia/metodo-guidista/projetos/portugalta', 1),
( 9, '2009/2010 e 2013/2014', '2009/2010 and 2013/2014', 'Ter Mãos Grandes', 'Ter Mãos Grandes', 'Projeto de apoio a três países de língua oficial portuguesa (Timor-Leste, Moçambique e Angola), através da angariação de fundos para realizar projetos de desenvolvimento local em parceria com a Fundação Fé e Cooperação. Missão em Cabo Verde, na comunidade da Achada de S. Filipe, em parceria com os Irmãos Missionários e a FEC, enquadrada num programa local de educação para o desenvolvimento e na sensibilização para o cumprimento dos Objetivos de Desenvolvimento do Milénio.', 'Support project for three Portuguese-speaking countries (Timor-Leste, Mozambique and Angola), by raising funds to carry out local development projects in partnership with Fundação Fé e Cooperação. Mission in Cape Verde, in the community of Achada de S. Filipe, in partnership with the Missionary Brothers and FEC, as part of a local program for education for development and raising awareness of the achievement of the Millennium Development Goals.', 'https://drive.google.com/uc?export=view&id=16i705zJNWs1ZqaBlFNImdJkuENSgqzPi', 'https://drive.google.com/uc?export=view&id=1OZrhM2RoXg3sJ9gPvT8zHs3wVRLjp6xf', '<p>Ter Mãos Grandes para Ajudar foi um projeto da AGP de apoio a países de língua oficial portuguesa. Concretamente, esta ação visou a implementação de três projetos de desenvolvimento local: “Um futuro para Nambuangongo”, para reabilitar um internato, em Angola, e aumentar a escolaridade de jovens raparigas; “Juntos Aprendemos”, para revitalizar uma biblioteca destinada a promover atividades lúdicas e a aulas de recuperação escolar para 50 crianças, em Moçambique; e “Padaria Comunitária”, para reabilitar o edifício de uma padaria e formar os responsáveis pela sua gestão, em Timor Leste. </p><p>Tendo como parceiro a Fundação Fé e Cooperação este projeto englobou outro mais vasto levado a cabo por esta organização: “agir para desenvolver”.  O objetivo era enquadrar o projeto num programa local de educação para o desenvolvimento, e sensibilizar para o cumprimento dos Objetivos de Desenvolvimento do Milénio.</p><p>A primeira fase decorreu entre novembro de 2009 e abril de 2010, na qual as Guias confecionaram e venderam bolachas, cuja receita da venda reverteu, integralmente, para o fundo criado para este projeto. Esta fase permitiu angariar, em apenas seis meses, mais de 51 mil euros.</p><p>Em 2013, surgiu a possibilidade de financiamento da viagem em missão de uma Patrulha de Guias Caravela ou Guias Moinhos, a um país africano de língua portuguesa. Através da parceria com a Fundação Fé e Cooperação, elegeu-se Cabo Verde por apresentar as condições mais favoráveis para esta viagem de missão.</p><p>Entre 2013 e 2014, as Guias desenvolveram projetos locais específicos e os dois projetos vencedores tiveram o privilégio de representar a AGP em Cabo Verde (Cidade da Praia). Assim, entre em agosto de 2014, sete Guias acompanhadas de três Dirigentes desenvolveram projetos de desenvolvimento local em áreas como a saúde, nutrição, ambiente e cidadania. </p>', '<p>Ter Mãos Grandes para Ajudar foi um projeto da AGP de apoio a países de língua oficial portuguesa. Concretamente, esta ação visou a implementação de três projetos de desenvolvimento local: “Um futuro para Nambuangongo”, para reabilitar um internato, em Angola, e aumentar a escolaridade de jovens raparigas; “Juntos Aprendemos”, para revitalizar uma biblioteca destinada a promover atividades lúdicas e a aulas de recuperação escolar para 50 crianças, em Moçambique; e “Padaria Comunitária”, para reabilitar o edifício de uma padaria e formar os responsáveis pela sua gestão, em Timor Leste. </p><p>Tendo como parceiro a Fundação Fé e Cooperação este projeto englobou outro mais vasto levado a cabo por esta organização: “agir para desenvolver”.  O objetivo era enquadrar o projeto num programa local de educação para o desenvolvimento, e sensibilizar para o cumprimento dos Objetivos de Desenvolvimento do Milénio.</p><p>A primeira fase decorreu entre novembro de 2009 e abril de 2010, na qual as Guias confecionaram e venderam bolachas, cuja receita da venda reverteu, integralmente, para o fundo criado para este projeto. Esta fase permitiu angariar, em apenas seis meses, mais de 51 mil euros.</p><p>Em 2013, surgiu a possibilidade de financiamento da viagem em missão de uma Patrulha de Guias Caravela ou Guias Moinhos, a um país africano de língua portuguesa. Através da parceria com a Fundação Fé e Cooperação, elegeu-se Cabo Verde por apresentar as condições mais favoráveis para esta viagem de missão.</p><p>Entre 2013 e 2014, as Guias desenvolveram projetos locais específicos e os dois projetos vencedores tiveram o privilégio de representar a AGP em Cabo Verde (Cidade da Praia). Assim, entre em agosto de 2014, sete Guias acompanhadas de três Dirigentes desenvolveram projetos de desenvolvimento local em áreas como a saúde, nutrição, ambiente e cidadania. </p>', '/pedagogia/metodo-guidista/projetos/ter-mãos-grandes', 1),
( 10, '2015 a 2017', '2015 to 2017', 'Vozes Contra a Violência', 'Vozes Contra a Violência', 'Projeto lançado pela Associação Mundial com o objetivo de promover à escala global um movimento de reflexão e de mudança de comportamentos em torno do tema da violência sobre as raparigas e jovens mulheres.', 'Project launched by the World Association with the aim of promoting a movement of reflection and behavior change around the theme of violence on girls and young women on a global scale.', 'https://drive.google.com/uc?export=view&id=1lPy59QhbWdxbCcsPtXk5yNHo7cKmug8B', 'https://drive.google.com/uc?export=view&id=1Uy3_clZhYoxu5xUKwvFyuXbEMeoWt0ub', '<p>Vozes Contra a Violência (Voices Against Violence) é uma iniciativa da Associação Mundial das Guias (WAGGGS) com o objetivo de promover à escala global um movimento de reflexão e de mudança de comportamentos em torno do tema da violência sobre as raparigas e jovens mulheres.</p><p>Com esse objetivo, a <a href="http://localhost:3000/sobre/associacao-mundial">WAGGGS</a> desenvolveu, em parceria com a Organização das Nações Unidas (ONU), um programa educacional específico sobre este tema, que até ao ano de 2020 será implementado junto de mais de cinco milhões de crianças e jovens de todo o mundo.</p><p>A Associação Guias de Portugal foi também parceira desta iniciativa, estando empenhada na sua disseminação, desde logo por via da formação das suas Dirigentes, responsáveis por liderar a implementação do programa Vozes Contra a Violência nas várias regiões do País, quer pelo consequente envolvimento de todas as Guias, famílias e comunidade em geral na defesa dos direitos das raparigas.</p><p>Alinhada com a missão das Guias, de proporcionar às raparigas e jovens mulheres a oportunidade de desenvolverem plenamente o seu potencial como cidadãs universais responsáveis, a implementação deste programa assenta na capacitação das raparigas e jovens mulheres de forma a conseguirem mais facilmente identificar as diferentes formas de violência, a entender as suas causas, a reconhecer os seus direitos e a adquirir as capacidades e a confiança necessárias para serem agentes ativas na reivindicação desses direitos.</p><p>Estima-se que 7 em cada 10 raparigas em todo o mundo experienciam algum tipo de violência ao longo da sua vida. As raparigas e jovens mulheres são particularmente vulneráveis à violência, que ocorre na esfera privada e pública e assume muitas formas, incluindo a violência no namoro, o bullying, entre outras. Em Portugal, 85% das vítimas de violência doméstica são mulheres, na sua grande maioria sendo o autor o próprio parceiro.</p><div style="background-color: #1aa3db; color: #fff; font-size: 28px; font-weight: 500; text-align: center; padding: 50px 0px; margin: 40px 0px">O Projecto Stop The Violence</div><p>A iniciativa Vozes Contra a Violência integra um projeto mais vasto lançado em julho de 2011 pela WAGGGS em parceria com a ONU, designado de “Stop the Violence, speak out for girls rights” (Vamos pôr fim à violência, defendendo os direitos das raparigas), que tem por grande objetivo acabar com os vários tipos de violência contra raparigas e jovens mulheres em todo o mundo.</p><p>O projeto intervém a vários níveis e junto de vários públicos, conciliando iniciativas de âmbito mais alargado, como sejam campanhas de sensibilização e a disponibilização de recursos sobre o tema da violência sobre as raparigas e jovens mulheres, com a produção de conhecimento e investigação e o exercício de influência junto dos agentes e decisores políticos nestes domínios.</p><p>É também neste contexto que o programa educacional “Vozes Contra a Violência” se apresenta como uma peça fundamental, na medida em que permitirá uma implementação consistente do projeto no terreno e a sua disseminação a uma escala mais local.</p><p>Para que todos juntem a sua voz contra a violência!</p><p>Saber mais sobre o Vozes contra a Violência <a href="https://www.wagggs.org/en/what-we-do/stop-the-violence/" target="_blank">aqui</a>.</p>', '<p>Vozes Contra a Violência (Voices Against Violence) é uma iniciativa da Associação Mundial das Guias (WAGGGS) com o objetivo de promover à escala global um movimento de reflexão e de mudança de comportamentos em torno do tema da violência sobre as raparigas e jovens mulheres.</p><p>Com esse objetivo, a <a href="http://localhost:3000/sobre/associacao-mundial">WAGGGS</a> desenvolveu, em parceria com a Organização das Nações Unidas (ONU), um programa educacional específico sobre este tema, que até ao ano de 2020 será implementado junto de mais de cinco milhões de crianças e jovens de todo o mundo.</p><p>A Associação Guias de Portugal foi também parceira desta iniciativa, estando empenhada na sua disseminação, desde logo por via da formação das suas Dirigentes, responsáveis por liderar a implementação do programa Vozes Contra a Violência nas várias regiões do País, quer pelo consequente envolvimento de todas as Guias, famílias e comunidade em geral na defesa dos direitos das raparigas.</p><p>Alinhada com a missão das Guias, de proporcionar às raparigas e jovens mulheres a oportunidade de desenvolverem plenamente o seu potencial como cidadãs universais responsáveis, a implementação deste programa assenta na capacitação das raparigas e jovens mulheres de forma a conseguirem mais facilmente identificar as diferentes formas de violência, a entender as suas causas, a reconhecer os seus direitos e a adquirir as capacidades e a confiança necessárias para serem agentes ativas na reivindicação desses direitos.</p><p>Estima-se que 7 em cada 10 raparigas em todo o mundo experienciam algum tipo de violência ao longo da sua vida. As raparigas e jovens mulheres são particularmente vulneráveis à violência, que ocorre na esfera privada e pública e assume muitas formas, incluindo a violência no namoro, o bullying, entre outras. Em Portugal, 85% das vítimas de violência doméstica são mulheres, na sua grande maioria sendo o autor o próprio parceiro.</p><div style="background-color: #1aa3db; color: #fff; font-size: 28px; font-weight: 500; text-align: center; padding: 50px 0px; margin: 40px 0px">O Projecto Stop The Violence</div><p>A iniciativa Vozes Contra a Violência integra um projeto mais vasto lançado em julho de 2011 pela WAGGGS em parceria com a ONU, designado de “Stop the Violence, speak out for girls rights” (Vamos pôr fim à violência, defendendo os direitos das raparigas), que tem por grande objetivo acabar com os vários tipos de violência contra raparigas e jovens mulheres em todo o mundo.</p><p>O projeto intervém a vários níveis e junto de vários públicos, conciliando iniciativas de âmbito mais alargado, como sejam campanhas de sensibilização e a disponibilização de recursos sobre o tema da violência sobre as raparigas e jovens mulheres, com a produção de conhecimento e investigação e o exercício de influência junto dos agentes e decisores políticos nestes domínios.</p><p>É também neste contexto que o programa educacional “Vozes Contra a Violência” se apresenta como uma peça fundamental, na medida em que permitirá uma implementação consistente do projeto no terreno e a sua disseminação a uma escala mais local.</p><p>Para que todos juntem a sua voz contra a violência!</p><p>Saber mais sobre o Vozes contra a Violência <a href="https://www.wagggs.org/en/what-we-do/stop-the-violence/" target="_blank">aqui</a>.</p>', '/pedagogia/metodo-guidista/projetos/vozes-contra-a-violência', 1);



-- DROP TABLE IF EXISTS `metodo_atividades`;

CREATE TABLE `metodo_atividades` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `pt_title` VARCHAR(30) NOT NULL,
  `en_title` VARCHAR(30) NOT NULL,
  `image` TEXT NOT NULL,
  `pt_content` LONGTEXT NOT NULL,
  `en_content` LONGTEXT NOT NULL,
  PRIMARY KEY(`id`)
);

INSERT INTO `metodo_atividades` (pt_title, en_title, image, pt_content, en_content) VALUES
('Atividades em Campo', 'Field Activities', 'https://drive.google.com/uc?export=view&id=1NZK84F3nrooh_ZGMzDX9BONaut6nmSuw', '<p>Baden-Powell dizia que o Acampamento “é a escola dos esforços e do desprendimento, nele as Guias aprendem a bastarem-se a si próprias, suprimindo as carências existentes no campo, com os meios que a Natureza oferece e com a técnica que aprenderam.</p><p>A vida no campo é a grande aventura cheia de desafios que proporciona a cada Guia aprender a vencer dificuldades através das competências adquiridas e transformar o campo onde se encontra na “casa” onde vai viver durante cinco a sete dias.</p><p>Saber mais sobre o Acampamento aqui.</p><p>Acantonamento</p><p>O Acantonamento é uma atividade dentro de casa com a duração mínima de um fim de semana. É realizado no inverno, no período das férias de Natal, com a duração de quatro ou cinco dias e ao longo do ano em pequenas atividades.</p><p>Bivaque</p><p>O Bivaque é um pequeno acampamento de Patrulha, que habitualmente inclui a dormida num abrigo construído pelas Guias e refeições de cozinha sem panelas.</p><p>Raido</p><p>O Raid é uma grande caminhada pelo campo, praia ou serra, em que se visitam pontos de interesse da região, conhecendo as suas características (história, clima, vegetação, etc.). São entregues mensagens às Guias, com propostas de tarefas para realizar ao longo do percurso e com indicações sobre o mesmo, em cifra ou através de orientação por carta topográfica.</p>', '<p>Baden-Powell dizia que o Acampamento “é a escola dos esforços e do desprendimento, nele as Guias aprendem a bastarem-se a si próprias, suprimindo as carências existentes no campo, com os meios que a Natureza oferece e com a técnica que aprenderam.</p><p>A vida no campo é a grande aventura cheia de desafios que proporciona a cada Guia aprender a vencer dificuldades através das competências adquiridas e transformar o campo onde se encontra na “casa” onde vai viver durante cinco a sete dias.</p><p>Saber mais sobre o Acampamento aqui.</p><p>Acantonamento</p><p>O Acantonamento é uma atividade dentro de casa com a duração mínima de um fim de semana. É realizado no inverno, no período das férias de Natal, com a duração de quatro ou cinco dias e ao longo do ano em pequenas atividades.</p><p>Bivaque</p><p>O Bivaque é um pequeno acampamento de Patrulha, que habitualmente inclui a dormida num abrigo construído pelas Guias e refeições de cozinha sem panelas.</p><p>Raido</p><p>O Raid é uma grande caminhada pelo campo, praia ou serra, em que se visitam pontos de interesse da região, conhecendo as suas características (história, clima, vegetação, etc.). São entregues mensagens às Guias, com propostas de tarefas para realizar ao longo do percurso e com indicações sobre o mesmo, em cifra ou através de orientação por carta topográfica.</p>'),
('Atividades da Sede', 'Headquarters Activities', 'https://drive.google.com/uc?export=view&id=1cvrx58jm_FEj8Qmwk5GdunbuyJMYUcPq', '<p>As Guias organizam-se localmente em Companhias e reúnem-se todas as semanas.</p><p>A sede da Companhia é o local onde cada Ninho/Patrulha tem o seu canto e onde trabalham em conjunto.</p><p>A reunião semanal tem vários momentos: a reunião de Companhia (momento de encontro dos vários Ramos); o Conselho de Honra (reunião das Dirigentes com as Chefes e Sub-Chefes de Patrulha, em que se programam e avaliam as atividades e em que é dada formação); e a reunião de Patrulha (distribuição de tarefas de acordo com os cargos atribuídos e trabalho sobre a Progressão com a ajuda da Chefe e Sub-Chefe da Patrulha).</p>', '<p>As Guias organizam-se localmente em Companhias e reúnem-se todas as semanas.</p><p>A sede da Companhia é o local onde cada Ninho/Patrulha tem o seu canto e onde trabalham em conjunto.</p><p>A reunião semanal tem vários momentos: a reunião de Companhia (momento de encontro dos vários Ramos); o Conselho de Honra (reunião das Dirigentes com as Chefes e Sub-Chefes de Patrulha, em que se programam e avaliam as atividades e em que é dada formação); e a reunião de Patrulha (distribuição de tarefas de acordo com os cargos atribuídos e trabalho sobre a Progressão com a ajuda da Chefe e Sub-Chefe da Patrulha).</p>'),
('Atividades de Cidade', 'City Activities', 'https://drive.google.com/uc?export=view&id=1CrCLMrwYzitTQVpNSjFsz0jM0-OJG1dF', '<p>As atividades de cidade permitem conhecer novos locais, novas gentes, novas culturas e novas formas de pensar. O jogo de conhecimento da cidade proporciona às Guias a oportunidade de conhecerem a História e as histórias do local, através da população, de visitarem museus, exposições e outros locais de interesse, vivendo, desta forma, o Princípio “A Guia ama a sua Pátria</p>', '<p>As atividades de cidade permitem conhecer novos locais, novas gentes, novas culturas e novas formas de pensar. O jogo de conhecimento da cidade proporciona às Guias a oportunidade de conhecerem a História e as histórias do local, através da população, de visitarem museus, exposições e outros locais de interesse, vivendo, desta forma, o Princípio “A Guia ama a sua Pátria</p>'),
('Serviço Comunitário', 'Community Service', 'https://drive.google.com/uc?export=view&id=19RDK9Y9O4lBWqiQAXcN0LssjHD2ETVKd', '<p>Na essência do Guidismo está a convicção no valor do serviço ao próximo como componente importante para uma cidadania responsável. Assim, o Movimento Guidista tenta aproximar as raparigas da comunidade onde estão inseridas e procura sensibilizar para a responsabilidade do futuro e para o bem comum. Assim, as Guias realizam atividades como projetos de desenvolvimento comunitário junto da população mais carenciada, peditórios e recolha de bens ou alimentos, campanhas de sensibilização sobre uma área (higiene, alfabetização, ambiente, etc) ou atividades de preservação ambiental (recolha de lixo, limpeza de praias e florestas, plantação de árvores, como por exemplo o <a href="https://www.cleanuptheworld.org/about-us" target="_blank">Clean Up the World</a>)</p><p>Muitos destes projetos estão alinhados com os <a href="https://sustainabledevelopment.un.org/?menu=1300" target="_blank">Objetivos de Desenvolvimento Sustentável</a>, contribuindo também o Guidismo para as metas de 2030.</p>', '<p>Na essência do Guidismo está a convicção no valor do serviço ao próximo como componente importante para uma cidadania responsável. Assim, o Movimento Guidista tenta aproximar as raparigas da comunidade onde estão inseridas e procura sensibilizar para a responsabilidade do futuro e para o bem comum. Assim, as Guias realizam atividades como projetos de desenvolvimento comunitário junto da população mais carenciada, peditórios e recolha de bens ou alimentos, campanhas de sensibilização sobre uma área (higiene, alfabetização, ambiente, etc) ou atividades de preservação ambiental (recolha de lixo, limpeza de praias e florestas, plantação de árvores, como por exemplo o <a href="https://www.cleanuptheworld.org/about-us" target="_blank">Clean Up the World</a>)</p><p>Muitos destes projetos estão alinhados com os <a href="https://sustainabledevelopment.un.org/?menu=1300" target="_blank">Objetivos de Desenvolvimento Sustentável</a>, contribuindo também o Guidismo para as metas de 2030.</p>'),
('Experiências Internacionais', 'International Experiences', 'https://drive.google.com/uc?export=view&id=1dQfeEg8drfmfcyYn7MzEEXl9-P9aLb9y', '<p>O Guidismo promove o respeito, a empatia e a tolerância pelos outros e a responsabilidade pelo mundo em que vivemos, também através da educação internacional. Ao aprender como vivem as pessoas de outras culturas e religiões, a Guia adquire um entendimento e aceitação das diferentes formas de pensar e de viver, e ao estabelecer amizade com pessoas de diferentes culturas e histórias de vida, desenvolve um sentido de responsabilidade e um conhecimento da interdependência da sua vida em relação à vida dos outros. A educação internacional é também importante como forma de fortalecer a educação para a paz, valor fortemente promovido pelo Guidismo.</p><p>As experiências internacionais tanto podem acontecer durante uma reunião de Patrulha, através de um contacto no bairro, ou num campo internacional, no estrangeiro. Ou ainda em atividades internacionais como o <a href="https://www.jotajoti.info/" target="_blank">JOTA-JOTI</a> (Jamboree On The Air - Jamboree On The Internet), evento realizado anualmente, no terceiro fim de semana do mês de outubro, desde as 00h00 de sábado até às 24h00 de domingo (hora local), num total de 48 horas, que promove a comunicação entre Guias e Escuteiros de vários países do mundo, via radio amador e internet.</p>', '<p>O Guidismo promove o respeito, a empatia e a tolerância pelos outros e a responsabilidade pelo mundo em que vivemos, também através da educação internacional. Ao aprender como vivem as pessoas de outras culturas e religiões, a Guia adquire um entendimento e aceitação das diferentes formas de pensar e de viver, e ao estabelecer amizade com pessoas de diferentes culturas e histórias de vida, desenvolve um sentido de responsabilidade e um conhecimento da interdependência da sua vida em relação à vida dos outros. A educação internacional é também importante como forma de fortalecer a educação para a paz, valor fortemente promovido pelo Guidismo.</p><p>As experiências internacionais tanto podem acontecer durante uma reunião de Patrulha, através de um contacto no bairro, ou num campo internacional, no estrangeiro. Ou ainda em atividades internacionais como o <a href="https://www.jotajoti.info/" target="_blank">JOTA-JOTI</a> (Jamboree On The Air - Jamboree On The Internet), evento realizado anualmente, no terceiro fim de semana do mês de outubro, desde as 00h00 de sábado até às 24h00 de domingo (hora local), num total de 48 horas, que promove a comunicação entre Guias e Escuteiros de vários países do mundo, via radio amador e internet.</p>');



-- DROP TABLE IF EXISTS `contatos`;

CREATE TABLE `contatos` (
  `pt_endereco`	LONGTEXT,
  `en_endereco` LONGTEXT,
  `google_maps` VARCHAR(200),
  `telefone` VARCHAR(100),
  `email` VARCHAR(100),
  `pt_secretariado` LONGTEXT,
  `en_secretariado` LONGTEXT,
  `pt_deposito` LONGTEXT,
  `en_deposito` LONGTEXT,
  `presidente` VARCHAR(100),
  `internacional` VARCHAR(100),
  `publicacoes` VARCHAR(100),
  `facebook` VARCHAR(100),
  `instagram` VARCHAR(100),
  `linkedin` VARCHAR(100)
);


INSERT INTO `contatos` ( pt_endereco, en_endereco, google_maps, telefone, email, pt_secretariado, en_secretariado, pt_deposito, en_deposito, presidente, internacional, publicacoes,facebook, instagram, linkedin ) VALUES
('Avenida Miguel Bombarda, Nº128 R/Chão Esq. 1050-167 Lisboa','Avenue Miguel Bombarda, Nº128 Floor/Left. 1050-167 Lisboa','https://goo.gl/maps/TGZTgHYotNwLF6wr7','217 938 227','publicacoes@guiasdeportugal.org','Aberto de 2ª a 6ª das 10h00 às 12h30 e das 13h30 às 17h30','Aberto de 2ª a 6ª das 10h00 às 12h30 e das 13h30 às 17h30','Aberto de 2ª a 6ª das 10h00 às 12h30 e das 13h30 às 17h00','Aberto de 2ª a 6ª das 10h00 às 12h30 e das 13h30 às 17h00','publicacoes@guiasdeportugal.org','agp.internacional@zonmail.pt','agp.publicacoes@gmail.com', '#', '#', '#');



-- DROP TABLE IF EXISTS `files`;

CREATE TABLE `files` (
  `estatutos` TEXT,
  `livro_especialidades` TEXT,
  `regulamentos` TEXT,
  `cartao_associada` TEXT,
  `politica_de_privacidade` TEXT,
  `politica_de_dados` TEXT
);

INSERT INTO `files` (estatutos, livro_especialidades, regulamentos, cartao_associada, politica_de_privacidade, politica_de_dados ) VALUES
('https://drive.google.com/file/d/1Ie9Y29f0vxJIOvjHJuI5RQqNf-tbs_i_/view?usp=sharing',
'https://drive.google.com/file/d/1x7nByFv5sOGRWCwRB2UzTTE4y3l9TS-o/view?usp=sharing',
'https://drive.google.com/file/d/1YIAKkmg6IFNwkxBnPB-KOTOsn6ISq0Oz/view?usp=sharing',
'https://drive.google.com/file/d/1S5w9UL0mcfvbz64NGykMas-LosrvnMiu/view?usp=sharing',
'politica_de_privacidade',
'https://drive.google.com/file/d/1_Wcx-PrGRDvDQwkCfAkDu1QU1H_FM335/view?usp=sharing');



-- DROP TABLE IF EXISTS `palavraaospais`;

CREATE TABLE `palavraaospais` (
  `image` TEXT,
  `pt_title` VARCHAR (1000),
  `en_title` VARCHAR (1000),
  `pt_text_title` LONGTEXT,
  `en_text_title` LONGTEXT,
  `pt_title_card` VARCHAR (1000),
  `en_title_card` VARCHAR (1000),
  `pt_text_card` LONGTEXT,
  `en_text_card` LONGTEXT
);

INSERT INTO `palavraaospais` (image, pt_title, en_title, pt_text_title, en_text_title, pt_title_card, en_title_card, pt_text_card, en_text_card) VALUES
('https://drive.google.com/uc?export=view&id=1Zuhwz3ucEISa_LPaCk8g57PtcH40xvIy',
  'Ter uma filha nas Guias, porque sim?',
  'Why should I have my daughter at Guias?',
  'Nas Guias ajudamos as crianças e jovens raparigas a desenvolverem plenamente o seu potencial como cidadãs universais responsáveis.',
  'At Guias, we help children and young girls to develop their potential as responsible universal citizens.',
  'Eu já tenho uma filha Guia...',
  'I already have a daughter Guia...',
  'Impactos partilhados na primeira pessoa.',
  'Shared impacts in the first person.');

  -- DROP TABLE `palavraaospais2`;

CREATE TABLE `palavraaospais2` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `position` INTEGER NOT NULL,
  `pt_title` VARCHAR (1000),
  `en_title` VARCHAR (1000),
  `image` TEXT,
  `pt_text` LONGTEXT,
  `en_text` LONGTEXT,
  `publish` BOOL NOT NULL,
  PRIMARY KEY(`id`)
);

INSERT INTO `palavraaospais2`(position, pt_title, en_title, image, pt_text, en_text, publish) VALUES 
(1,'Ajudamos, não o fazemos por elas.', 'We help, we dont do it for them.', 'https://drive.google.com/uc?export=view&id=1AE8YWYpSyjxMw6SPS_jQ234Q4rvz2qmy', 'Nas Guias aprendemos fazendo. Isto quer dizer que a rapariga faz coisas por ela própria, e para si, não ficando apenas a ouvir alguém ou a observar passivamente como se faz uma coisa. Fazer algo significa aprender mais depressa e melhor, uma vez que a experiência é pessoal e não em "segunda mão". Aprender fazendo fomenta a iniciativa própria e a criatividade, dado que permite à Guia tentar algo diferente de fazer as coisas. Aprender fazendo permite que ela cometa erros num ambiente seguro, e, se as atividades forem repetidas, demonstrar progressos numa competência, que a encorajarão a tentar ir mais além.', 'At Guias we learn by doing. This means that the girl does things for herself, and for herself, not just listening to someone or watching passively how to do something. Doing something means learning faster and better, since the experience is personal and not "second-hand". Learning by doing fosters own initiative and creativity, as it allows Guia to try something different to do things. Learning by doing allows her to make mistakes in a safe environment, and, if the activities are repeated, demonstrate progress in a skill that will encourage her to try to go further.', 1),
(2,'Plenamente, mas ao seu próprio ritmo.', 'Fully, but at your own pace.', 'https://drive.google.com/uc?export=view&id=1jiQp2-nrTNp9xSgfsCQ8ep0iVPJZh0DE', 'Nas Guias apresentamos direções possíveis e áreas a explorar, mas é a Guia que escolhe a sua rota, que percorre de acordo com o seu passo, selecionando atividades, experimentando automotivação e liberdade de escolha. Desta forma, progride individualmente aprendendo também a interagir com êxito como parte de um grupo, desenvolvendo a sua imaginação e criatividade.','At Guias we present possible directions and areas to explore, but it is the Guide that chooses your route, that follows according to your step, selecting activities, experiencing self-motivation and freedom of choice. In this way, you progress individually by learning how to interact successfully as part of a group, developing your imagination and creativity.', 1),
(3,'O seu potencial, mas integrada numa Patrulha.', 'Your potential, but integrated into a patrol', 'https://drive.google.com/uc?export=view&id=1_9hk2ml1IExC2ibeacMjbw-NFElq5Ogq', 'Nas Guias a rapariga é integrada numa patrulha, no âmbito da qual aprende com outras raparigas da mesma idade, num ambiente familiar e favorável, promovendo o espírito de grupo e a cooperação; desenvolvimento da atribuição, aceitação e partilha de responsabilidades; aquisição de capacidades de liderança; prática de competências democráticas, incluindo formas de tomada de decisão e sua implementação. Desde o primeiro dia, é chamada a tomar responsabilidade por pequenos aspetos da vida da patrulha e das suas atividades, e, gradualmente, a alargar e aumentar essa responsabilidade.', 'At Guias the girl is part of a patrol, where she learns from other girls of the same age, in a familiar and supportive environment, promoting group spirit and cooperation; developing assignment, acceptance and sharing of responsibilities; acquisition of leadership skills; practice of democratic skills, including ways of making decisions and implementing them. From day one, taking responsibility for small aspects of the patrols life and activities, and gradually expanding and increasing that responsibility.', 1),
(4,'Cidadãs universais, atentas às realidades globais e locais.', 'Universal citizens, attentive to global and local realities.', 'https://drive.google.com/uc?export=view&id=1OWl19e7y7uAVVjiYc_hT9R08Hbo3eCjy', 'Nas Guias procuramos deixar o mundo um melhor do que o encontrámos – assim, nos pediu o nosso fundador, Baden Powell. Nesta tão simples frase se encerra uma grande e desafiante missão na qual todas as Guias são convidadas a participar, por um lado através do seu envolvimento e interesse pelas realidades do mundo, mas também, à sua medida, no contributo ativo em projetos de serviço. O trabalho com a comunidade é um importante meio de educação: estimula o sentido de responsabilidade da Guia perante o mundo em que se insere, proporciona-lhe a oportunidade de conhecer e respeitar diferentes culturas e maneiras de viver e realça a influência positiva que ela, como indivíduo, pode exercer no seu ambiente.', 'At Guias we try to make the world a better place than we found it - so our founder, Baden Powell, asked us. This very simple sentence ends a great and challenging mission in which all the Guides are invited to participate, on the one hand, through their involvement and interest in the realities of the world, but also, to their measure, in the active contribution in service projects. Working with the community is an important means of education: it stimulates the Guides sense of responsibility towards the world in which it operates, provides it with the opportunity to know and respect different cultures and ways of living and enhances the influence positive that she, as an individual, can exercise in her environment', 1),
(5,'Responsáveis, com verdadeiro sentido de compromisso.', 'Responsible, with a real sense of commitment.', 'https://drive.google.com/uc?export=view&id=1LlOC6_erCTdHs6oSkX9NytG7IKBVFLW5', '<p>Nas Guias, valores como palavra de honra, honestidade, confiança, verdade, lealdade estão expressos nos Princípios e Lei que cada Guia voluntariamente promete cumprir e pelos quais passa a orientar a sua vida.</p>', '', 1),
(6,'O acampamento e o ar livre como espaços de aprendizagem.','Camping and outdoor spaces for learning.','https://drive.google.com/uc?export=view&id=1eDAwDnlru0p2Vecjg4NeB1vJvsNOxRcC','<p>Nas Guias, o acampamento e o contacto com a natureza são de extrema importância enquanto espaços educativos. Defendia Baden Powell que o acampamento é como “uma escola dos esforços e do desprendimento, nele as Guias aprendem a bastarem-se a elas próprias, suprimindo as carências existentes no campo com os meios que a Natureza oferece e com a técnica que aprenderam”.</p><p>Um estudo muito recente realizado pela Universidade de Plymouth (artigo completo aqui) sugere que crianças que acampam ao ar livre têm melhor desempenho escolar, além de serem mais saudáveis e felizes.</p><p>Quatro em cada cinco pais inquiridos afirmou que os acampamentos têm um efeito positivo na educação escolar dos seus filhos, 98% indicou que os acampamentos fazem os filhos apreciarem a natureza, 95% respondeu que os filhos ficam mais felizes quando acampam e 93% que o acampamento ajuda no desenvolvimento de competências úteis para a vida adulta. Outros pais indicaram que os filhos ficam menos dependentes de tecnologias como telemóveis e jogos de vídeo e 68% afirmou que os acampamentos ajudam os filhos no processo de aprendizagem em sala de aula. A professora que coordenou o estudo concluiu que “o acampamento ajuda na compreensão do currículo escolar nas matérias de Geografia, História e Ciências porque as atividades mais comuns num acampamento são de contacto puro com a natureza, nas quais as crianças conseguem entender melhor os ecossistemas, respeitando assim o meio ambiente”.</p>','', 1);


  -- DROP TABLE `palavraaospaiscards`;

CREATE TABLE `palavraaospaiscards` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `pt_text` LONGTEXT,
  `en_text` LONGTEXT,
  `pt_parents` VARCHAR (1000),
  `en_parents` VARCHAR (1000),
  `name` VARCHAR (1000),
  `publish` BOOL NOT NULL,
  PRIMARY KEY(`id`)
);

INSERT INTO `palavraaospaiscards`(pt_text, en_text, pt_parents, en_parents, name, publish) VALUES 
('Tornou-se muito responsável. Com quase 16 anos trabalha bem em equipa, tem uma noção do que é justo e sabe defender as suas escolhas. A formação que nós, pais, damos, é auxiliada pela presença das Guias.', 'She became very responsible. With almost 16 years old she works well in a team, has a sense of what is fair and knows how to defend her choices. The training that we, the parents, give her is aided by the presence of the Guides.', 'Mãe de uma Guia', 'Mother of a Guia', 'Ana Paula Rocha', 1),
('Tem sido uma caminhada vivida muito intensamente, onde valores como a fé, a amizade, a partilha e a ajuda ao próximo estão sempre presentes.','', 'Mãe de uma Guia', 'Mother of a Guia', 'Sílvia Garriapa', 1),
('Tenho notado que elas têm crescido e evoluído com espírito de grupo, são amigas da natureza, colaboram e isso dá-me imensa satisfação porque estão a preparar-se para enfrentar a realidade da vida.', 'I have noticed that they have grown and evolved with a group spirit, they are friends of nature, they collaborate and that gives me immense satisfaction because they are preparing to face the reality of life.', 'Pai de duas Guias', 'Father of two Guias', 'Manuel Cerqueira', 1),
('Serem Guias ajudou-as a adquirir competências de liderança, organização e a desenvolver a criatividade, a entreajuda e o sentido de responsabilidade.', 'Being Guia helped them acquire leadership, organization skills and develop creativity, mutual assistance and a sense of responsibility.', 'Pais de duas Guias', 'Parents of two Guias', 'Sofia e José Ferreira', 1);



-- DROP TABLE IF EXISTS `recursos`;

CREATE TABLE `recursos` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `pt_label` VARCHAR(50),
  `en_label` VARCHAR(50),
  `link` TEXT,
  PRIMARY KEY(`id`)
);

INSERT INTO `recursos` (pt_label, en_label, link) VALUES
('Regulamentos', 'Regulations', 'https://drive.google.com/file/d/1YIAKkmg6IFNwkxBnPB-KOTOsn6ISq0Oz/view?usp=sharing'),
('Livro de Especialidades', 'Book', 'https://drive.google.com/file/d/1x7nByFv5sOGRWCwRB2UzTTE4y3l9TS-o/view?usp=sharing'),
('Cartão de Associada', 'Cartão de Associada', 'https://drive.google.com/file/d/1S5w9UL0mcfvbz64NGykMas-LosrvnMiu/view?usp=sharing');



-- DROP TABLE IF EXISTS `worldAssociation`;

CREATE TABLE worldAssociation (
            `banner`TEXT NOT NULL,
            `logoWAGGGS` TEXT NOT NULL,
            `section1_pt`MEDIUMTEXT NOT NULL,
            `section1_en` MEDIUMTEXT,
            `section2_pt`MEDIUMTEXT NOT NULL,
            `section2_en` MEDIUMTEXT,
            `section3_column1_title_pt` VARCHAR(150) NOT NULL,
            `section3_column1_title_en` VARCHAR(150),
            `section3_column1_text1_pt` VARCHAR(200) NOT NULL,
            `section3_column1_text2_pt` VARCHAR(200) NOT NULL,
            `section3_column1_text3_pt` VARCHAR(200) NOT NULL,
            `section3_column1_text4_pt` VARCHAR(200) NOT NULL,
            `section3_column1_text5_pt` VARCHAR(200) NOT NULL,
            `section3_column1_text1_en` VARCHAR(200),
            `section3_column1_text2_en` VARCHAR(200),
            `section3_column1_text3_en` VARCHAR(200),
            `section3_column1_text4_en` VARCHAR(200),
            `section3_column1_text5_en` VARCHAR(200),
            `section3_column2_title_pt` VARCHAR(150) NOT NULL,
            `section3_column2_title_en` VARCHAR(150),
            `section3_column2_text1_pt` VARCHAR(200) NOT NULL,
            `section3_column2_text2_pt` VARCHAR(200) NOT NULL,
            `section3_column2_text3_pt` VARCHAR(200) NOT NULL,
            `section3_column2_text4_pt` VARCHAR(200) NOT NULL,
            `section3_column2_text5_pt` VARCHAR(200) NOT NULL,
            `section3_column2_text1_en` VARCHAR(200),
            `section3_column2_text2_en` VARCHAR(200),
            `section3_column2_text3_en` VARCHAR(200),
            `section3_column2_text4_en` VARCHAR(200),
            `section3_column2_text5_en` VARCHAR(200),
            `section4_title_pt` VARCHAR(150) NOT NULL,
            `section4_title_en` VARCHAR(150),
            `section4_pt` MEDIUMTEXT NOT NULL,
            `section4_en` MEDIUMTEXT,
            `section4_thumbnail` TEXT NOT NULL,
            `section5_column1_title_pt`VARCHAR (200) NOT NULL,
            `section5_column1_title_en`VARCHAR (200) NOT NULL,
            `section5_column1_thumbnail` TEXT NOT NULL,
            `section5_column1_pt` MEDIUMTEXT NOT NULL,
            `section5_column1_en` MEDIUMTEXT,
            `section5_column2_title_pt`VARCHAR (200) NOT NULL,
            `section5_column2_title_en`VARCHAR (200) NOT NULL,
            `section5_column2_thumbnail` TEXT NOT NULL,
            `section5_column2_pt` MEDIUMTEXT NOT NULL,
            `section5_column2_en` MEDIUMTEXT
);

INSERT INTO `worldAssociation`
(
            banner,
            logoWAGGGS,
            section1_pt,
            section1_en,
            section2_pt,
            section2_en,
            section3_column1_title_pt,
            section3_column1_title_en,
            section3_column1_text1_pt,
            section3_column1_text1_en,
            section3_column1_text2_pt,
            section3_column1_text2_en,
            section3_column1_text3_pt,
            section3_column1_text3_en,
            section3_column1_text4_pt,
            section3_column1_text4_en,
            section3_column1_text5_pt,
            section3_column1_text5_en,
            section3_column2_title_pt,
            section3_column2_title_en,
            section3_column2_text1_pt,
            section3_column2_text1_en,
            section3_column2_text2_pt,
            section3_column2_text2_en,
            section3_column2_text3_pt,
            section3_column2_text3_en,
            section3_column2_text4_pt,
            section3_column2_text4_en,
            section3_column2_text5_pt,
            section3_column2_text5_en,
            section4_title_pt,
            section4_title_en,
            section4_pt,
            section4_en,
            section4_thumbnail,
            section5_column1_title_pt,
            section5_column1_title_en,
            section5_column1_thumbnail,
            section5_column1_pt,
            section5_column1_en,
            section5_column2_title_pt,
            section5_column2_title_en,
            section5_column2_thumbnail,
            section5_column2_pt,
            section5_column2_en
) VALUES
(
  'https://drive.google.com/uc?export=view&id=1uLtQjk-jYvW0HfsTOektMreW8TtY9c0W',
  'https://drive.google.com/uc?export=view&id=1OwO57k5mBuOwu-O032P4vdhPAzatgYgr',
'<p>A WAGGGS – World Association of Girl Guides and Girl Scouts – é a maior organização mundial de raparigas e jovens mulheres voluntárias, da qual a AGP é membro. Atualmente, integra cerca de 10 milhões de jovens espalhadas por 150 países, estando dividida em cinco Regiões: África, Árabe, Ásia-Pacífico, Hemisfério Ocidental e Europa.</p>',
'section1_en',
'10 milhões de raparigas, 1 voz.',
'section2_en',
'Objetivos da WAGGGS:',
'section3_column1_title_en',
'Capacitar as raparigas e jovens mulheres para promover mudanças positivas nas suas vidas, nas suas comunidades e países',
'section3_column1_text1_en',
'Ser a voz das raparigas no mundo ',
'section3_column1_text2_en',
'Construir um mundo melhor',
'section3_column1_text3_en',
'',
'',
'',
'',
'Um papel decisivo no desenvolvimento comunitário:',
'section3_column2_title_en',
'Participação nos programas promovidos pela ONU',
'section3_column2_text1_en',
'Criação de projetos de educação',
'section3_column2_text2_en',
'Desenvolvimento de liderança',
'section3_column2_text3_en',
'Trabalho de advocacia',
'section3_column2_text4_en',
'Ação comunitária',
'section3_column2_text5_en',
'Centros Mundiais',
'World Centers',
'<p>Os cinco Centros Mundiais da WAGGGS oferecem a oportunidade de uma aventura internacional. Aqui, as Guias podem encontrar-se, experienciar um mundo de possibilidades em atividades e conhecer outras Guias de outros países, embarcando numa jornada de descoberta pessoal através da dimensão internacional.</p><ul><li>Sangam, Índia</li><li>Notre Chalet, Suíça</li><li>Pax Lodge, Reino Unido</li><li>Nuetra Cabaña, México</li><li>Kusafiri, África</li></ul>',
'section4_en',
'https://drive.google.com/uc?export=view&id=1eXLBcoNQdqSJWM7eEPUDicTq0gGRFEeH',
'Dia Mundial do Pensamento',
'section5_column1_title_en',
'https://drive.google.com/uc?export=view&id=1hYQo4MJGsOh4N9dnGE_33NDbusPoacEu',
'<p>“O 22 de fevereiro é um dia de festa, em que fazemos em pensamento a volta ao mundo.” Baden-Powell&nbsp;</p><p>O dia 22 de fevereiro é um dia muito especial para todas as Guias do mundo. Intitulado ‘Dia Mundial do Pensamento’, é o dia em que todas as Guias se unem em pensamento, entre os 150 países onde está presente o Guidismo, para celebrar a amizade e os ideais que caracterizam o Movimento, assim como para comemorar o aniversário do fundador das Guias, Lord Baden-Powell (em 1857), e da Chefe Mundial, Lady Olave Baden-Powell (1889).</p><p>Esta data, comemorada desde 1926 é ainda um momento para alertar para temas da atualidade, especialmente os que afetam as raparigas e jovens mulheres e para angariar fundos de apoio à ação da Associação Mundial das Guias (WAGGGS) em todo o mundo, em particular para projetos de capacitação das raparigas.</p><p>É uma oportunidade para cada Guia celebrar a data e ser uma em 10 milhões, ser inspirada pela história e o impacto do Guidismo, conectar-se com as Guias pelo mundo, criar ações e despertar os outros para questões importantes e fazer a diferença, angariando fundos para projetos através do Tostão Mundial.Mais informações sobre o Dia Mundial do Pensamento aqui.</p>',
'section5_column1_en',
'Tostão Mundial',
'section5_column2_title_en',
'https://drive.google.com/uc?export=view&id=1ePZzW_KKQSQM4q6dKdTItU4ua-jIi55D',
'<p>“O 22 de Fevereiro é um dia em que se dá e se partilha.” Baden-Powell</p><p>Em 1932, na 7ª Conferência Mundial na Polónia surgiu a ideia de cada Guia doar uma contribuição, para além do seu pensamento, como demonstração de amizade e apreço. Com o mote "A penny for your thoughts" (Um tostão pelos teus pensamentos) foi assim criado o Fundo do Dia do Pensamento, também designado por Tostão Mundial, com o objetivo de apoiar a promoção do Guidismo no mundo.</p><p>Durante os primeiros anos, as quantias angariadas foram utilizadas nos países que sofriam os efeitos da Segunda Guerra Mundial e mais tarde para restabelecer as Associações Nacionais de Guias nos países devastados pela Guerra.</p><p>Desde essa altura, o Fundo do Dia do Pensamento tem tornado possível a expansão do Movimento pelo mundo e tem sido ocasião para todas as Guias ajudarem outras Guias.</p>',
'section5_column2_en'
);



-- DROP TABLE `historia_guidismo`;

CREATE TABLE `historia_guidismo` (
  `image` TEXT NOT NULL,
  `pt_title_text1` VARCHAR(500) NOT NULL,
  `en_title_text1` VARCHAR(500) NOT NULL,
  `pt_text_text1` LONGTEXT NOT NULL,
  `en_text_text1` LONGTEXT NOT NULL,
  `pt_timeline_title` VARCHAR(500) NOT NULL,
  `en_timeline_title` VARCHAR(500) NOT NULL,
  `pt_title_text2` VARCHAR(500) NOT NULL,
  `en_title_text2` VARCHAR(500) NOT NULL,
  `pt_text_text2` LONGTEXT NOT NULL,
  `en_text_text2` LONGTEXT NOT NULL
);

INSERT INTO `historia_guidismo`(image, pt_title_text1, en_title_text1, pt_text_text1, en_text_text1, pt_timeline_title, en_timeline_title, pt_title_text2, en_title_text2, pt_text_text2, en_text_text2) VALUES 
('https://drive.google.com/file/d/17OFxXvWjMSd_IZDHDjUEYNkMUReRATz9', 'Como tudo começou ?', 'How it all began ?', 'O Movimento Guidista nasceu em Inglaterra no ano de 1910, dois anos após Lord Robert Baden-Powell (BP) ter formado a Associação de Escuteiros, para rapazes. A sua origem deveu-se à iniciativa de um grupo de raparigas que, em 1909, mostrando vontade em participar nas atividades escutistas, se fardou como os rapazes e apareceu de surpresa no Rally do Palácio de Cristal de Londres, organizado pelos Escuteiros, proclamando-se raparigas escuteiras. Baden-Powell, admirado com a sua presença, mas animado com a ideia, decidiu criar, com a ajuda da sua irmã Agnes, um movimento destinado a raparigas, ao qual deu o nome de GUIAS. Para tal, inspirou-se no famoso corpo de soldados das montanhas da Índia, conhecido por aquele nome, que se distinguia pela sua coragem e capacidade de ultrapassar obstáculos e pela sua disponibilidade em ajudar os outros. Mais tarde, foi a sua mulher, Olave Baden-Powell, quem desenvolveu o espírito do Movimento Guidista e o promoveu por todo o mundo. A sua enorme dedicação foi reconhecida em 1918 com a entrega da mais alta condecoração do Guidismo inglês, o “Gold Fish”, e com a eleição, em 1930, para o cargo de Chefe Mundial das Guias – distinções que, até hoje, se atribuíram somente a ela.','The Guidista Movement was born in England in 1910, two years after Lord Robert Baden-Powell (BP) formed the Boy Scout Association. Its origin was due to the initiative of a group of girls who, in 1909, showing a willingness to participate in scouting activities, dressed like the boys and appeared by surprise at the London Crystal Palace Rally, organized by the Scouts, proclaiming themselves girls scouts. Baden-Powell, admired by his presence, but excited by the idea, decided to create, with the help of his sister Agnes, a movement aimed at girls, which he named GUIDES. in the famous corps of soldiers from the mountains of India, known by that name, which was distinguished by its courage and ability to overcome obstacles and by its willingness to help others. Later, it was his wife , Olave Baden-Powell, who developed the spirit of the Guidist Movement and promoted it through Worldwide. His enormous dedication was recognized in 1918 with the delivery of the highest decoration of English Guidism, the “Gold Fish”, and with the election, in 1930, to the position of World Chief of Guides - distinctions that, until today, have been attributed only to her.', 'Fundador e Chefe Mundial Robert e Olave Baden-Powell', '
Founder and World Chief Robert and Olave Baden-Powell', 'Guias porquê?', 'Why Guias?', 'Na Fronteira Noroeste da Índia existe um famoso Corpo de soldados conhecido como os Guias, e o seu dever é estar sempre pronto para, a qualquer momento, repelir os ataques das tribos hostis através da fronteira e impedir que estas desçam para as planícies pacíficas da Índia. Este corpo de homens tem de estar preparado para todo o tipo de combates. Às vezes a pé, às vezes a cavalo, às vezes nas montanhas, muitas vezes com trabalho pioneiro, atravessando rios e fazendo pontes e assim por diante. Mas têm de ser homens hábeis, corajosos e resistentes, prontos para combater a qualquer momento, inverno ou verão, ou para se sacrificarem se necessário, para que a paz possa reinar em toda a Índia(…). Por isso, são verdadeiros artesãos em todos os sentidos da palavra e verdadeiros patriotas. Quando se fala em Guias na Europa, pensa-se nos homens que são alpinistas na Suíça e noutros locais montanhosos, que podem guiar as pessoas pelas partes mais difíceis, pela sua bravura e habilidade em localizar obstáculos, pela ajuda àqueles que os acompanham e pela sua força corporal (…). Se lhes dissessem para percorrer a mesma quantidade de quilómetros numa planície aberta, não seria nada para eles, não seria interessante e não seriam capazes de mostrar aquelas grandes qualidades (…). Para eles não tem interesse andar por caminhos fáceis, o grande entusiasmo da sua vida é enfrentar dificuldades e perigos e impossibilidades aparentes e, no final, ter uma oportunidade de atingir o cume da montanha que quiseram alcançar. Bem, penso que é o caso da maioria das raparigas de hoje em dia. Elas não querem sentar-se e levar uma vida ociosa, ter tudo feito por elas, ou ter uma experiência muito fácil. Não querem apenas atravessar a planície, preferem mostrar-se úteis, capazes de ajudar os outros e prontas, se necessário, a sacrificar-se pelos outros, tal como os Guias da Fronteira Noroeste. Também querem enfrentar elas próprias trabalhos difíceis na sua vida, enfrentar montanhas, dificuldades e perigos, (…) tendo-se preparado para serem hábeis e corajosas; e também gostariam de ajudar outras pessoas a ultrapassar as suas dificuldades.Quando atingem o sucesso depois de enfrentarem as dificuldades, sentem-se realmente felizes e triunfantes. É para elas uma grande satisfação ter tido êxito e ter feito com que outras pessoas também o tivessem. É isso que as raparigas Guias querem fazer, tal como os Guias montanhistas fazem entre as montanhas. Também uma mulher que consegue fazer coisas é procurada por outros, tanto homens como mulheres, estando sempre prontos a seguir os seus conselhos e o seu exemplo, tornando-se também ela aqui uma Guia. E mais tarde, se ela tiver filhos, ou se ela se tornar uma professora de crianças, ela pode ser realmente uma boa Guia para eles. Se alguém fizesse uma caricatura de uma Guia desenharia-a assim: “Turn to right – keep straight on” (Virar para o lado certo – continuar sempre em frente). E por estas razões, foi-lhes atribuído o nome de Guias. Através de jogos e atividades que as Guias realizam, aprendem diferentes coisas que as ajudarão a seguir em frente na vida, e mostrar também aos outros o caminho a seguir. Assim, acampar (…), saber aplicar os primeiros socorros, cozinhar em campo e todas as atividades que as Guias praticam vão ser-lhes úteis depois, tornando-as mulheres engenhosas, habilidosas e úteis para os outros, fortes física e mentalmente, assim como faz delas um alegre grupo de camaradas.” in “Girl Guiding: The Official Handbook” de Robert Baden-Powell','Na Fronteira Noroeste da Índia existe um famoso Corpo de soldados conhecido como os Guias, e o seu dever é estar sempre pronto para, a qualquer momento, repelir os ataques das tribos hostis através da fronteira e impedir que estas desçam para as planícies pacíficas da Índia. Este corpo de homens tem de estar preparado para todo o tipo de combates. Às vezes a pé, às vezes a cavalo, às vezes nas montanhas, muitas vezes com trabalho pioneiro, atravessando rios e fazendo pontes e assim por diante. Mas têm de ser homens hábeis, corajosos e resistentes, prontos para combater a qualquer momento, inverno ou verão, ou para se sacrificarem se necessário, para que a paz possa reinar em toda a Índia(…). Por isso, são verdadeiros artesãos em todos os sentidos da palavra e verdadeiros patriotas. Quando se fala em Guias na Europa, pensa-se nos homens que são alpinistas na Suíça e noutros locais montanhosos, que podem guiar as pessoas pelas partes mais difíceis, pela sua bravura e habilidade em localizar obstáculos, pela ajuda àqueles que os acompanham e pela sua força corporal (…). Se lhes dissessem para percorrer a mesma quantidade de quilómetros numa planície aberta, não seria nada para eles, não seria interessante e não seriam capazes de mostrar aquelas grandes qualidades (…). Para eles não tem interesse andar por caminhos fáceis, o grande entusiasmo da sua vida é enfrentar dificuldades e perigos e impossibilidades aparentes e, no final, ter uma oportunidade de atingir o cume da montanha que quiseram alcançar. Bem, penso que é o caso da maioria das raparigas de hoje em dia. Elas não querem sentar-se e levar uma vida ociosa, ter tudo feito por elas, ou ter uma experiência muito fácil. Não querem apenas atravessar a planície, preferem mostrar-se úteis, capazes de ajudar os outros e prontas, se necessário, a sacrificar-se pelos outros, tal como os Guias da Fronteira Noroeste. Também querem enfrentar elas próprias trabalhos difíceis na sua vida, enfrentar montanhas, dificuldades e perigos, (…) tendo-se preparado para serem hábeis e corajosas; e também gostariam de ajudar outras pessoas a ultrapassar as suas dificuldades.Quando atingem o sucesso depois de enfrentarem as dificuldades, sentem-se realmente felizes e triunfantes. É para elas uma grande satisfação ter tido êxito e ter feito com que outras pessoas também o tivessem. É isso que as raparigas Guias querem fazer, tal como os Guias montanhistas fazem entre as montanhas. Também uma mulher que consegue fazer coisas é procurada por outros, tanto homens como mulheres, estando sempre prontos a seguir os seus conselhos e o seu exemplo, tornando-se também ela aqui uma Guia. E mais tarde, se ela tiver filhos, ou se ela se tornar uma professora de crianças, ela pode ser realmente uma boa Guia para eles. Se alguém fizesse uma caricatura de uma Guia desenharia-a assim: “Turn to right – keep straight on” (Virar para o lado certo – continuar sempre em frente). E por estas razões, foi-lhes atribuído o nome de Guias. Através de jogos e atividades que as Guias realizam, aprendem diferentes coisas que as ajudarão a seguir em frente na vida, e mostrar também aos outros o caminho a seguir. Assim, acampar (…), saber aplicar os primeiros socorros, cozinhar em campo e todas as atividades que as Guias praticam vão ser-lhes úteis depois, tornando-as mulheres engenhosas, habilidosas e úteis para os outros, fortes física e mentalmente, assim como faz delas um alegre grupo de camaradas.” in “Girl Guiding: The Official Handbook” de Robert Baden-Powell');

-- DROP TABLE `historia_guidismo_timeline_one`;

CREATE TABLE `historia_guidismo_timeline_one` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `position` INTEGER NOT NULL, 
  `image` TEXT NOT NULL,
  `pt_text` LONGTEXT NOT NULL,
  `en_text` LONGTEXT NOT NULL,
  `publish` BOOL NOT NULL,
   PRIMARY KEY(`id`)
);

INSERT INTO `historia_guidismo_timeline_one`(position, image, pt_text, en_text, publish) VALUES 
(1,'https://drive.google.com/uc?export=view&id=1YcTS74sa8pHmliox9R5S87agRl3R3KmX','Carinhosamente chamado de BP, Robert Stephenson Smith Baden-Powell nasceu em 22 de fevereio de 1857, em Londres.', 'Carinhosamente chamado de BP, Robert Stephenson Smith Baden-Powell nasceu em 22 de fevereio de 1857, em Londres.', 1),
(2,'https://drive.google.com/uc?export=view&id=1q7jk6CR81ThVuLDhKgo1K760oJdp6n41','O seu pai morreu quando ele tinha apenas 3 anos. A mãe estimulou desde sempre o gosto pela natureza e pela arte. O mais novo de sete irmãos (apenas uma rapariga, a Agnes) viveu muitas aventuras em terra e no mar, aprendendo a enfrentar os ostáculos com coragem.', 'O seu pai morreu quando ele tinha apenas 3 anos. A mãe estimulou desde sempre o gosto pela natureza e pela arte. O mais novo de sete irmãos (apenas uma rapariga, a Agnes) viveu muitas aventuras em terra e no mar, aprendendo a enfrentar os ostáculos com coragem.', 1),
(3,'https://drive.google.com/uc?export=view&id=142hMJulswnQFuuMywzsZxZ3cW5vECcu1','Não foi um aluno brilhante, mas conseguiu uma bolsa para uma boa escola, Charterhouse, onde o Reitor incentivava os alunos a participarem em peças para desenvolver diversas capacidades: falar bem e com clareza, sem embaraço; modificar o seu aspecto e voz de acordo com as situações; esquecerem-se de si próprios, tentando parecer-se com as personagens que intrepretavam; e trabalhar em conjunto, como um grupo, para o sucesso de uma peça. Ainda incursões nos bosques da escola e esboços de animais e pessoas era aividades regulares de Baden-Powell.', 'Não foi um aluno brilhante, mas conseguiu uma bolsa para uma boa escola, Charterhouse, onde o Reitor incentivava os alunos a participarem em peças para desenvolver diversas capacidades: falar bem e com clareza, sem embaraço; modificar o seu aspecto e voz de acordo com as situações; esquecerem-se de si próprios, tentando parecer-se com as personagens que intrepretavam; e trabalhar em conjunto, como um grupo, para o sucesso de uma peça. Ainda incursões nos bosques da escola e esboços de animais e pessoas era aividades regulares de Baden-Powell.', 1),
(4,'https://drive.google.com/uc?export=view&id=1OcsdMZ0OJFw85DNu1AWzuRla4lueb_w6','Terminou o liceu, concorreu ao Exército e foi aceito como oficial para o 13° Hussardos, paratindo para a Índia, em 1876.', 'Terminou o liceu, concorreu ao Exército e foi aceito como oficial para o 13° Hussardos, paratindo para a Índia, em 1876.', 1),
(5,'https://drive.google.com/uc?export=view&id=1jOh9nNVAQpwSaPrZA-iaNyzCm8zZj3Cd','Durante muitos anos, BP, oficial consciencioso prosseguiu por quase todas as partes onde impera a coroa britânica, tendo uma brilhante carreira que fez dele, aos 43 anos, o mais jovem oficial-General do Exército Britânico.', 'Durante muitos anos, BP, oficial consciencioso prosseguiu por quase todas as partes onde impera a coroa britânica, tendo uma brilhante carreira que fez dele, aos 43 anos, o mais jovem oficial-General do Exército Britânico.', 1),
(6,'https://drive.google.com/uc?export=view&id=1yOIKy-JaCXh4VCbJz_6cr0gHz0V00JVy','Entre os seus feitos militares mais notáveis figuram as campanhas contra os Ashantis e os Matabélés, tribos africanas que se tinham revoltado, dirigidas com um extraordinário engenho e, ainda, o cerco de Mafeking, na África do Sul, onde, durante 217 dias, em inferioridade numérica e em más condições, se defendeu dos Boers, imigrantes de origem holandesa em rebelião contra o governo central.', 'Entre os seus feitos militares mais notáveis figuram as campanhas contra os Ashantis e os Matabélés, tribos africanas que se tinham revoltado, dirigidas com um extraordinário engenho e, ainda, o cerco de Mafeking, na África do Sul, onde, durante 217 dias, em inferioridade numérica e em más condições, se defendeu dos Boers, imigrantes de origem holandesa em rebelião contra o governo central.', 1),
(7,'https://drive.google.com/uc?export=view&id=1xp3wMyfjVtgTIrYP-P0dDgxnjtKSLGjo','Desenvolveu técnicas de observação, reconhecimento de pistas e trilhos, daí a palavra SCOUT(bateador), e escrevia artigos para revistas sobre táticas militares.', 'Desenvolveu técnicas de observação, reconhecimento de pistas e trilhos, daí a palavra SCOUT(bateador), e escrevia artigos para revistas sobre táticas militares.', 1),
(8,'https://drive.google.com/uc?export=view&id=1M8xzk4mRKu3DWZbjYjc8Y4VRh5UYM6H-','Em 1907, realizou na ilha de Brownsea um acampamento com 24 rapazes, para experimentar o seu método, que serviu de base ao livro "Escutismo para Rapazes". Não estava ainda a obra completa e já se começavam a formar grupos de Escuteiros. Foi um êxito! Em menos de dois anos, sem apoio direto, já havia na Inglaterra cerca de 100.000 Escuteiros com cerca de 7.000 chefes.', 'Em 1907, realizou na ilha de Brownsea um acampamento com 24 rapazes, para experimentar o seu método, que serviu de base ao livro "Escutismo para Rapazes". Não estava ainda a obra completa e já se começavam a formar grupos de Escuteiros. Foi um êxito! Em menos de dois anos, sem apoio direto, já havia na Inglaterra cerca de 100.000 Escuteiros com cerca de 7.000 chefes.', 1),
(9,'https://drive.google.com/uc?export=view&id=1nKpmLpyQRnK3fh7d9grW82-lfjuFD2eG','Em 1910, o Rei Eduardo VII propunha a Baden-Powell retirar-se do Exército, para se dedicar exclusivamente ao Movimento que criara e de que continuava a ser o principal mentor. Entretano, o Escutismo galgava froneiras, pelo conhecimento dos magníficos resultados obtidos na Grâ-Bretanha e Baden-Powell foi nomeado Chefe do Escutismo Mundial, cargo que sempenhou até à sua morte, em 1941.', 'Em 1910, o Rei Eduardo VII propunha a Baden-Powell retirar-se do Exército, para se dedicar exclusivamente ao Movimento que criara e de que continuava a ser o principal mentor. Entretano, o Escutismo galgava froneiras, pelo conhecimento dos magníficos resultados obtidos na Grâ-Bretanha e Baden-Powell foi nomeado Chefe do Escutismo Mundial, cargo que sempenhou até à sua morte, em 1941.', 1),
(10,'https://drive.google.com/uc?export=view&id=17Adeg2ei40sYtc37PtzXLx_oRiNmyiiX','Em 1937, no Jamboree (acampamento mundial) de Vogelenzang, na Holanda, disse o seu "adeus" aos Escudeiros de todo mundo. Retirou-se para a sua casa no Quênia, em África, que ele tão bem conhecia, morrendo a 8 de janeiro de 1941.', 'Em 1937, no Jamboree (acampamento mundial) de Vogelenzang, na Holanda, disse o seu "adeus" aos Escudeiros de todo mundo. Retirou-se para a sua casa no Quênia, em África, que ele tão bem conhecia, morrendo a 8 de janeiro de 1941.', 1);

-- DROP TABLE `historia_guidismo_timeline_two`;

CREATE TABLE `historia_guidismo_timeline_two` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `position` INTEGER NOT NULL, 
  `image` TEXT NOT NULL,
  `pt_text` LONGTEXT NOT NULL,
  `en_text` LONGTEXT NOT NULL,
  `publish` BOOL NOT NULL,
   PRIMARY KEY(`id`)
);

INSERT INTO `historia_guidismo_timeline_two`(position, image, pt_text, en_text, publish) VALUES 
(1,'https://drive.google.com/uc?export=view&id=1uMP8L5yZI6E-vy7DICJ8IrAB23UlrniV', 'Olave St. Clair Soames nasceu em 22 de fevereiro de 1889, em Dorsert-Inglaterra. A sua infância foi quase toda vivida no campo, onde adquriu um grande amor pelos animais.
','Olave St. Clair Soames nasceu em 22 de fevereiro de 1889, em Dorsert-Inglaterra. A sua infância foi quase toda vivida no campo, onde adquriu um grande amor pelos animais.
', 1),
(2,'https://drive.google.com/uc?export=view&id=1IqzDd889oFr1AhE5YbaS8TfZxUNsbPQF', 'No ano de 1912, o pai de Olave Mr. Harold Soames, levou-a a fazer um cruzeiro pelas índias Ocidentais. Durante a viagem, veio a conhecer Robert Baden-Powell, que naquela época já era general e tinha 55 anos. Olave conava então 23 anos de idade.', 'No ano de 1912, o pai de Olave Mr. Harold Soames, levou-a a fazer um cruzeiro pelas índias Ocidentais. Durante a viagem, veio a conhecer Robert Baden-Powell, que naquela época já era general e tinha 55 anos. Olave conava então 23 anos de idade.', 1),
(3,'https://drive.google.com/uc?export=view&id=150PwYE2R6K77PJA84-Wzar9LfKCt4k5p', 'Quando deixaram a Jamaica, Baden-Powell e Olave estavam noivos e em outubro do mesmo ano casaram-se, tendo ido em viagem até África. Desde o casamento, olave começou a interessar-se pelas atividades do marido e em 1916 passou a fazer parte do Guidismo, o qual havia sido fundado em 1912 por Baden-Powell com a colaboração da sua irmã Agnes. No ano de 1916, foi indicada para ocupar o cargo de Comissária Regional de Sussex, onde, devido à sua energia e habilidade, consegiu organizar uma região modelo, a qual serviu de exemplo às demais regiões inglesas.', 'Quando deixaram a Jamaica, Baden-Powell e Olave estavam noivos e em outubro do mesmo ano casaram-se, tendo ido em viagem até África. Desde o casamento, olave começou a interessar-se pelas atividades do marido e em 1916 passou a fazer parte do Guidismo, o qual havia sido fundado em 1912 por Baden-Powell com a colaboração da sua irmã Agnes. No ano de 1916, foi indicada para ocupar o cargo de Comissária Regional de Sussex, onde, devido à sua energia e habilidade, consegiu organizar uma região modelo, a qual serviu de exemplo às demais regiões inglesas.', 1),
(4,'https://drive.google.com/uc?export=view&id=1sYBUAUkY5c3-PJiDHsA4eeIpdi2EVIoA', 'Logo a seguir, em 1918, Lady Baden-Powell foi agraciada com o título de Guia-Chefe da Grã-Bretanha, que ela preferiu ao de Comissária-Chefe, que lhe havia sido outorgado em 1916. Também em 1918, Olave recebeu o Gold Fish, medalha que só a ela foi concedida, pois é mais importante que o próprio Silver Fish.', 'Logo a seguir, em 1918, Lady Baden-Powell foi agraciada com o título de Guia-Chefe da Grã-Bretanha, que ela preferiu ao de Comissária-Chefe, que lhe havia sido outorgado em 1916. Também em 1918, Olave recebeu o Gold Fish, medalha que só a ela foi concedida, pois é mais importante que o próprio Silver Fish.', 1),
(5,'https://drive.google.com/uc?export=view&id=1IukBFooTXOoApXX10gZJTFPh6XK4i1Nt', 'Na Conferência Mundial de 1930, promovida pela recém-criada Associação Mundial das Guias, realizada na Inglaterra, delegadas de 28 nações elegeram-na por unanimidade, Chefe Mundial das Guias, título pessoal que lhe foi conferido pelo muito que fizera em prol do Guidismo e que não será atribuído a mais ninguém.', 'Na Conferência Mundial de 1930, promovida pela recém-criada Associação Mundial das Guias, realizada na Inglaterra, delegadas de 28 nações elegeram-na por unanimidade, Chefe Mundial das Guias, título pessoal que lhe foi conferido pelo muito que fizera em prol do Guidismo e que não será atribuído a mais ninguém.', 1),
(6,'https://drive.google.com/uc?export=view&id=1pElAjCi627uevC6R72Fw6dbzgb8Q1pns', 'O ano de 1930 foi escolhido para a celebração da maioridade do Movimento. Durante as comemorações, Sua Majestade, o Rei Jorge V conferiu-lhe o honroso título de "Dame Grand Cross of the British Empire". Mais tarde, em sinal de gratidão pelos serviços que o seu marido prestara à pátria, o Rei Jorge VI deu-lhe o direito de morar, durante toda a sua vida, num apartamento de Hampton Court Palace, antiga residência dos monarcas britânicos.', 'O ano de 1930 foi escolhido para a celebração da maioridade do Movimento. Durante as comemorações, Sua Majestade, o Rei Jorge V conferiu-lhe o honroso título de "Dame Grand Cross of the British Empire". Mais tarde, em sinal de gratidão pelos serviços que o seu marido prestara à pátria, o Rei Jorge VI deu-lhe o direito de morar, durante toda a sua vida, num apartamento de Hampton Court Palace, antiga residência dos monarcas britânicos.', 1),
(7,'https://drive.google.com/uc?export=view&id=1CjoNS2rzAuNAQJuoE9DHJ6Vp2OxTmG7R', 'Em 1972, já não lhe foi permitido, por razões de saúde, participar da 21º COnferência Mundial, no Canadá. Lady Baden-Powell faleceu em 25 de junho de 1977, em Hampton Court, na Inglaterra, e foi supultada em Nyeri, no Quênia, onde repousa junto de BP.
Saber mais sobre a Lady Olave aqui.', 'Em 1972, já não lhe foi permitido, por razões de saúde, participar da 21º COnferência Mundial, no Canadá. Lady Baden-Powell faleceu em 25 de junho de 1977, em Hampton Court, na Inglaterra, e foi supultada em Nyeri, no Quênia, onde repousa junto de BP.
Saber mais sobre a Lady Olave aqui.', 1);

-- DROP TABLE `ligacoes_uteis`;

CREATE TABLE `ligacoes_uteis` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `link` TEXT NOT NULL,
  `pt_text` VARCHAR(200) NOT NULL,
  `en_text` VARCHAR(200),
   PRIMARY KEY(`id`)
);

INSERT INTO `ligacoes_uteis`(link, pt_text, en_text) VALUES
('https://www.wagggs.org/en/', 'Associação Mundial das Guias (WAGGGS)', 'en_text'),
('https://www.wagggs.org/en/our-world/europe-region/', 'Associação Mundial das Guias – Região Europa', 'en_text'),
('https://www.wagggs.org/en/our-world/world-centres/', 'Centros Mundiais', 'en_text' ),
('https://myvirtualsongbook.wordpress.com/', 'Canções Guidistas 1 (em inglês)', 'en_text'),
('https://www.cleanuptheworld.org/', 'Clean up the World', 'en_text' ),
('https://www.un.org/sustainabledevelopment/', 'Objetivos de Desenvolvimento Sustentável', 'en_text' ),
('https://apambiente.pt/', 'ICNF - Instituto de Conservação da Natureza e das Florestas', 'en_text'),
('https://www.lpn.pt/', 'Liga para a Proteção da Natureza', 'en_text'),
('https://www.quercus.pt/', 'Quercus - Associação Nacional de Conservação da Natureza', 'en_text' ),
('https://www.un.org/en/', 'Organização das Nações Unidas', 'en_text' ),
('https://www.unicef.pt/', 'Unicef', 'en_text' ),
('https://ipdj.gov.pt/', 'Instituto Português do Desporto e Juventude', 'en_text' ),
('https://ipdj.gov.pt/', 'Instituto Português do Desporto e Juventude', 'en_text' ),
('https://www.igeoe.pt/', 'Instituto Geográfico do Exército', 'en_text' ),
('https://www.sns.gov.pt/', 'Serviço Nacional de Saúde', 'en_text'),
('https://www.dgs.pt/', 'Direcção Geral da Saúde', 'en_text' );


CREATE TABLE `ligacoes_uteis_Header`(
  `header_pt` TEXT,
  `header_en` TEXT
);

INSERT INTO ligacoes_uteis_Header (header_pt, header_en) VALUES
('Nesta secção, dedicada a ti, Guia, poderás encontrar vários recursos úteis.','header_en');

CREATE TABLE `jornal_Header`(
  `header1_pt` TEXT,
  `header1_en` TEXT,
  `header2_pt` TEXT,
  `header2_en` TEXT
);

INSERT INTO jornal_Header (header1_pt, header1_en, header2_pt, header2_en) VALUES
('Publicação semestral da AGP que aborda temas da atualidade e divulga as atividades da Associação.',
'header1_en',
'Edições disponíveis para download. Edição mais recente à venda na Companhia mais próxima.',
'header2_en'
);

CREATE TABLE `store_header`(
  `header_pt` TEXT,
  `header_en` TEXT
);

INSERT INTO store_header (header_pt, header_en) VALUES
(
  'Catálogo dos produtos à venda no Depósito de Material e Fardamento. Consultar horários da Loja aqui.',
  'Catálogo dos produtos à venda no Depósito de Material e Fardamento. Check the store schedule here.'
);

