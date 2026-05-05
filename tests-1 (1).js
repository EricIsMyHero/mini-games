// ============================================================
// UNEC TEST SİSTEMİ — tests.js
// ============================================================

// ── Sual Bankı ─────────────────────────────────────────────
const QUESTION_BANK = {
  muhasibat: [
    { question: "Mühasibat uçotunda tətbiq edilən hesablar necə qruplaşır?", options: ["İqtisadi hərəkətinə görə; iqtisadi quruluşuna görə", "İqtisadi məzmununa görə; iqtisadi bərabərliyinə görə", "Təyinatı və quruluşuna görə; iqtisadi bərabərliyinə görə", "İqtisadi məzmununa görə; təyinatı və quruluşuna görə", "Təyinatı görə; hesabların hesablaşmasına görə"], answer: 3 },
    { question: "Aktiv hesabların debet dövriyyəsi nəyi göstərir?", options: ["Əmlakın azalmasını", "Əmlakın artmasını", "Öhdəliklərin artmasını", "Öhdəliklərin azalmasını", "Kapitalın artmasını"], answer: 1 },
    { question: "Balans hesabatı hansı tarixə tərtib edilir?", options: ["İlin əvvəlinə", "Hesabat dövrünün sonuna", "Hesabat dövrünün əvvəlinə", "İstənilən tarixə", "Rübün əvvəlinə"], answer: 1 },
    { question: "Passiv hesabların kredit dövriyyəsi nəyi göstərir?", options: ["Mənbənin azalmasını", "Mənbənin artmasını", "Əmlakın artmasını", "Əmlakın azalmasını", "Kapitalın azalmasını"], answer: 1 },
    { question: "İkili yazılış prinsipi nəyi bildirir?", options: ["Hər əməliyyat bir hesabda qeyd olunur", "Hər əməliyyat iki hesabda eyni məbləğdə qeyd olunur", "Hər əməliyyat üç hesabda qeyd olunur", "Əməliyyatlar yalnız aktiv hesablarda qeyd olunur", "Əməliyyatlar yalnız passiv hesablarda qeyd olunur"], answer: 1 },
    { question: "Mühasibat balansının tərəfləri arasında bərabərlik necədir?", options: ["Aktiv > Passiv", "Aktiv < Passiv", "Aktiv = Passiv", "Aktiv ≠ Passiv", "Aktiv = 2 × Passiv"], answer: 2 },
    { question: "Amortizasiya nədir?", options: ["Əmlakın satışı", "Əsas vəsaitlərin dəyərinin hissə-hissə xərclərə köçürülməsi", "Kapitalın artırılması", "Borcun ödənilməsi", "Malların alınması"], answer: 1 },
    { question: "Debitor borcu nədir?", options: ["Müəssisənin üçüncü şəxslərə olan borcu", "Üçüncü şəxslərin müəssisəyə olan borcu", "Bank krediti", "Vergi borcu", "Əmək haqqı borcu"], answer: 1 },
    { question: "Kreditor borcu nədir?", options: ["Müəssisənin üçüncü şəxslərə olan borcu", "Üçüncü şəxslərin müəssisəyə olan borcu", "Müştərilərin borcu", "Müəssisənin bank borcudur", "İşçilərin borcu"], answer: 0 },
    { question: "Xalis mənfəət necə hesablanır?", options: ["Gəlir - Xərc", "Gəlir - Xərc - Vergi", "Gəlir + Xərc", "Xərc - Gəlir", "Gəlir × Vergi"], answer: 1 },
    { question: "Mühasibat uçotunun əsas funksiyası hansıdır?", options: ["İstehsalın artırılması", "İqtisadi fəaliyyətin qeydiyyatı, ölçülməsi, sistemləşdirilməsi", "Marketinq strategiyasının hazırlanması", "Satışın artırılması", "Reklam"], answer: 1 },
    { question: "Hesablar planı nədir?", options: ["Mühasibat hesablarının siyahısı", "Malların qiyməti", "Ödəniş cədvəli", "Büdcə planı", "İstehsal planı"], answer: 0 },
    { question: "Maliyyə hesabatlarına aiddir?", options: ["Yalnız balans", "Balans, mənfəət və zərər hesabatı, pul vəsaitlərinin hərəkəti", "Yalnız mənfəət hesabatı", "Yalnız audit hesabatı", "Yalnız vergi bəyannaməsi"], answer: 1 },
    { question: "Dövriyyə kapitalına daxildir?", options: ["Torpaq", "Binalar", "Xammal, hazır məhsul, debitor borcu", "Avadanlıq", "Patent"], answer: 2 },
    { question: "Əsas vəsaitlər hesabı hansı tiplidir?", options: ["Passiv", "Aktiv", "Aktiv-passiv", "Nizamlanma", "Nəticə"], answer: 1 },
    { question: "Kapital hesabı hansı tərəfdə yerləşir?", options: ["Aktivdə", "Passivdə", "Hər ikisində", "Balans xaricindədir", "Heç birində"], answer: 1 },
    { question: "Jurnal-order forması nədir?", options: ["Dövriyyə cədvəli", "Uçot registrinin bir forması", "Balans forması", "Hesabat forması", "Vergi forması"], answer: 1 },
    { question: "İlkin sənəd nədir?", options: ["Hesabat", "Əməliyyatın birbaşa sənədləşdirildiyi sənəd", "Müqavilə", "Hesab-faktura", "Bank çıxarışı"], answer: 1 },
    { question: "Uçot siyasəti nədir?", options: ["Mühasibat prinsipləri toplusu", "Müəssisənin uçotu aparmaq üçün seçdiyi üsullar toplusu", "Vergi strategiyası", "Audit planı", "Maliyyə planı"], answer: 1 },
    { question: "Konsolidasiya edilmiş uçot nədir?", options: ["Bir müəssisənin uçotu", "Bir neçə müəssisənin vahid uçotda birləşdirilməsi", "Vergi uçotu", "Büdcə uçotu", "Sığorta uçotu"], answer: 1 },
    { question: "Smetanın rolü nədir?", options: ["Satışın artırılması", "Gəlir və xərclərin planlaşdırılması", "Audit aparılması", "İstehsalın dayandırılması", "Kapitalın azaldılması"], answer: 1 },
    { question: "Xəzinədar kimin sorumluluğundadır?", options: ["Mühasib", "Baş mühasib", "Müdir", "Xəzinədar özü", "Satış şöbəsi"], answer: 3 },
    { question: "Mühasibat uçotu hansı prinsipə əsaslanır?", options: ["İqtisadi səmərəlilik", "Qoşa yazılış, davamlılıq, konservatizm", "Bazar tələbi", "İstehsal həcmi", "Vergitutma"], answer: 1 },
    { question: "Müflis elan edilmə hansı vəziyyəti göstərir?", options: ["Mənfəətin artması", "Müəssisənin borclarını ödəyə bilməməsi", "Yeni müəssisə açılması", "Kapitalın artırılması", "Satışın artması"], answer: 1 },
    { question: "Pul vəsaitlərinin hərəkəti hesabatı nə üçündür?", options: ["Əmlak qiymətləndirilməsi", "Pul daxilolmaları və ödənişlərinin göstərilməsi", "Mənfəətin hesablanması", "Vergi hesablanması", "Kapital artımı"], answer: 1 },
    { question: "Vergi uçotu ilə mühasibat uçotu arasındakı fərq nədir?", options: ["Fərq yoxdur", "Vergi uçotu vergi qanunlarına, mühasibat uçotu muhasibat standartlarına əsaslanır", "Mühasibat uçotu daha sadədir", "Vergi uçotu daha əhatəlidir", "Eynidir, sadəcə adları fərqlidir"], answer: 1 },
    { question: "İnventar siyahıyaalma nə deməkdir?", options: ["Malların satılması", "Əmlak və öhdəliklərin faktiki mövcudluğunun yoxlanılması", "Hesabatın hazırlanması", "Sənədlərin arxivlənməsi", "Vergi ödənilməsi"], answer: 1 },
    { question: "Hesab-faktura nədir?", options: ["Bank sənədi", "Mal və ya xidmət üçün ödəniş tələbi olan sənəd", "Müqavilə", "Vergi bəyannaməsi", "İş sərəncamı"], answer: 1 },
    { question: "Nizamnamə kapitalı nədir?", options: ["Bütün mənfəət", "Müəssisənin yaradılması zamanı qoyulmuş ilkin kapital", "Bank krediti", "Dövlət subsidiyası", "Satış gəliri"], answer: 1 },
    { question: "Qiymətli kağızlar uçotuna daxildir?", options: ["Torpaq", "Aksiyalar, istiqrazlar, veksellər", "Avadanlıq", "Xammal", "Hazır məhsul"], answer: 1 },
    { question: "Kassa kitabı nədir?", options: ["Mühasibat kitabı", "Kassa əməliyyatlarının qeyd olunduğu uçot registri", "Hesabat forması", "Sifariş kitabı", "Anbar kitabı"], answer: 1 },
    { question: "Mühasibat uçotunun predmeti nədir?", options: ["Yalnız pul vəsaitləri", "Müəssisənin iqtisadi vəsaitləri və onların mənbələri, habelə əməliyyatları", "Yalnız borclular", "Yalnız əsas vəsaitlər", "Yalnız dövriyyə vəsaitləri"], answer: 1 },
    { question: "Audit nədir?", options: ["Malların satışı", "Maliyyə hesabatlarının müstəqil yoxlanılması", "Mühasibat uçotunun aparılması", "Vergi bəyannaməsinin doldurulması", "Büdcənin planlaşdırılması"], answer: 1 },
    { question: "Subhesab nədir?", options: ["Əsas hesabın analitik ayrıntısı", "Ayrı bir hesab növü", "Balans sənədi", "Hesabat növü", "Büdcə bölməsi"], answer: 0 },
    { question: "Nağd pul əməliyyatları kim tərəfindən aparılır?", options: ["Baş mühasib", "Müdir", "Kassir", "Anbardar", "Satıcı"], answer: 2 },
  ],

  iqtisadiyyat: [
    { question: "İqtisadiyyat nəyi öyrənir?", options: ["Yalnız pul əməliyyatlarını", "Məhdud resursların paylanması ilə bağlı seçimləri", "Yalnız ticarəti", "Coğrafi amilləri", "Tarixi hadisələri"], answer: 1 },
    { question: "Tələb qanunu nə bildirir?", options: ["Qiymət artdıqca tələb artır", "Qiymət artdıqca tələb azalır", "Qiymət sabit qalır", "Tələb təklifdən asılı deyil", "Qiymət azaldıqca tələb azalır"], answer: 1 },
    { question: "Təklif qanunu nə bildirir?", options: ["Qiymət artdıqca təklif azalır", "Qiymət artdıqca təklif artır", "Qiymət sabit qalır", "Təklif tələbdən asılı deyil", "Qiymət azaldıqca təklif artır"], answer: 1 },
    { question: "Bazar tarazlığı nə zaman yaranır?", options: ["Tələb > Təklif", "Tələb < Təklif", "Tələb = Təklif", "Qiymət maksimum olanda", "Qiymət minimum olanda"], answer: 2 },
    { question: "ÜDM nədir?", options: ["Ölkənin xarici borcu", "Ölkədə müəyyən dövrdə istehsal edilmiş bütün mal və xidmətlərin dəyəri", "Dövlət büdcəsi", "Valyuta ehtiyatı", "İxrac həcmi"], answer: 1 },
    { question: "İnflyasiya nədir?", options: ["Qiymətlərin azalması", "Qiymətlərin ümumi səviyyəsinin artması", "İstehsalın artması", "İşsizliyin azalması", "Valyutanın möhkəmlənməsi"], answer: 1 },
    { question: "Deflyasiya nədir?", options: ["Qiymətlərin artması", "Qiymətlərin ümumi səviyyəsinin azalması", "Büdcə kəsiri", "Ticaret balansının artması", "Valyutanın zəifləməsi"], answer: 1 },
    { question: "Məcburi işsizlik nədir?", options: ["İş tapmaq istəməyənlər", "İş tapmaq istəyib, lakin tapa bilməyənlər", "Tətildə olanlar", "Xəstə olanlar", "Tələbələr"], answer: 1 },
    { question: "Fiskal siyasət nədir?", options: ["Mərkəzi bankın siyasəti", "Dövlətin vergi və xərclər vasitəsilə iqtisadiyyata müdaxiləsi", "Xarici ticarət siyasəti", "Miqrasiya siyasəti", "Sığorta siyasəti"], answer: 1 },
    { question: "Monetar siyasət nədir?", options: ["Dövlətin vergi siyasəti", "Mərkəzi bankın pul kütləsini idarə etməsi", "Ticarət siyasəti", "Miqrasiya siyasəti", "Sosial siyasət"], answer: 1 },
    { question: "Tələbin qiymət elastikliyi nədir?", options: ["Tələb artımının miqdarı", "Tələb miqdarının qiymət dəyişiklərinə həssaslığı", "Qiymət artımının sürəti", "İstehsalçı gəliri", "Bazar payı"], answer: 1 },
    { question: "Fayda nədir?", options: ["İstehsal xərci", "Malın istehlakından əldə edilən məmnuniyyət", "Satış qiyməti", "Mənfəət", "Vergi"], answer: 1 },
    { question: "Mövsümi işsizlik nəyə görə yaranır?", options: ["Texnoloji dəyişikliklərə görə", "İqtisadiyyatın mövsümi xarakter daşımasına görə", "Əmək haqlarının artmasına görə", "İstehsalın azalmasına görə", "Xarici rəqabətə görə"], answer: 1 },
    { question: "Makroiqtisadiyyat nəyi öyrənir?", options: ["Ayrı-ayrı firmalar", "Ölkənin bütövlükdə iqtisadi göstəricilərini", "Fərdi istehlakçılar", "Bir sektoru", "Xarici ticarəti"], answer: 1 },
    { question: "Mikroiqtisadiyyat nəyi öyrənir?", options: ["Bütün ölkəni", "Ayrı-ayrı iqtisadi subyektlərin davranışını", "Beynəlxalq ticarəti", "Pul siyasətini", "Dövlət büdcəsini"], answer: 1 },
    { question: "Mükəmməl rəqabət bazarının xüsusiyyəti nədir?", options: ["Az satıcı", "Çox sayda satıcı, homojen məhsul, azad giriş-çıxış", "Qiymət ayrı-seçkilik", "Reklam üstünlüyü", "Patentlər"], answer: 1 },
    { question: "Monopoliya nədir?", options: ["Çoxlu satıcı", "Bazarda tək satıcının olması", "İki satıcı", "Dövlət müdaxiləsi", "Azad ticarət"], answer: 1 },
    { question: "Oliqopoliya nədir?", options: ["Bir satıcı", "Bir neçə böyük satıcının bazar payını tutması", "Çox sayda satıcı", "Dövlət inhisarı", "Azad rəqabət"], answer: 1 },
    { question: "İstehlakçı artığı nədir?", options: ["İstehsalçı mənfəəti", "Alıcının ödəmək istədiyi qiymətlə ödədiyi qiymət arasındakı fərq", "Bazardakı artıq məhsul", "Vergi gəliri", "Büdcə artığı"], answer: 1 },
    { question: "Əmək haqqının minimum həddi nəyə görə müəyyən edilir?", options: ["İstehsalçı mənfəəti üçün", "İşçilərin minimum yaşayış standartını qorumaq üçün", "İnflyasiyanı artırmaq üçün", "İşsizliyi artırmaq üçün", "Xarici investisiya cəlb etmək üçün"], answer: 1 },
    { question: "Sabit xərc nədir?", options: ["İstehsal həcminə görə dəyişən xərc", "İstehsal həcmindən asılı olmayan xərc", "Xammal xərci", "Enerji xərci", "Əmək haqqı"], answer: 1 },
    { question: "Dəyişkən xərc nədir?", options: ["İstehsal həcmindən asılı olmayan xərc", "İstehsal həcminə görə dəyişən xərc", "Amortizasiya", "İcarə", "Sığorta"], answer: 1 },
    { question: "Miqyas qənaəti nədir?", options: ["Kiçik miqyasda istehsalın üstünlüyü", "İstehsal həcmi artdıqca vahid xərcin azalması", "İstehsalın dayandırılması", "Bazardan çıxılması", "Qiymət artırılması"], answer: 1 },
    { question: "Əvəzedici mallar nədir?", options: ["Birlikdə istifadə olunan mallar", "Biri digərinin yerini tuta bilən mallar", "Bir-birisiz istifadə edilə bilməyən mallar", "Eyni qiymətli mallar", "Eyni keyfiyyətli mallar"], answer: 1 },
    { question: "Tamamlayıcı mallar nədir?", options: ["Biri digərinin yerini tutan mallar", "Birlikdə istifadə olunan mallar", "Rəqib mallar", "Eyni qiymətli mallar", "Lüks mallar"], answer: 1 },
    { question: "Normal mal nədir?", options: ["Gəlir artdıqca tələb azalan mal", "Gəlir artdıqca tələb artan mal", "Qiymətdən asılı olmayan mal", "Tələbsiz mal", "İnferior mal"], answer: 1 },
    { question: "İnferior mal nədir?", options: ["Gəlir artdıqca tələb artan mal", "Gəlir artdıqca tələb azalan mal", "Lüks mal", "Normal mal", "Sabit tələbli mal"], answer: 1 },
    { question: "Tixenin malı nədir?", options: ["Qiymət artdıqca tələb azalan mal", "Qiymət artdıqca tələb artan mal", "Əvəzedici mal", "Normal mal", "Tamamlayıcı mal"], answer: 1 },
    { question: "Rentabellik nədir?", options: ["Ümumi xərc", "Mənfəətin gəlirə və ya kapitala olan nisbəti", "İstehsal həcmi", "Satış qiyməti", "Xərclər toplusu"], answer: 1 },
    { question: "Büdcə kəsiri nə zaman olur?", options: ["Xərclər < Gəlirlər", "Xərclər > Gəlirlər", "Xərclər = Gəlirlər", "İxrac > İdxal", "İdxal > İxrac"], answer: 1 },
    { question: "Ticaret balansı nədir?", options: ["Büdcə balansı", "İxrac və idxal arasındakı fərq", "Bank balansı", "Mühasibat balansı", "Ödəniş balansı"], answer: 1 },
    { question: "Kütləvi məhsul istehsalı nə üstünlük verir?", options: ["Daha yüksək qiymət", "Daha aşağı vahid xərci", "Daha az satış", "Daha az mənfəət", "Daha az işçi"], answer: 1 },
  ],

  menecment: [
    { question: "Menecment nədir?", options: ["Yalnız istehsalın idarə edilməsi", "Təşkilatın məqsədlərini gerçəkləşdirmək üçün resursların planlaşdırılması, təşkili, rəhbərliyi və nəzarəti", "Yalnız maliyyənin idarəsi", "Mühasibat prosesi", "Satış prosesi"], answer: 1 },
    { question: "İdarəetmənin əsas funksiyaları hansılardır?", options: ["Planlaşdırma, marketing, satış", "Planlaşdırma, təşkil, rəhbərlik, nəzarət", "İstehsal, satış, reklam", "Maliyyə, uçot, audit", "Kadr, hüquq, texnologiya"], answer: 1 },
    { question: "Strateji idarəetmə nədir?", options: ["Günlük əməliyyatların idarəsi", "Uzunmüddətli məqsəd və strategiyaların müəyyənləşdirilməsi", "Yalnız maliyyə idarəsi", "Kadrların idarəsi", "Texnologiya idarəsi"], answer: 1 },
    { question: "SWOT analizi nəyi əhatə edir?", options: ["Satış, Qazan, Əldə et, Transfer", "Güclü cəhətlər, Zəif cəhətlər, İmkanlar, Təhdidlər", "Strateji, Ağıllı, Oriyentasiya, Texnologiya", "Bazar, Rəqabət, Xərc, Keyfiyyət", "Sürət, Çeviklik, Keyfiyyət, Texnologiya"], answer: 1 },
    { question: "Liderlik nədir?", options: ["Yalnız rəsmi vəzifə sahibi olmaq", "Başqalarına təsir etmək və onları məqsədə doğru istiqamətləndirmək bacarığı", "Yalnız əmr vermək", "Yalnız nəzarət etmək", "Yalnız planlaşdırmaq"], answer: 1 },
    { question: "Motivasiya nədir?", options: ["İşçiləri cəzalandırmaq", "İşçiləri məqsədlər uğrunda fəaliyyətə sövq edən daxili və xarici amillər", "Yalnız pul mükafatı", "Yalnız terfi", "Yalnız nəzarət"], answer: 1 },
    { question: "Maslow-un ehtiyaclar iyerarxiyası neçə səviyyədən ibarətdir?", options: ["3", "4", "5", "6", "7"], answer: 2 },
    { question: "Delegasiya nədir?", options: ["Vəzifənin artırılması", "Səlahiyyət və məsuliyyətin aşağı vəzifəlilərə verilməsi", "İşdən çıxarılma", "Mükafat verilməsi", "Cəza tətbiqi"], answer: 1 },
    { question: "Kommunikasiya idarəetmədə nə üçün vacibdir?", options: ["Sənədləşmə üçün", "Məlumat mübadiləsi, əlaqələndirmə və qərar qəbulu üçün", "Yalnız xarici əlaqələr üçün", "Yalnız maliyyə üçün", "Yalnız istehsal üçün"], answer: 1 },
    { question: "Qrup dinamikası nədir?", options: ["Fərdi davranış", "Qrup üzvlərinin bir-birinə qarşılıqlı təsiri", "Rəsmi struktur", "İerarxiya", "Büdcə planı"], answer: 1 },
    { question: "İş strukturu nədir?", options: ["Vəzifə siyahısı", "Təşkilatdakı vəzifə münasibətlərinin sistemi", "Əmək haqqı cədvəli", "Məhsul kataloqu", "Satış planı"], answer: 1 },
    { question: "Nəzarətin məqsədi nədir?", options: ["İşçiləri izləmək", "Planlaşdırılmış nəticələrin əldə edilib-edilmədiyini yoxlamaq", "Xərclərə qənaət etmək", "İş vaxtını azaltmaq", "Qazancı maksimuma çatdırmaq"], answer: 1 },
    { question: "Xarizma nədir?", options: ["Rəsmi vəzifə", "Liderlik üçün şəxsiyyətin cəlbedici keyfiyyəti", "Pul mükafatı", "Hüquqi güc", "Texniki bacarıq"], answer: 1 },
    { question: "Qərar qəbul prosesinin birinci addımı nədir?", options: ["Alternativlərin qiymətləndirilməsi", "Problemin müəyyənləşdirilməsi", "Alternativlərin seçilməsi", "Həllin tətbiqi", "Nəticənin yoxlanması"], answer: 1 },
    { question: "Layihə menecmenti nədir?", options: ["Gündəlik fəaliyyətin idarəsi", "Müvəqqəti layihəni müəyyən məqsəd üçün planlaşdırıb idarə etmək", "Müəssisənin uzunmüddətli idarəsi", "Yalnız maliyyənin idarəsi", "Yalnız kadrların idarəsi"], answer: 1 },
    { question: "Konfliktin müsbət cəhəti ola bilərmi?", options: ["Xeyr, konflikt həmişə zərərlidir", "Bəli, konflikt yeni ideyaların yaranmasına kömək edə bilər", "Yalnız xarici konfliktin müsbət cəhəti var", "Yalnız aşağı səviyyəli işçilərarası konfliktin", "Yalnız menecerlərarası konfliktin"], answer: 1 },
    { question: "İnsan resursları menecmenti nəyi əhatə edir?", options: ["Yalnız işə qəbul", "İşə qəbul, inkişaf, motivasiya, qiymətləndirmə, kompensasiya", "Yalnız əmək haqqı hesablanması", "Yalnız tərxis", "Yalnız ixtisasartırma"], answer: 1 },
    { question: "Korporativ mədəniyyət nədir?", options: ["Şirkətin binasının dizaynı", "Şirkətin dəyərləri, normaları, davranış qaydaları toplusu", "Şirkətin məhsulları", "Şirkətin logosu", "Şirkətin büdcəsi"], answer: 1 },
    { question: "Məhsulun həyat dövrü neçə mərhələdən ibarətdir?", options: ["2", "3", "4", "5", "6"], answer: 2 },
    { question: "Benchmarking nədir?", options: ["Yalnız daxili proseslərin yoxlanması", "Öz fəaliyyətini aparıcı rəqiblərlə müqayisə etmək", "Yalnız maliyyə analizi", "Müştəri şikayətlərinin analizi", "İşçilərin qiymətləndirilməsi"], answer: 1 },
    { question: "TQM nədir?", options: ["Texnoloji Qiymətləndirmə Modeli", "Ümumi Keyfiyyət Menecmenti", "Ticarət Qaydaları Məcəlləsi", "Texniki Qiymət Metodologiyası", "Transmilli Qiymət Mexanizmi"], answer: 1 },
    { question: "ERP sistemi nədir?", options: ["Elektron Rahat Proqram", "Müəssisə Resurslarının Planlaşdırılması Sistemi", "Elektron Ödəniş Rejimi", "Əmək haqlarının Proqramı", "Energetika Resurslarının Paylanması"], answer: 1 },
    { question: "Outsourcing nədir?", options: ["Daxili resursları genişləndirmək", "Müəyyən funksiyaları xarici şirkətlərə tapşırmaq", "Yeni bazar açmaq", "Yeni məhsul istehsal etmək", "Filiallar açmaq"], answer: 1 },
    { question: "Balanced Scorecard nədir?", options: ["Mühasibat cədvəli", "Müxtəlif perspektivlər üzrə fəaliyyətin ölçülməsi sistemi", "Bank hesabı", "Vergi bəyannaməsi", "Müqavilə forması"], answer: 1 },
    { question: "Qloballaşma menecmentə necə təsir edir?", options: ["Heç bir təsir etmir", "Beynəlxalq rəqabət, müxtəlif mədəniyyətlərlə iş, yeni imkanlar", "Yalnız mənfi təsir edir", "Yalnız kiçik müəssisələrə təsir edir", "Yalnız ixracatçılara təsir edir"], answer: 1 },
  ],

  maliyye: [
    { question: "Maliyyə nədir?", options: ["Yalnız pul əməliyyatları", "Pul fondlarının formalaşması, bölüşdürülməsi və istifadəsi ilə bağlı münasibətlər", "Yalnız dövlət büdcəsi", "Yalnız bank fəaliyyəti", "Yalnız sığorta"], answer: 1 },
    { question: "Dövlət büdcəsi nədir?", options: ["Şirkətin maliyyə planı", "Dövlətin gəlir və xərclərini əhatə edən əsas maliyyə sənədi", "Bank balansı", "Ticarət balansı", "Sığorta fondu"], answer: 1 },
    { question: "Faiz dərəcəsi nədir?", options: ["Vergi dərəcəsi", "Kreditin istifadəsi üçün ödənilən haqqın miqdarı", "İnflyasiya dərəcəsi", "Valyuta məzənnəsi", "Divident dərəcəsi"], answer: 1 },
    { question: "Kapitalın dəyəri nədir?", options: ["Əmlakın qiyməti", "Kapitalın istifadəsi üçün ödənilən xərc", "Satış qiyməti", "İstehsal xərci", "Bazar qiyməti"], answer: 1 },
    { question: "Likvidlik nədir?", options: ["Mənfəətlilik", "Aktivlərin tez nağd pula çevrilmə qabiliyyəti", "Borcluluq nisbəti", "Rentabellik", "Kapital strukturu"], answer: 1 },
    { question: "Dividend nədir?", options: ["İstiqraz gəliri", "Aksiya sahiblərinə şirkətin mənfəətindən ödənilən pay", "Bank faizi", "Kredit ödənişi", "Vergi ödənişi"], answer: 1 },
    { question: "Aksiya nədir?", options: ["Borc sənədi", "Şirkətin kapitalında paya sahib olmağı təsdiq edən qiymətli kağız", "Bank çeki", "Müqavilə", "Hesab-faktura"], answer: 1 },
    { question: "İstiqraz nədir?", options: ["Kapital qiymətli kağızı", "Emitentin alıcı qarşısında borcunu təsdiq edən qiymətli kağız", "Dividend sənədi", "Aksiya növü", "Bank depoziti"], answer: 1 },
    { question: "Leasing nədir?", options: ["Aktivlərin satışı", "Aktivlərin icarəyə verilməsi, bəzən sonunda mülkiyyətə keçmə hüququ ilə", "Bank krediti növü", "Sığorta növü", "Fond əməliyyatı"], answer: 1 },
    { question: "Faktoring nədir?", options: ["İstehsal prosesi", "Debitor borclarının xüsusi şirkətlərə satılması", "Kredit növü", "Sığorta növü", "Lizinq növü"], answer: 1 },
    { question: "Fond birjası nədir?", options: ["Bank filialı", "Qiymətli kağızların alınıb-satıldığı təşkilatlanmış bazar", "Sığorta şirkəti", "Xarici valyuta bazarı", "Əmtəə bazarı"], answer: 1 },
    { question: "Gəlir vergisi nədir?", options: ["Dövriyyəyə görə vergi", "Fiziki şəxslərin gəlirindən alınan vergi", "Əmlaqa görə vergi", "İdxal vergisi", "Əlavə dəyər vergisi"], answer: 1 },
    { question: "ƏDV nədir?", options: ["Əmək haqqından vergi", "Malların istehsalı və satışının hər mərhələsində yaranan dəyərə görə vergi", "Mənfəət vergisi", "Gömrük vergisi", "Torpaq vergisi"], answer: 1 },
    { question: "Maliyyə riski nədir?", options: ["İstehsal riski", "Müəssisənin maliyyə öhdəliklərini yerinə yetirə bilməmə riski", "Texnoloji risk", "Bazar riski", "Hüquqi risk"], answer: 1 },
    { question: "Portfel diversifikasiyası nəyə xidmət edir?", options: ["Gəliri maksimuma çatdırır", "Müxtəlif aktivlərə investisiya yerləşdirərək riski azaltır", "Vergiləri azaldır", "Likvifliyi artırır", "Kapitalı azaldır"], answer: 1 },
    { question: "Pul bazarı nədir?", options: ["Uzunmüddətli maliyyə aləti bazarı", "Qısamüddətli borc alətlərinin alınıb-satıldığı bazar", "Əmtəə bazarı", "Valyuta bazarı", "Fond bazarı"], answer: 1 },
    { question: "Kapital bazarı nədir?", options: ["Qısamüddətli borc bazarı", "Uzunmüddətli maliyyə alətlərinin bazarı", "Pul bazarı", "Əmtəə bazarı", "Sığorta bazarı"], answer: 1 },
    { question: "Xalis cari dəyər (NPV) nədir?", options: ["Ümumi gəlir", "Gələcək pul axınlarının cari dəyərinin ilkin investisiyadan çıxılması", "Mənfəət nisbəti", "Gəlirlilik indeksi", "Geri qaytarılma müddəti"], answer: 1 },
    { question: "Daxili gəlirlilik norması (IRR) nədir?", options: ["Xarici faiz dərəcəsi", "NPV-ni sıfıra bərabər edən diskont dərəcəsi", "Minimum faiz dərəcəsi", "Bank faizi", "İnflyasiya dərəcəsi"], answer: 1 },
    { question: "Maliyyə levereci nədir?", options: ["İstehsal həcmi artımı", "Borc kapitalından istifadənin öz kapitalına gəliri necə artırdığı", "Dividend siyasəti", "Amortizasiya", "Aktivlərin növü"], answer: 1 },
    { question: "Kredit reytinqi nədir?", options: ["Şirkətin bazar qiyməti", "Borcalanın kredit öhdəliklərini yerinə yetirmə qabiliyyətinin qiymətləndirilməsi", "Dividend miqdarı", "Satış həcmi", "Mənfəət marjası"], answer: 1 },
    { question: "Maliyyə planlaşdırması nədir?", options: ["Yalnız büdcə hazırlamaq", "Gəlir, xərc, investisiya və maliyyələşmə mənbələrinin müəyyənləşdirilməsi", "Yalnız kredit götürmək", "Yalnız vergi hesablamaq", "Yalnız gəlir artırmaq"], answer: 1 },
    { question: "Mübadiləli ödəniş nədir?", options: ["Bank köçürməsi", "Birbaşa mallar mübadiləsi (barter)", "Kredit ödənişi", "Vergi ödənişi", "Dividend ödənişi"], answer: 1 },
    { question: "Maliyyə hesabatlarının istifadəçiləri kimdir?", options: ["Yalnız mühasibatlıq şöbəsi", "İnvestorlar, kreditçilər, idarəçilər, tənzimləyicilər", "Yalnız vergi orqanları", "Yalnız banklar", "Yalnız müştərilər"], answer: 1 },
    { question: "Sığorta nədir?", options: ["Mənfəətin bölüşdürülməsi", "Gözlənilməz itkilərə qarşı maliyyə müdafiəsi", "Kredit növü", "İnvestisiya növü", "Fond növü"], answer: 1 },
  ],

  statistika: [
    { question: "Statistika nədir?", options: ["Yalnız rəqəm toplama", "Məlumatların toplanması, təhlili, şərhi və təqdim edilməsi elmi", "Yalnız ehtimal hesabı", "Yalnız cədvəl hazırlamaq", "Yalnız qrafik çizmək"], answer: 1 },
    { question: "Orta ədəd necə hesablanır?", options: ["Ən böyük dəyər - Ən kiçik dəyər", "Bütün dəyərlərin cəminin sayına bölünməsi", "Yalnız ən çox təkrarlanan dəyər", "Ortadakı dəyər", "Cəm × say"], answer: 1 },
    { question: "Mediana nədir?", options: ["Ən çox təkrarlanan dəyər", "Sıralanmış məlumat sırasının ortadakı dəyəri", "Orta ədəd", "Maksimum dəyər", "Minimum dəyər"], answer: 1 },
    { question: "Moda nədir?", options: ["Orta ədəd", "Yenə ən çox təkrarlanan dəyər", "Mediana", "Maksimum dəyər", "Dispersiya"], answer: 1 },
    { question: "Dispersiya nəyi ölçür?", options: ["Mərkəzi meyl", "Dəyərlərin orta ədəddən sapma dərəcəsini", "Məlumatların toplanma üsulunu", "Minimum dəyəri", "Maksimum dəyəri"], answer: 1 },
    { question: "Standart sapma nədir?", options: ["Dispersiyanın özü", "Dispersiyanın kvadrat kökü", "Orta ədəd", "Mediana", "Moda"], answer: 1 },
    { question: "Korrelyasiya nəyi ölçür?", options: ["İki dəyişən arasındakı asılılığın istiqaməti və gücü", "Orta ədəd", "Dispersiya", "Məlumat dəqiqliyi", "Öyrənkə daxildir"], answer: 0 },
    { question: "Regressiya analizi nəyə xidmət edir?", options: ["Məlumat toplanması", "Bir dəyişənin başqa dəyişəndən asılılığını modelləşdirmək", "Dispersiya hesablanması", "Ehtimal hesablanması", "Mediana tapılması"], answer: 1 },
    { question: "Ehtimal nədir?", options: ["Hadisənin baş vermə tezliyi", "Hadisənin baş vermə ehtimalının ölçüsü", "Statistik sapma", "Orta dəyər", "Dispersiya"], answer: 1 },
    { question: "Seçmə nədir?", options: ["Bütün əhali", "Ümumi kütlənin nümayəndəlik edir bir hissəsi", "Yalnız maksimum dəyərlər", "Yalnız minimum dəyərlər", "Bütün dəyərlər"], answer: 1 },
    { question: "Hipotez yoxlanması nədir?", options: ["Məlumat toplanması", "Statistik fərziyyənin doğru olub-olmadığının yoxlanılması", "Qrafik hazırlanması", "Cədvəl hazırlanması", "Orta hesablanması"], answer: 1 },
    { question: "Konfidensiya intervalı nədir?", options: ["Maksimum dəyər aralığı", "Parametrin müəyyən ehtimalla daxilə düşdüyü aralıq", "Dispersiya", "Standart sapma", "Moda aralığı"], answer: 1 },
    { question: "Variasiya əmsalı nəyə görə istifadə olunur?", options: ["Orta hesablamaq üçün", "Müxtəlif ölçü vahidli topluları müqayisə etmək üçün", "Dispersiya hesablamaq üçün", "Mediana tapmaq üçün", "Moda tapmaq üçün"], answer: 1 },
    { question: "Çoxlu xətti reqressiya neçə müstəqil dəyişən ehtiva edir?", options: ["Yalnız bir", "İki və ya daha çox", "Heç biri", "Yalnız iki", "Yalnız üç"], answer: 1 },
    { question: "Zaman sırası nədir?", options: ["Təsadüfi məlumatlar", "Ardıcıl vaxt nöqtələrindəki ölçümlər toplusu", "Seçmə növü", "Dispersiya növü", "Ehtimal növü"], answer: 1 },
    { question: "İndeks nədir?", options: ["Tam dəyər", "Müxtəlif dövrlərdə dəyişənin nisbi dəyişimini ölçən kəmiyyət", "Orta dəyər", "Standart sapma", "Dispersiya"], answer: 1 },
    { question: "Çoxluq nədir?", options: ["Seçmə", "Araşdırılan bütün elementlər toplusu", "Dispersiya", "Mediana", "Ehtimal"], answer: 1 },
    { question: "I növ səhv nədir?", options: ["Yanlış hipotezi qəbul etmək", "Doğru hipotezi rədd etmək", "Nümunə götürmək", "Dispersiya hesablamaq", "Korrelyasiya tapmaq"], answer: 1 },
    { question: "II növ səhv nədir?", options: ["Doğru hipotezi rədd etmək", "Yanlış hipotezi qəbul etmək", "Nümunə götürmək", "Orta hesablamaq", "Moda tapmaq"], answer: 1 },
    { question: "p-dəyər nədir?", options: ["Ehtimal intervalı", "Müşahidə edilmiş nəticənin null hipotez altında baş vermə ehtimalı", "Dispersiya dəyəri", "Orta dəyər", "Moda dəyəri"], answer: 1 },
    { question: "Variasiya silsiləsi nədir?", options: ["Sıralanmış məlumat", "Dəyişənin minimum-dan maksimuma kimi bütün dəyərlərinin cədvəli", "Dispersiya cədvəli", "Ehtimal cədvəli", "Korrelyasiya cədvəli"], answer: 1 },
    { question: "Dinamika sırası nədir?", options: ["Territorial məlumatlar", "Eyni hadisənin ardıcıl zaman dövrlərindəki dəyərləri", "Seçmə növü", "Dispersiya növü", "Ehtimal növü"], answer: 1 },
    { question: "Toplanma sırasının əsas xüsusiyyəti nədir?", options: ["Bütün dəyərlər bərabərdir", "Məlumatların qruplara bölünməsi", "Yalnız positiv dəyərlər var", "Yalnız neqativ dəyərlər var", "Heç bir xüsusiyyəti yoxdur"], answer: 1 },
    { question: "Kənar dəyər (outlier) nədir?", options: ["Orta dəyər", "Digər dəyərlərdən kəskin fərqlənən dəyər", "Minimum dəyər", "Maksimum dəyər", "Moda dəyəri"], answer: 1 },
    { question: "Normal paylanma hansı formaya malikdir?", options: ["Düzbucaqlı", "Zəng şəkli", "Üçbucaq", "Dairə", "Xətti"], answer: 1 },
  ],
};

