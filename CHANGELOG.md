# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [1.1.2](https://github.com/ecomplus/application-starter/compare/v1.1.1...v1.1.2) (2024-10-31)


### Bug Fixes

* **create-transaction:** add test to pix ([e984ab2](https://github.com/ecomplus/application-starter/commit/e984ab2c73a240654875f6db3f663f38a080c23d))
* **create-transaction:** add url in payment_link if banking billet ([55dfc65](https://github.com/ecomplus/application-starter/commit/55dfc659adafd0840514ce1e69ba4dd0768253b6))
* **create-transaction:** remove test to pix and billet ([b28dc4e](https://github.com/ecomplus/application-starter/commit/b28dc4e33c290a72d6d05b5a6ef92c98e2e1f70a))
* **create-transaction:** remove unnecessary comments ([cf930b0](https://github.com/ecomplus/application-starter/commit/cf930b0fc653ca9979050a8049115141854bc089))
* **create-transaction:** set pending status in pix and billet banking ([ffed6e1](https://github.com/ecomplus/application-starter/commit/ffed6e11e7733f069d60ba88e1e808b4cda6f88b))
* **create-transaction:** set timeout 28000ms ([91f9d8d](https://github.com/ecomplus/application-starter/commit/91f9d8df5b70308d94eac4384ab32947f5ef87d9))
* **create-transaction:** set voided status in case of error when creating pix in intermediator ([fbe3fab](https://github.com/ecomplus/application-starter/commit/fbe3fabaa2044af512d96b9cbed2636bce8657b5))
* **create-transaction:** triggers error if braspag api does not complete transaction, add timeout ([6168c91](https://github.com/ecomplus/application-starter/commit/6168c914114308d911ddbaaf8604149f8233ae14))
* **list-payments:** fix amount ([e216bbb](https://github.com/ecomplus/application-starter/commit/e216bbb9a71cfd270536584dfcc698d572de2164))
* **list-payments:** rename field fingerprint ([0b784bb](https://github.com/ecomplus/application-starter/commit/0b784bb575d2c99da84134e1edf2f1bb8a113f26))
* minor typo fixes on admin settings ([5a3485a](https://github.com/ecomplus/application-starter/commit/5a3485aa0254a5fce68e469e78938946f2b5e141))
* onload experession code style and minor fixes ([a6d7445](https://github.com/ecomplus/application-starter/commit/a6d7445b685854e39ce7dc441ad693e14d6b3b10))
* onload expression without async/await for better browser support ([d839139](https://github.com/ecomplus/application-starter/commit/d839139090eb8b0eb604e75bd59909f76aaf532d))
* **onload-expression:** update script to capture fingerPrintId and improvements in code writing ([efce0ee](https://github.com/ecomplus/application-starter/commit/efce0ee6b2e6ded73198ff6df75672bff4499c98))
* **payload-transaction:** add birth_date customer ([6d0bf56](https://github.com/ecomplus/application-starter/commit/6d0bf56e034d0c9dd518c05b2eb230bd51c9dfed))
* **payload-transaction:** back birth_date in creditCard ([e1ba434](https://github.com/ecomplus/application-starter/commit/e1ba4349dcb5b3c57380e1ef08dd1006020ca5eb))
* **payload-transaction:** check birth_date ([f0cc29a](https://github.com/ecomplus/application-starter/commit/f0cc29a85e29be83780809a150172bdc110b97b1))
* **payload-transaction:** check birth_date ([9a7ef6c](https://github.com/ecomplus/application-starter/commit/9a7ef6cb062a88dc0f3a66b8d5394c1527490d74))
* properly send default discount option (if any) on list payments response ([bc570a8](https://github.com/ecomplus/application-starter/commit/bc570a8a11ff9b20532562a953e4b126788c62df))
* unset auto capture in favor of `CaptureOnLowRisk` on fraud sequence `AuthorizeFirst` ([9d3e88b](https://github.com/ecomplus/application-starter/commit/9d3e88bd449729a9a654d19144a687468fd5b274))
* **webhook-braspag:** check date notification ([08d29f6](https://github.com/ecomplus/application-starter/commit/08d29f677f1aa769b8f7a328975f8ede370c7f0e))
* **webhook-braspag:** check date notification ([d767c77](https://github.com/ecomplus/application-starter/commit/d767c77cd56163c9e147d1a8baae2080a9750133))
* **webhook-braspag:** remove debug and add comment ([4321df9](https://github.com/ecomplus/application-starter/commit/4321df9eb23ac94152021abaebbbd769444f8015))

### [1.1.1](https://github.com/ecomplus/application-starter/compare/v1.1.0...v1.1.1) (2024-06-26)


### Bug Fixes

* **antifraud:** add params to antifraud ([d0292eb](https://github.com/ecomplus/application-starter/commit/d0292eb6de7bcb52d8b77b6afeb08c687daedb84))
* **create-transaction:** add address in customer to bilet ([64a1ee3](https://github.com/ecomplus/application-starter/commit/64a1ee38ee9fe42589d60955b0883967575877d7))
* **create-transaction:** add fields to customer to credit card ([fe02213](https://github.com/ecomplus/application-starter/commit/fe0221324765e73c45ab19f94625e0b6eb83c649))
* **create-transaction:** add more fields to fraud analysis ([bc9af70](https://github.com/ecomplus/application-starter/commit/bc9af70d2aa17d306cb342ee1957a5aa73c046f7))
* **create-transaction:** remove provider if api cielo ([b243873](https://github.com/ecomplus/application-starter/commit/b243873f95a59d91a5b2745cc7611ea55debef36))
* **create-transaction:** remove sop if error ([9f99fc7](https://github.com/ecomplus/application-starter/commit/9f99fc700f2e64c00dc10fe32e4ae6e06f2642c5))
* **create-transaction:** test banking billet ([8941153](https://github.com/ecomplus/application-starter/commit/8941153b17fb069631b75111e5384a4280e65798))
* **installments:** add installments in response transaction ([0b35b0e](https://github.com/ecomplus/application-starter/commit/0b35b0ee9debb64c0aa3c86fb92f064b473d2af4))
* **list-payment payload:** validate pix and banking billet provider for api cielo ([756f097](https://github.com/ecomplus/application-starter/commit/756f097d448a4c7ff3f724aa5a44e4e6e78f1822))
* **list-payments:** add field fingerprint to antifraud ([d9f9865](https://github.com/ecomplus/application-starter/commit/d9f986573b724d7690ba750b793d9a2783fa0257))
* **list-payments:** add script cielo to gerate token card ([3d4db1a](https://github.com/ecomplus/application-starter/commit/3d4db1a531508f3cadfcb48652ce8782fa0d729b))
* **onload-expression:** add debug ([39c7653](https://github.com/ecomplus/application-starter/commit/39c7653da0400ae6f586b4ea5962332a29c6ec0d))
* **onload-expression:** test script add delay ([98255a5](https://github.com/ecomplus/application-starter/commit/98255a52e7fd5df9b1602b9c9543254027fab978))
* **onload-expression:** test script add delay ([d04db15](https://github.com/ecomplus/application-starter/commit/d04db1585b1375453d4e64cc573be3ca74e5f756))
* **onload-expression:** test script fingerprint ([db1192a](https://github.com/ecomplus/application-starter/commit/db1192ad0fe928dfd0d3d7a361fa72e5495c841b))
* **onload-expression:** test script fingerprint ([b008953](https://github.com/ecomplus/application-starter/commit/b0089534bd056e790473100299c5880d8be8bc30))
* **onload-expression:** test scripts ([7283cc3](https://github.com/ecomplus/application-starter/commit/7283cc3646d75a34623179b9d7b3c7d1449d98b6))
* **onload-expression:** test scripts ([ffd6734](https://github.com/ecomplus/application-starter/commit/ffd67346715a4a894f8a53e5c82200419e9104db))
* **onload-expression:** test scripts ([c9e7693](https://github.com/ecomplus/application-starter/commit/c9e76932ef4e643cfcd52ff4fc319644f26a5986))
* **onload-expression:** test scripts ([6aabd17](https://github.com/ecomplus/application-starter/commit/6aabd17a47db1d8c92d811e78a114f0dae56d56f))
* **onload-expression:** test scripts clearSales ([3f2a5df](https://github.com/ecomplus/application-starter/commit/3f2a5df1703f006f4fa8f8e2258db698ee2b1f12))
* **onload-expression:** test scripts clearSales ([e20db84](https://github.com/ecomplus/application-starter/commit/e20db84c6206f3ba00eb999b963379be2ad4e9bf))
* **onload-expression:** test scripts get value ([aa9e96b](https://github.com/ecomplus/application-starter/commit/aa9e96b60c0687b4a66c45855d52743aa7e13ed3))
* **onload-expression:** test scripts get value ([98cd73f](https://github.com/ecomplus/application-starter/commit/98cd73fb04b07cdd080f48f0e0a8d5af78106102))
* **onload-expression:** test scripts get value ([e3e1d8b](https://github.com/ecomplus/application-starter/commit/e3e1d8bb3f8189fe5cefcf7586c5503c1239b3fa))
* **onload-expression:** test scripts in body ([4590048](https://github.com/ecomplus/application-starter/commit/45900487641a38ba7d3ff9e76d1d553ee7f2fb61))
* **onload-expression:** test scripts in body ([4d5fe15](https://github.com/ecomplus/application-starter/commit/4d5fe15f7b0d53b86ea228adac9880e69c9b1f13))
* **onload-expression:** test scripts in head ([1361420](https://github.com/ecomplus/application-starter/commit/13614208deb63520524e2a341550f496d6cdfae2))
* **onload-expression:** test scripts in head ([8592ab9](https://github.com/ecomplus/application-starter/commit/8592ab915d0be833b10d93b7713cea6bcca2ac1b))
* **onload-expression:** test scripts in head ([e6656d2](https://github.com/ecomplus/application-starter/commit/e6656d288d52944261f5e65ee4a338b4f5c6b250))
* **onload-expression:** test scripts in head ([6244232](https://github.com/ecomplus/application-starter/commit/624423284f5e5758370515ee4dc6d8b82b912a1a))
* **package:** update files ([57e4a3e](https://github.com/ecomplus/application-starter/commit/57e4a3ed491aad4072903a19dee73f8d5ec17ebc))
* **payload-to-transaction:** add auto capture field ([2b46b86](https://github.com/ecomplus/application-starter/commit/2b46b869d22e06ec576ccf4f0a4f878a9b3ceb68))
* **payload-to-transaction:** use a provider for other payment methods using the Cielo API ([8710db0](https://github.com/ecomplus/application-starter/commit/8710db09174a0447176806f8328758b9e49a18c6))
* **payload-transaction:** add parse phone customer ([884070b](https://github.com/ecomplus/application-starter/commit/884070bf7726f50eb9b4a6deef40db2e082f9990))
* **payload-transaction:** add parse phone customer ([c4f61a4](https://github.com/ecomplus/application-starter/commit/c4f61a493ee5adc73160bbcd5d23699aa52e0206))
* **payload-transaction:** add phone customer ([782d3f3](https://github.com/ecomplus/application-starter/commit/782d3f35cbaa0967fe54b81edcec3c80b89f1542))
* **sop:** check credentials expires ([adc20db](https://github.com/ecomplus/application-starter/commit/adc20dbcacb80eeecfcaed86a4e4546e0a88286f))
* **sop:** reduce time expireIn ([5b2a810](https://github.com/ecomplus/application-starter/commit/5b2a8108c4d8a16e225d2077b3f6b74d9545a308))
* **sop:** remove doc afeter transaction card error ([0615b04](https://github.com/ecomplus/application-starter/commit/0615b048779b128e78f736ba71635ca248fd5cf7))
* **sop:** remove doc afeter transaction create ([b843c6a](https://github.com/ecomplus/application-starter/commit/b843c6add3a51ed942d281019d98cc5ef029b507))

## [1.1.0](https://github.com/ecomplus/application-starter/compare/v1.0.0...v1.1.0) (2023-11-03)


### Features

* **cielo:** add configuration field to use the Cielo API ([d8cfce7](https://github.com/ecomplus/application-starter/commit/d8cfce7c8d178e3255ca5b28985496285482ae8e))


### Bug Fixes

* **brapag:** check provider is simulated ([5942d51](https://github.com/ecomplus/application-starter/commit/5942d51c9debf9748c7062af8235bfb4fbfd0d75))
* **braspag:** fix request to get SOP token ([851b1e3](https://github.com/ecomplus/application-starter/commit/851b1e3556a9d1b45422c963325961035163a722))
* **create axios:** fix import of sandbox variable ([bef12f1](https://github.com/ecomplus/application-starter/commit/bef12f164f4e0967a40fe61b16e7a0d4f450e3b3))
* **list payments:** check the provider is simulated in on load ([12b986e](https://github.com/ecomplus/application-starter/commit/12b986ee01a5a7ab1b4a8bc21c893d46693f5eaf))

## 1.0.0 (2023-10-03)


### Features

* **braspag:** create app ([96f9023](https://github.com/ecomplus/application-starter/commit/96f9023ce192a95289012aa9c8c5e4e644ade1c7))


### Bug Fixes

* **braspag:** update credit card tokenization ([2f296b4](https://github.com/ecomplus/application-starter/commit/2f296b424aa7981ab8d09a3a8d5cc36d18fa0541))
* **list payment:** rename protected card roles to admin ([78b4db8](https://github.com/ecomplus/application-starter/commit/78b4db83b8d46431970893ef2f8abe58c5859ce2))

## [1.0.0-starter.26](https://github.com/ecomplus/application-starter/compare/v1.0.0-starter.25...v1.0.0-starter.26) (2022-02-24)

## [1.0.0-starter.25](https://github.com/ecomplus/application-starter/compare/v1.0.0-starter.24...v1.0.0-starter.25) (2022-02-24)


### Bug Fixes

* **deps:** remove `@google-cloud/firestore` from direct function dependencies ([a88f4cd](https://github.com/ecomplus/application-starter/commit/a88f4cd9f538d58b2397818805bc602d2fa95898))
* **deps:** update @ecomplus/application-sdk to v1.15.5 firestore ([865fcf8](https://github.com/ecomplus/application-starter/commit/865fcf8090da1ba25f9e49666de21e67d85f2c45))
* **deps:** update all non-major ([#101](https://github.com/ecomplus/application-starter/issues/101)) ([126d36d](https://github.com/ecomplus/application-starter/commit/126d36d5e8ca82c31fcdd1e94ac4811898f6eea9))
* **deps:** update all non-major ([#103](https://github.com/ecomplus/application-starter/issues/103)) ([ce79e21](https://github.com/ecomplus/application-starter/commit/ce79e21653e2ec7c983692a70cae39686a9ca052))
* **deps:** update all non-major ([#117](https://github.com/ecomplus/application-starter/issues/117)) ([f05722f](https://github.com/ecomplus/application-starter/commit/f05722fb812c298f15b49d9dbef37b47027eee05))
* **deps:** update all non-major ([#119](https://github.com/ecomplus/application-starter/issues/119)) ([ef214b6](https://github.com/ecomplus/application-starter/commit/ef214b62a7fcf6cfd15f2758b1757244b31317e2))
* **deps:** update all non-major ([#94](https://github.com/ecomplus/application-starter/issues/94)) ([3b3bc22](https://github.com/ecomplus/application-starter/commit/3b3bc2271398428ea8337f200a050930c51e07a1))
* **deps:** update all non-major ([#96](https://github.com/ecomplus/application-starter/issues/96)) ([0d9ff7c](https://github.com/ecomplus/application-starter/commit/0d9ff7c020e19b004be1f677681989447618aa85))
* **deps:** update dependency @ecomplus/application-sdk to ^22.0.0-firestore.1.15.6 ([#115](https://github.com/ecomplus/application-starter/issues/115)) ([f375197](https://github.com/ecomplus/application-starter/commit/f375197f7f08f82acb6d541c38c5f94369104f28))
* **deps:** update dependency dotenv to v15 ([#132](https://github.com/ecomplus/application-starter/issues/132)) ([b09af1e](https://github.com/ecomplus/application-starter/commit/b09af1ed95f98ad3b3d843b3a7e5e30165e4215a))
* **deps:** update dependency firebase-admin to v10 ([#114](https://github.com/ecomplus/application-starter/issues/114)) ([ac2a796](https://github.com/ecomplus/application-starter/commit/ac2a796bb65da0aa8e1f90d553332815340ef647))
* **deps:** update dependency firebase-tools to ^10.1.4 ([#134](https://github.com/ecomplus/application-starter/issues/134)) ([36f139d](https://github.com/ecomplus/application-starter/commit/36f139d292dafe748940f4daa5dfa464e20c87a1))
* **deps:** update dependency firebase-tools to ^9.17.0 ([#102](https://github.com/ecomplus/application-starter/issues/102)) ([05fd2eb](https://github.com/ecomplus/application-starter/commit/05fd2eb4b130bf338d17441c6f5e5432323967db))
* **deps:** update dependency firebase-tools to v10 ([#122](https://github.com/ecomplus/application-starter/issues/122)) ([8b937d8](https://github.com/ecomplus/application-starter/commit/8b937d8b5e8960478854a8675e6eafe25d293b3c))
* **deps:** update dependency uglify-js to ^3.14.3 ([#116](https://github.com/ecomplus/application-starter/issues/116)) ([559b299](https://github.com/ecomplus/application-starter/commit/559b2998fea47042593edbf62091655f3d89f822))

## [1.0.0-starter.24](https://github.com/ecomplus/application-starter/compare/v1.0.0-starter.23...v1.0.0-starter.24) (2021-06-24)


### Bug Fixes

* **deps:** update functions non-major dependencies ([dca0a11](https://github.com/ecomplus/application-starter/commit/dca0a113a2da8ae29054d1f4809b83518051cd68))
* **webhooks:** handle auth not found error to prevent webhook retries ([5082a7d](https://github.com/ecomplus/application-starter/commit/5082a7d0a0c5fe53b9529553c14f7e7be16ebf1f))

## [1.0.0-starter.23](https://github.com/ecomplus/application-starter/compare/v1.0.0-starter.22...v1.0.0-starter.23) (2021-06-15)


### Bug Fixes

* **deps:** update @ecomplus/application-sdk to v1.14.11 ([c7d8cd0](https://github.com/ecomplus/application-starter/commit/c7d8cd021dba0a9b477e234c97e1702f140a8aa8))
* **deps:** update dependency dotenv to v10 ([#90](https://github.com/ecomplus/application-starter/issues/90)) ([47104be](https://github.com/ecomplus/application-starter/commit/47104bef16fd9bb89979d86af709948f156b05a1))

## [1.0.0-starter.22](https://github.com/ecomplus/application-starter/compare/v1.0.0-starter.21...v1.0.0-starter.22) (2021-05-07)


### Bug Fixes

* **deps:** update @ecomplus/application-sdk to v1.14.10 ([c6f25f2](https://github.com/ecomplus/application-starter/commit/c6f25f233b1870fd27240582ebb080217d59d847))
* **env:** try FIREBASE_CONFIG json when GCLOUD_PROJECT unset ([92cfb16](https://github.com/ecomplus/application-starter/commit/92cfb166a59ef05f67a005fa6ad3b49c69fcb222))

## [1.0.0-starter.21](https://github.com/ecomplus/application-starter/compare/v1.0.0-starter.20...v1.0.0-starter.21) (2021-05-07)


### Bug Fixes

* **deps:** update @ecomplus/application-sdk to v1.14.9 ([1df5166](https://github.com/ecomplus/application-starter/commit/1df51665bf4ee0baa9edd949d5af942c5a8e26ff))
* **env:** try both GCP_PROJECT and GCLOUD_PROJECT (obsolete) ([9e53963](https://github.com/ecomplus/application-starter/commit/9e53963aa95d79b48fe63528f3f41947f619e9e9))

## [1.0.0-starter.20](https://github.com/ecomplus/application-starter/compare/v1.0.0-starter.19...v1.0.0-starter.20) (2021-04-30)

## [1.0.0-starter.19](https://github.com/ecomplus/application-starter/compare/v1.0.0-starter.18...v1.0.0-starter.19) (2021-04-05)

## [1.0.0-starter.18](https://github.com/ecomplus/application-starter/compare/v1.0.0-starter.17...v1.0.0-starter.18) (2021-04-03)


### Features

* **functions:** using node v12 engine ([96a9ed6](https://github.com/ecomplus/application-starter/commit/96a9ed612555798de9afc21ebd3895bb7fad3ab3))


### Bug Fixes

* **deps:** update all non-major dependencies ([#73](https://github.com/ecomplus/application-starter/issues/73)) ([c90e4bd](https://github.com/ecomplus/application-starter/commit/c90e4bd78172d6736c84dfa39294f411ab81fa19))
* **deps:** update all non-major dependencies ([#75](https://github.com/ecomplus/application-starter/issues/75)) ([37454b3](https://github.com/ecomplus/application-starter/commit/37454b3516e3471d8458e90f3bad09626e545794))

## [1.0.0-starter.17](https://github.com/ecomplus/application-starter/compare/v1.0.0-starter.16...v1.0.0-starter.17) (2021-02-14)


### Features

* **modules:** start examples and mocks for discounts and payment modules ([#66](https://github.com/ecomplus/application-starter/issues/66)) ([ec388a8](https://github.com/ecomplus/application-starter/commit/ec388a8cf47603fd15c448d2aae53623cd870c62))
* **update-app-data:** setup commum updateAppData method to store api lib ([888c28f](https://github.com/ecomplus/application-starter/commit/888c28fb64ccab6c2375451c12fffa5955fe277a))


### Bug Fixes

* **deps:** update all non-major dependencies ([#53](https://github.com/ecomplus/application-starter/issues/53)) ([d8b6bf3](https://github.com/ecomplus/application-starter/commit/d8b6bf31f48aa06a7352eb7bf8df52af9e8bdc3a))
* **deps:** update all non-major dependencies ([#54](https://github.com/ecomplus/application-starter/issues/54)) ([46bbafd](https://github.com/ecomplus/application-starter/commit/46bbafd363ddff88b5dc91f858ddc98cf648d232))
* **deps:** update all non-major dependencies ([#55](https://github.com/ecomplus/application-starter/issues/55)) ([470d6ed](https://github.com/ecomplus/application-starter/commit/470d6ed31ea569fa5b19c26dca29b7dcd8c659c9))
* **deps:** update all non-major dependencies ([#56](https://github.com/ecomplus/application-starter/issues/56)) ([a2382fc](https://github.com/ecomplus/application-starter/commit/a2382fc57a80eacf10aa7b1a468780aa9ca28803))
* **deps:** update all non-major dependencies ([#58](https://github.com/ecomplus/application-starter/issues/58)) ([bf4c575](https://github.com/ecomplus/application-starter/commit/bf4c575651ad99ffd6acbace95dc1f5feb419137))
* **deps:** update all non-major dependencies ([#59](https://github.com/ecomplus/application-starter/issues/59)) ([e5545d7](https://github.com/ecomplus/application-starter/commit/e5545d72ad6e2f720f2d12db6b75c7641feba7a2))
* **deps:** update all non-major dependencies ([#68](https://github.com/ecomplus/application-starter/issues/68)) ([40f8c6f](https://github.com/ecomplus/application-starter/commit/40f8c6fa598848a5a53f6b69ba3614e6734801cc))
* **deps:** update all non-major dependencies ([#69](https://github.com/ecomplus/application-starter/issues/69)) ([c01a26b](https://github.com/ecomplus/application-starter/commit/c01a26b5dd94812ca7bc6f317fdcc3074a0ce1a0))
* **deps:** update all non-major dependencies ([#70](https://github.com/ecomplus/application-starter/issues/70)) ([712fdc3](https://github.com/ecomplus/application-starter/commit/712fdc348df22de0825494f92a7696e20fefdf5d))
* **deps:** update dependency firebase-tools to ^9.2.0 ([#65](https://github.com/ecomplus/application-starter/issues/65)) ([eb84885](https://github.com/ecomplus/application-starter/commit/eb848859e7c477d52f1ad2e4b4e70589298acccc))
* **deps:** update dependency firebase-tools to v9 ([#61](https://github.com/ecomplus/application-starter/issues/61)) ([dffdf35](https://github.com/ecomplus/application-starter/commit/dffdf351a41f49b717b6316d351fe53670d5452e))

## [1.0.0-starter.16](https://github.com/ecomplus/application-starter/compare/v1.0.0-starter.15...v1.0.0-starter.16) (2020-11-05)


### Bug Fixes

* **deps:** add @google-cloud/firestore v4 as direct dep ([e79b789](https://github.com/ecomplus/application-starter/commit/e79b7899b26e900cccc06e71393838ecce3d2133))
* **deps:** update all non-major dependencies ([#38](https://github.com/ecomplus/application-starter/issues/38)) ([37a3346](https://github.com/ecomplus/application-starter/commit/37a3346de56e7c2d17ab84e732c2211d4683be6d))
* **deps:** update all non-major dependencies ([#41](https://github.com/ecomplus/application-starter/issues/41)) ([77b78ef](https://github.com/ecomplus/application-starter/commit/77b78efbc64bfa32719bcd79ba4ed8da2dc57582))
* **deps:** update all non-major dependencies ([#48](https://github.com/ecomplus/application-starter/issues/48)) ([c0042d8](https://github.com/ecomplus/application-starter/commit/c0042d85f06315ffac6157f485a25fe1e0a13a01))
* **deps:** update all non-major dependencies ([#49](https://github.com/ecomplus/application-starter/issues/49)) ([dc4d847](https://github.com/ecomplus/application-starter/commit/dc4d8477f05d3d4d9b83da21d42c5e394e931c82))
* **deps:** update dependency firebase-admin to ^9.2.0 ([#47](https://github.com/ecomplus/application-starter/issues/47)) ([156714a](https://github.com/ecomplus/application-starter/commit/156714a9f3c0e71f28466efdb850874eaec283b6))
* **refresh-tokens:** add scheduled cloud function to run update ([d338924](https://github.com/ecomplus/application-starter/commit/d33892474a8c0c07bab14791cf9c4417baca00d1))

## [1.0.0-starter.15](https://github.com/ecomplus/application-starter/compare/v1.0.0-starter.14...v1.0.0-starter.15) (2020-07-26)


### Bug Fixes

* **deps:** bump @ecomplus/application-sdk@firestore ([fe4fe46](https://github.com/ecomplus/application-starter/commit/fe4fe46c2c4e1dfd21790f8c03a84245cb8fc8f3))
* **deps:** update all non-major dependencies ([#36](https://github.com/ecomplus/application-starter/issues/36)) ([b14f2e9](https://github.com/ecomplus/application-starter/commit/b14f2e9cb56d5b18500b678b074dbdbe099b041a))
* **deps:** update dependency firebase-admin to v9 ([#37](https://github.com/ecomplus/application-starter/issues/37)) ([204df95](https://github.com/ecomplus/application-starter/commit/204df95c37d24c455951081f9186178222097778))

## [1.0.0-starter.14](https://github.com/ecomplus/application-starter/compare/v1.0.0-starter.13...v1.0.0-starter.14) (2020-06-30)


### Bug Fixes

* **auth-callback:** check `row.setted_up` in place of 'settep_up' ([e2a73ca](https://github.com/ecomplus/application-starter/commit/e2a73ca029868d9c899d4a1c0d982f1c1ed5829f))
* **deps:** update all non-major dependencies ([#31](https://github.com/ecomplus/application-starter/issues/31)) ([702bee9](https://github.com/ecomplus/application-starter/commit/702bee9a31370579dd7718b5722180e5bb8996e8))
* **deps:** update dependency firebase-functions to ^3.7.0 ([#30](https://github.com/ecomplus/application-starter/issues/30)) ([0f459a3](https://github.com/ecomplus/application-starter/commit/0f459a3ab9fe21f8dc9e9bdfce33c0b6d43e3622))
* **deps:** update dependency firebase-tools to ^8.4.2 ([#29](https://github.com/ecomplus/application-starter/issues/29)) ([cf7e61e](https://github.com/ecomplus/application-starter/commit/cf7e61ef50aa976f33725d855ba19d06a7522fd4))
* **pkg:** update deps, start using node 10 ([172ed7f](https://github.com/ecomplus/application-starter/commit/172ed7f223cd23b9874c5d6209928b7d620b0cf6))

## [1.0.0-starter.13](https://github.com/ecomplus/application-starter/compare/v1.0.0-starter.12...v1.0.0-starter.13) (2020-06-03)


### Bug Fixes

* **deps:** update @ecomplus/application-sdk to v1.13.0 ([b424410](https://github.com/ecomplus/application-starter/commit/b42441089e7020774c9586ed176e691ef4c755be))
* **refresh-tokens:** force appSdk update tokens task ([139a350](https://github.com/ecomplus/application-starter/commit/139a350c230fa36c37ab83e2debfe979d831cb08))

## [1.0.0-starter.12](https://github.com/ecomplus/application-starter/compare/v1.0.0-starter.11...v1.0.0-starter.12) (2020-05-29)


### Bug Fixes

* **deps:** replace @ecomplus/application-sdk to firestore version ([3d2ee85](https://github.com/ecomplus/application-starter/commit/3d2ee85feb2edab77950e5c266514152fbc9674d))
* **deps:** update all non-major dependencies ([#21](https://github.com/ecomplus/application-starter/issues/21)) ([7a370da](https://github.com/ecomplus/application-starter/commit/7a370da11dfd098c0a90da05d39fc62f9264fd63))
* **deps:** update all non-major dependencies ([#26](https://github.com/ecomplus/application-starter/issues/26)) ([e37e0e8](https://github.com/ecomplus/application-starter/commit/e37e0e8151768d79e81f4184ab937ddf9d775a4f))
* **deps:** update dependency uglify-js to ^3.9.2 ([#20](https://github.com/ecomplus/application-starter/issues/20)) ([adccf0a](https://github.com/ecomplus/application-starter/commit/adccf0a2fed37f2ccce57ded20d25af85407ac8a))

## [1.0.0-starter.11](https://github.com/ecomplus/application-starter/compare/v1.0.0-starter.10...v1.0.0-starter.11) (2020-04-27)


### Bug Fixes

* **deps:** update @ecomplus/application-sdk to v1.11.13 ([70584c2](https://github.com/ecomplus/application-starter/commit/70584c245e97a1b539a3df3f74109f20d9a1fa3c))
* **setup:** ensure enable token updates by default ([67aea0e](https://github.com/ecomplus/application-starter/commit/67aea0eb363be3cc535a0f0f4d1b5b682958f243))

## [1.0.0-starter.10](https://github.com/ecomplus/application-starter/compare/v1.0.0-starter.9...v1.0.0-starter.10) (2020-04-27)


### Bug Fixes

* **deps:** update @ecomplus/application-sdk to v1.11.11 ([b8217d0](https://github.com/ecomplus/application-starter/commit/b8217d03fe92b5c233615a0b6b4c01d7bad676c2))
* **deps:** update all non-major dependencies ([#19](https://github.com/ecomplus/application-starter/issues/19)) ([a99797a](https://github.com/ecomplus/application-starter/commit/a99797a129d6e2383ef5ef69c06afacd13cccfb0))
* **setup:** do not disable updates on refresh-tokens route ([b983a45](https://github.com/ecomplus/application-starter/commit/b983a45ada5575ee6435f7b3016ef35c28355762))

## [1.0.0-starter.9](https://github.com/ecomplus/application-starter/compare/v1.0.0-starter.8...v1.0.0-starter.9) (2020-04-21)


### Bug Fixes

* **deps:** update @ecomplus/application-sdk to v1.11.10 ([8da579c](https://github.com/ecomplus/application-starter/commit/8da579c19c6530e8cc9fd338a07aece1fccc64ff))

## [1.0.0-starter.8](https://github.com/ecomplus/application-starter/compare/v1.0.0-starter.7...v1.0.0-starter.8) (2020-04-18)


### Bug Fixes

* **deps:** update all non-major dependencies ([#17](https://github.com/ecomplus/application-starter/issues/17)) ([785064e](https://github.com/ecomplus/application-starter/commit/785064ef5bf06db7c084f9b17b37a6077645735b))

## [1.0.0-starter.7](https://github.com/ecomplus/application-starter/compare/v1.0.0-starter.6...v1.0.0-starter.7) (2020-04-07)

## [1.0.0-starter.6](https://github.com/ecomplus/application-starter/compare/v1.0.0-starter.5...v1.0.0-starter.6) (2020-04-06)


### Bug Fixes

* **deps:** update all non-major dependencies ([#10](https://github.com/ecomplus/application-starter/issues/10)) ([b3c65e5](https://github.com/ecomplus/application-starter/commit/b3c65e5c7eb89a4825eb47c852ce65293d172314))
* **deps:** update all non-major dependencies ([#13](https://github.com/ecomplus/application-starter/issues/13)) ([33ff19b](https://github.com/ecomplus/application-starter/commit/33ff19bbdad1f34b6d1c255089dc0a0e4092b955))
* **deps:** update all non-major dependencies ([#8](https://github.com/ecomplus/application-starter/issues/8)) ([feba5b9](https://github.com/ecomplus/application-starter/commit/feba5b9cdc54e8304beff2b12658a6343ef37569))
* **deps:** update dependency firebase-functions to ^3.6.0 ([#15](https://github.com/ecomplus/application-starter/issues/15)) ([5f7f0a2](https://github.com/ecomplus/application-starter/commit/5f7f0a2bf5c744000996e2a0b78690b363462ee7))
* **deps:** update dependency firebase-tools to ^7.16.1 ([#14](https://github.com/ecomplus/application-starter/issues/14)) ([b8e4798](https://github.com/ecomplus/application-starter/commit/b8e479851bd02bf5929a7df8a71a761f1c1c1654))
* **deps:** update dependency firebase-tools to v8 ([#16](https://github.com/ecomplus/application-starter/issues/16)) ([b72560e](https://github.com/ecomplus/application-starter/commit/b72560e4fc86496499d553e47094ace25436272b))
* **ecom-modules:** fix parsing mod names to filenames and vice versa ([99c185a](https://github.com/ecomplus/application-starter/commit/99c185afebeae77deb61537ed9de1c77132c16ce))

## [1.0.0-starter.5](https://github.com/ecomplus/application-starter/compare/v1.0.0-starter.4...v1.0.0-starter.5) (2020-03-05)


### Features

* **market-publication:** handle full featured app publication to Market ([28379dc](https://github.com/ecomplus/application-starter/commit/28379dc3c4784e757c8f25e5d737f6143682b0db))
* **static:** handle static with server app files from public folder ([827d000](https://github.com/ecomplus/application-starter/commit/827d00079b0dc169b2eef31b8e0ac73c596307a8))

## [1.0.0-starter.4](https://github.com/ecomplus/application-starter/compare/v1.0.0-starter.3...v1.0.0-starter.4) (2020-02-21)


### Features

* **calculate-shipping:** basic setup for calculate shipping module ([db77595](https://github.com/ecomplus/application-starter/commit/db7759514bb25d151dd4508fb96b84c52b3e94ba))


### Bug Fixes

* **home:** fix replace accets regex exps to generate slug from title ([198cc0b](https://github.com/ecomplus/application-starter/commit/198cc0b911d4874d96f3cd5254d30cab5fe89765))
* **home:** gen slug from pkg name or app title if not set or default ([25c20bf](https://github.com/ecomplus/application-starter/commit/25c20bfade65a86e4f4b1026ef59a5694a022a74))

## [1.0.0-starter.3](https://github.com/ecomplus/application-starter/compare/v1.0.0-starter.2...v1.0.0-starter.3) (2020-02-21)

## [1.0.0-starter.2](https://github.com/ecomplus/application-starter/compare/v1.0.0-starter.1...v1.0.0-starter.2) (2020-02-21)


### Bug Fixes

* **config:** stop reading app from functions config ([7b9aab7](https://github.com/ecomplus/application-starter/commit/7b9aab727fefe8a5b84695e90a0d68e02b8c3f62))

## [1.0.0-starter.1](https://github.com/ecomplus/application-starter/compare/v1.0.0-starter.0...v1.0.0-starter.1) (2020-02-20)


### Features

* **get-auth:** endpoint to return auth id and token for external usage ([40a8ae2](https://github.com/ecomplus/application-starter/commit/40a8ae2e895d6e32c7032ca500040ec82c80dc5d))
* **server:** also supporting passing Store Id from query ([111f3a7](https://github.com/ecomplus/application-starter/commit/111f3a716fbfd2e155e3fb24242bddcae7cb065c))


### Bug Fixes

* **server:** remove 'routes' path when setting filename for routes ([119524c](https://github.com/ecomplus/application-starter/commit/119524c523a11364ed912769637a6f8e479af5f1))

## [1.0.0-starter.0](https://github.com/ecomplus/application-starter/compare/v0.1.1...v1.0.0-starter.0) (2020-02-18)


### Features

* **router:** recursive read routes dir to auto setup server routes ([ff2b456](https://github.com/ecomplus/application-starter/commit/ff2b45604723a8146c9481ea36a9400da5ccc2bc))


### Bug Fixes

* **home:** fix semver on for app.version (remove version tag if any) ([ad36461](https://github.com/ecomplus/application-starter/commit/ad364614a7f5599850ad39e00a94d310742e8f80))
* **middlewares:** update route files exports (named exports by methods) ([6a22e67](https://github.com/ecomplus/application-starter/commit/6a22e67135bc6110e6da6b4ab25f67ad8d77f597))

### [0.1.1](https://github.com/ecomplus/application-starter/compare/v0.1.0...v0.1.1) (2020-02-18)


### Features

* **env:** get 'pkg' from functions config ([bf45ec3](https://github.com/ecomplus/application-starter/commit/bf45ec33a2147d5be91fdc4955bd6cfa1b0867e2))
* **home:** set version and slug from root package, fix with uris ([d4b61fa](https://github.com/ecomplus/application-starter/commit/d4b61fab427aefdb2ac485d90eb1abe15d6aafc6))


### Bug Fixes

* **env:** firebase doesnt uppercase config ([502185e](https://github.com/ecomplus/application-starter/commit/502185ed30f346d8db77b849d6ba0eb48cb777cb))
* **require:** update @ecomplus/application-sdk dependency name ([d4174ac](https://github.com/ecomplus/application-starter/commit/d4174ac5425b85590db0e92d4b1d69a8567a6c55))

## [0.1.0](https://github.com/ecomplus/application-starter/compare/v0.0.4...v0.1.0) (2020-02-17)

### [0.0.4](https://github.com/ecomclub/firebase-app-boilerplate/compare/v0.0.3...v0.0.4) (2020-02-16)


### Bug Fixes

* **server:** update routes names (refresh-tokens) ([79a2910](https://github.com/ecomclub/firebase-app-boilerplate/commit/79a2910817cf4193b40e02b2b1e6b920e7fefb2d))

### [0.0.3](https://github.com/ecomclub/express-app-boilerplate/compare/v0.0.2...v0.0.3) (2020-02-15)


### Features

* **server:** start reading env options, handle operator token ([ce107b7](https://github.com/ecomclub/express-app-boilerplate/commit/ce107b74cde375e875a85cc3ba0cc6a73740785d))
* **update-tokens:** adding route to start update tokens service (no content) ([20c62ec](https://github.com/ecomclub/express-app-boilerplate/commit/20c62ec6800fc326b89e8cf54b2916f56e5910e4))


### Bug Fixes

* **auth-callback:** fix handling docRef (desn't need to get by id again) ([629ca5a](https://github.com/ecomclub/express-app-boilerplate/commit/629ca5ab9849e3822cc190f423da5bf2e0c4daab))
* **auth-callback:** save procedures if not new, check and set 'settep_up' ([#3](https://github.com/ecomclub/express-app-boilerplate/issues/3)) ([4a01f86](https://github.com/ecomclub/express-app-boilerplate/commit/4a01f86c37e09cd7c0363f6fbc80de6eeef3ba20))
* **ECOM_AUTH_UPDATE_INTERVAL:** disable set interval (no daemons on cloud functions) ([2aa2442](https://github.com/ecomclub/express-app-boilerplate/commit/2aa2442061f0308be9eb9430552fa04ad148788c))
* **env:** fixed to get appInfor variable ([e9b1a3c](https://github.com/ecomclub/express-app-boilerplate/commit/e9b1a3ce0d17ee74a5eada70589340fd5a70e786))
* **env:** fixed to get appInfor variable ([22687e2](https://github.com/ecomclub/express-app-boilerplate/commit/22687e25f611d49f8c01494af114e0289cec251e))
* **middleware:** check standard http headers for client ip ([5045113](https://github.com/ecomclub/express-app-boilerplate/commit/504511329afe9277d540f0f542a316d04634ce9e))

### 0.0.2 (2020-02-11)


### Bug Fixes

* **lib:** remove unecessary/incorrect requires with new deps ([69f2b77](https://github.com/ecomclub/express-app-boilerplate/commit/69f2b77))
* **routes:** fix handling appSdk (param) ([0cf2dde](https://github.com/ecomclub/express-app-boilerplate/commit/0cf2dde))
* **setup:** added initializeApp() to firebase admin ([e941e59](https://github.com/ecomclub/express-app-boilerplate/commit/e941e59))
* **setup:** manually setup ecomplus-app-sdk with firestore ([64e49f8](https://github.com/ecomclub/express-app-boilerplate/commit/64e49f8))
* **setup:** manually setup ecomplus-app-sdk with firestore ([c718bd0](https://github.com/ecomclub/express-app-boilerplate/commit/c718bd0))
* **setup:** manually setup ecomplus-app-sdk with firestore ([33909bf](https://github.com/ecomclub/express-app-boilerplate/commit/33909bf)), closes [/github.com/ecomclub/ecomplus-app-sdk/blob/master/main.js#L45](https://github.com/ecomclub//github.com/ecomclub/ecomplus-app-sdk/blob/master/main.js/issues/L45)
* **startup:** setup routes after appSdk ready, add home route ([d182555](https://github.com/ecomclub/express-app-boilerplate/commit/d182555))


### Features

* **firestore-app-boilerplate:** Initial commit ([c9963f0](https://github.com/ecomclub/express-app-boilerplate/commit/c9963f0))
* **firestore-app-boilerplate:** Initial commit ([be493ea](https://github.com/ecomclub/express-app-boilerplate/commit/be493ea))
* **firestore-support:** minor changes ([3718cba](https://github.com/ecomclub/express-app-boilerplate/commit/3718cba))
* **firestore-support:** refactoring to  use saveProcedures function ([62971ef](https://github.com/ecomclub/express-app-boilerplate/commit/62971ef))
* **firestore-support:** removed sqlite error clausule ([2d47996](https://github.com/ecomclub/express-app-boilerplate/commit/2d47996))
* **routes:** add home route (app json) ([42a3f2b](https://github.com/ecomclub/express-app-boilerplate/commit/42a3f2b))

# [LEGACY] Express App Boilerplate

### [0.1.1](https://github.com/ecomclub/express-app-boilerplate/compare/v0.1.0...v0.1.1) (2019-07-31)


### Bug Fixes

* **procedures:** fix checking for procedures array to run configureSetup ([1371cdc](https://github.com/ecomclub/express-app-boilerplate/commit/1371cdc))

## [0.1.0](https://github.com/ecomclub/express-app-boilerplate/compare/v0.0.2...v0.1.0) (2019-07-31)

### 0.0.2 (2019-07-31)


### Bug Fixes

* chain promise catch on lib getConfig ([281abf9](https://github.com/ecomclub/express-app-boilerplate/commit/281abf9))
* fix mergin hidden data to config ([8b64d58](https://github.com/ecomclub/express-app-boilerplate/commit/8b64d58))
* fix path to require 'get-config' from lib ([11425b0](https://github.com/ecomclub/express-app-boilerplate/commit/11425b0))
* get storeId from header and set on req object ([a3bebaa](https://github.com/ecomclub/express-app-boilerplate/commit/a3bebaa))
* handle error on get config instead of directly debug ([f182589](https://github.com/ecomclub/express-app-boilerplate/commit/f182589))
* routes common fixes ([2758a57](https://github.com/ecomclub/express-app-boilerplate/commit/2758a57))
* using req.url (from http module) instead of req.baseUrl ([d9057ca](https://github.com/ecomclub/express-app-boilerplate/commit/d9057ca))


### Features

* authentication callback ([8f18892](https://github.com/ecomclub/express-app-boilerplate/commit/8f18892))
* conventional store api error handling ([bcde87e](https://github.com/ecomclub/express-app-boilerplate/commit/bcde87e))
* function to get app config from data and hidden data ([ba470f5](https://github.com/ecomclub/express-app-boilerplate/commit/ba470f5))
* getting store id from web.js ([72f18c6](https://github.com/ecomclub/express-app-boilerplate/commit/72f18c6))
* handling E-Com Plus webhooks ([63ba19f](https://github.com/ecomclub/express-app-boilerplate/commit/63ba19f))
* main js file including bin web and local ([6b8a71a](https://github.com/ecomclub/express-app-boilerplate/commit/6b8a71a))
* pre-validate body for ecom modules endpoints ([f06bdb0](https://github.com/ecomclub/express-app-boilerplate/commit/f06bdb0))
* setup app package dependencies and main.js ([b2826ed](https://github.com/ecomclub/express-app-boilerplate/commit/b2826ed))
* setup base app.json ([015599a](https://github.com/ecomclub/express-app-boilerplate/commit/015599a))
* setup daemon processes, configure store setup ([db3ca8c](https://github.com/ecomclub/express-app-boilerplate/commit/db3ca8c))
* setup procedures object ([c5e8627](https://github.com/ecomclub/express-app-boilerplate/commit/c5e8627))
* setup web app with express ([d128430](https://github.com/ecomclub/express-app-boilerplate/commit/d128430))