// ── State ──────────────────────────────────────────────────
let testState = {
  subject: 'muhasibat',
  count: 20,
  quiz: [],
  current: 0,
  answers: {},
  timerSec: 0,
  timerInterval: null,
  submitted: false,
};

// ── Subject & Count Pickers ─────────────────────────────────
function selectTestSubject(btn) {
  document.querySelectorAll('.test-subject-chip').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  testState.subject = btn.dataset.subject;
  updateBankInfo();
}

function selectTestCount(btn) {
  document.querySelectorAll('.test-count-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  testState.count = parseInt(btn.dataset.count);
  updateBankInfo();
}

function updateBankInfo() {
  const bank = QUESTION_BANK[testState.subject] || [];
  const el = document.getElementById('testBankInfo');
  if (el) {
    if (bank.length < testState.count) {
      el.textContent = `⚠️ Bu fənndə yalnız ${bank.length} sual var. Seçilən say azaldılacaq.`;
      el.style.color = 'var(--accent2, #f97316)';
    } else {
      el.textContent = `✓ ${bank.length} sualdan ${testState.count} random seçiləcək.`;
      el.style.color = 'var(--accent, #3b82f6)';
    }
  }
}

// ── Start Test ──────────────────────────────────────────────
function startTest() {
  const bank = QUESTION_BANK[testState.subject] || [];
  const count = Math.min(testState.count, bank.length);
  if (bank.length === 0) {
    alert('Bu fənn üçün hələ sual əlavə edilməyib.');
    return;
  }
  const shuffled = [...bank].sort(() => Math.random() - 0.5);
  testState.quiz = shuffled.slice(0, count);
  testState.current = 0;
  testState.answers = {};
  testState.submitted = false;
  testState.timerSec = 0;
  testState.totalTimerSec = count * 60;

  show('test-start-screen', false);
  show('test-quiz-screen', true);
  show('test-result-screen', false);

  renderQuestion();
  startTimer();
}

// ── Timer ───────────────────────────────────────────────────
// 1 minute per question (e.g. 20 questions = 20 minutes)
function startTimer() {
  clearInterval(testState.timerInterval);
  const totalSeconds = testState.quiz.length * 60; // 1 min per question
  testState.timerSec = totalSeconds;
  testState.totalTimerSec = totalSeconds;

  _updateTimerDisplay();

  testState.timerInterval = setInterval(() => {
    testState.timerSec--;
    _updateTimerDisplay();

    if (testState.timerSec <= 0) {
      stopTimer();
      if (!testState.submitted) {
        testState.submitted = true;
        // Flash the timer red before auto-submitting
        const el = document.getElementById('testTimer');
        if (el) {
          el.classList.add('test-timer-expired');
          el.textContent = '⏱ 00:00';
        }
        setTimeout(() => submitTest(), 600);
      }
    }
  }, 1000);
}

function _updateTimerDisplay() {
  const sec = testState.timerSec;
  const m = String(Math.floor(sec / 60)).padStart(2, '0');
  const s = String(sec % 60).padStart(2, '0');
  const el = document.getElementById('testTimer');
  if (!el) return;

  el.textContent = `⏱ ${m}:${s}`;

  // Color states: normal → warning (≤25%) → danger (≤10%)
  const pct = sec / testState.totalTimerSec;
  el.classList.remove('test-timer-warning', 'test-timer-danger', 'test-timer-expired');
  if (pct <= 0.10) {
    el.classList.add('test-timer-danger');
  } else if (pct <= 0.25) {
    el.classList.add('test-timer-warning');
  }

  // Update the circular progress ring if it exists
  const ring = document.getElementById('testTimerRing');
  if (ring) {
    const circumference = 2 * Math.PI * 18; // r=18
    const offset = circumference * (1 - pct);
    ring.style.strokeDashoffset = offset;
    ring.style.stroke = pct <= 0.10 ? '#ef4444' : pct <= 0.25 ? '#f97316' : 'var(--accent)';
  }
}

function stopTimer() {
  clearInterval(testState.timerInterval);
}

// ── Render Question ─────────────────────────────────────────
function renderQuestion() {
  const { quiz, current, answers } = testState;
  const q = quiz[current];
  if (!q) return;

  const total = quiz.length;
  document.getElementById('testProgressLabel').textContent = `${current + 1} / ${total}`;
  const pct = ((current + 1) / total) * 100;
  document.getElementById('testProgressBar').style.width = pct + '%';

  const isLast = current === total - 1;
  const nextBtn = document.getElementById('testNextBtn');
  const submitBtn = document.getElementById('testSubmitBtn');
  const prevBtn = document.getElementById('testPrevBtn');

  prevBtn.disabled = current === 0;
  if (isLast) {
    nextBtn.classList.add('hidden');
    submitBtn.classList.remove('hidden');
  } else {
    nextBtn.classList.remove('hidden');
    submitBtn.classList.add('hidden');
  }

  const container = document.getElementById('testQuestionContainer');
  const saved = answers[current];

  let html = `<div class="test-question-box">
    <div class="test-q-num">Sual ${current + 1}</div>
    <p class="test-q-text">${q.question}</p>
    <div class="test-options">`;

  q.options.forEach((opt, i) => {
    const checked = saved === i ? 'checked' : '';
    const selectedClass = saved === i ? 'test-opt-selected' : '';
    html += `<label class="test-option ${selectedClass}">
      <input type="radio" name="testQ" value="${i}" ${checked} onchange="saveAnswer(${i})">
      <span class="test-opt-letter">${String.fromCharCode(65 + i)}</span>
      <span class="test-opt-text">${opt}</span>
    </label>`;
  });

  html += `</div></div>`;
  container.innerHTML = html;
}

function saveAnswer(val) {
  testState.answers[testState.current] = val;
  // Re-render options styling without full re-render
  document.querySelectorAll('.test-option').forEach((el, i) => {
    el.classList.toggle('test-opt-selected', i === val);
  });
}

function nextQuestion() {
  if (testState.current < testState.quiz.length - 1) {
    testState.current++;
    renderQuestion();
  }
}

function prevQuestion() {
  if (testState.current > 0) {
    testState.current--;
    renderQuestion();
  }
}

// ── Submit ──────────────────────────────────────────────────
function submitTest() {
  stopTimer();
  testState.submitted = true;

  const { quiz, answers } = testState;
  let correct = 0;
  const wrong = [];

  quiz.forEach((q, i) => {
    const userAns = answers[i];
    if (userAns === q.answer) {
      correct++;
    } else {
      wrong.push({ q, userAns, i });
    }
  });

  const total = quiz.length;
  const pct = Math.round((correct / total) * 100);
  const used = testState.totalTimerSec - testState.timerSec;
  const m = String(Math.floor(used / 60)).padStart(2, '0');
  const s = String(used % 60).padStart(2, '0');

  show('test-quiz-screen', false);
  show('test-result-screen', true);

  let icon = pct >= 85 ? '🏆' : pct >= 60 ? '✅' : pct >= 40 ? '⚡' : '📚';
  let title = pct >= 85 ? 'Əla nəticə!' : pct >= 60 ? 'Yaxşı nəticə' : pct >= 40 ? 'Davam et!' : 'Daha çox çalış';

  document.getElementById('testResultIcon').textContent = icon;
  document.getElementById('testResultTitle').textContent = title;
  document.getElementById('testResultScore').textContent = `${correct} / ${total}`;
  document.getElementById('testResultPercent').textContent = `${pct}%`;

  const bar = document.getElementById('testResultBar');
  bar.style.width = '0%';
  setTimeout(() => { bar.style.width = pct + '%'; }, 100);

  const barColor = pct >= 85 ? '#22c55e' : pct >= 60 ? '#3b82f6' : pct >= 40 ? '#f97316' : '#ef4444';
  bar.style.background = barColor;

  document.getElementById('testResultStats').innerHTML =
    `<div class="trs-item trs-correct">✓ Düzgün: ${correct}</div>
     <div class="trs-item trs-wrong">✗ Səhv: ${total - correct}</div>
     <div class="trs-item trs-time">⏱ Vaxt: ${m}:${s}</div>`;

  // Review
  const reviewEl = document.getElementById('testReviewList');
  if (wrong.length === 0) {
    reviewEl.innerHTML = '<p class="test-review-empty">Bütün sualları düzgün cavabladınız! 🎉</p>';
  } else {
    reviewEl.innerHTML = wrong.map(({ q, userAns, i }) => {
      const userLabel = userAns !== undefined ? `${String.fromCharCode(65 + userAns)}) ${q.options[userAns]}` : 'Cavablanmadı';
      const correctLabel = `${String.fromCharCode(65 + q.answer)}) ${q.options[q.answer]}`;
      return `<div class="test-review-item">
        <div class="test-review-q">${i + 1}. ${q.question}</div>
        <div class="test-review-user">❌ Sizin: ${userLabel}</div>
        <div class="test-review-correct">✓ Düzgün: ${correctLabel}</div>
      </div>`;
    }).join('');
  }
}

function retryTest() {
  show('test-result-screen', false);
  show('test-start-screen', true);
  updateBankInfo();
}

function exitTest() {
  stopTimer();
  show('test-quiz-screen', false);
  show('test-result-screen', false);
  show('test-start-screen', true);
  updateBankInfo();
}

// ── Helpers ─────────────────────────────────────────────────
function show(id, visible) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.toggle('hidden', !visible);
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  updateBankInfo();
});
