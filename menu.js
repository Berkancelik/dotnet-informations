const menuData = [
    {
        title: "Ana Sayfa",
        link: "../..",
        subMenu: []
    },
    {
        title: ".Net CLI",
        subMenu: [
            { title: ".NET CLI Nedir ve Nasıl Kullanılır?", link: "dotnet-cli/dotnet-cli-nedir-ve-nasil-kullanilir/" }
        ]
    },
    {
        title: "Entity Framework",
        subMenu: [
            { title: "Entity Framework Nedir?", link: "entity-framework/entity-framework-nedir-orm-teknolojisine-genel-bakis/" },
            { title: "N+1 Problemi Nedir?", link: "../../entity-framework/n-arti-bir-problemi-nedir/" },
            { title: "Transaction Yönetimi", link: "entity-framework/entity-framework-de-transaction-yonetimi-ve-en-iyi-uygulamalar/" }
        ]
    },
    {
        title: "Logging",
        subMenu: [
            { title: "Serilog", link: "./" },
            { title: "NLog", link: "logging/nlog/" },
            { title: "Splunk", link: "../../logging/splunk/" },
            { title: "New Relic", link: "logging/new-relic/" }
        ]
    },

    {
        title: ".Net CLI",
        subMenu: [
            { title: ".NET CLI Nedir ve Nasıl Kullanılır?", link: "../../dotnet-cli/dotnet-cli-nedir-ve-nasil-kullanilir/" },
            { title: ".NET CLI ile Yeni Proje Oluşturma", link: "../../dotnet-cli/dotnet-cli-ile-yeni-proje-olusturma/" },
            { title: ".NET CLI ile Proje Şablonları Kullanımı", link: "../../dotnet-cli/dotnet-cli-ile-proje-sablonlari-kullanimi/" },
            { title: ".NET CLI ile Bağımlılık Yönetimi", link: "../../dotnet-cli/dotnet-cli-ile-bagimlilik-yonetimi/" },
            { title: ".NET CLI ile Proje Derleme ve Çalıştırma", link: "../../dotnet-cli/dotnet-cli-ile-proje-derleme-ve-calistirma/" },
            { title: ".NET CLI ile Unit Test Çalıştırma", link: "../../dotnet-cli/dotnet-cli-ile-unit-test-calistirma/" },
            { title: ".NET CLI Komutları: Temel Rehber", link: "../../dotnet-cli/dotnet-cli-komutlari-temel-rehber" },
            { title: ".NET CLI ile Global Araçlar (Global Tools) Kullanımı", link: "../../dotnet-cli/dotnet-cli-ile-global-araclar-global-tools-kullanimi/" },
            { title: ".NET CLI ile Projeyi Yayınlama (Publishing)", link: "../../dotnet-cli/net-ile-projeyi-yayinlama/" },
            { title: ".NET CLI İle RESTful API Oluşturma", link: "../../dotnet-cli/dotnet-cli-ile-restful-api-olusturma/" },
            { title: ".NET CLI Komutları ile Migration Yönetimi", link: "../../dotnet-cli/dotnet-cli-komutlari-ile-migration-yonetimi/" },
            { title: ".NET CLI Kullanarak Docker İmajı Hazırlama", link: "../../dotnet-cli/dotnet-cli-kullanarak-docker-imaji-hazirlama/" },
            { title: ".NET CLI ile Performans Analizi", link: "../../dotnet-cli/dotnet-cli-ile-performans-analizi/" },
            { title: ".NET CLI ve Git Entegrasyonu", link: "../../dotnet-cli/dotnet-cli-ve-git-entegrasyonu/" },
            { title: ".NET CLI Kullanarak Multi-Platform Projeler Geliştirme", link: "../../dotnet-cli/dotnet-cli-kullanarak-multi-platform-projeler-gelistirme/" },
            { title: ".NET CLI ile OpenAPI Desteği Eklemek", link: "../../dotnet-cli/adding-openapi-support/" },
            { title: ".NET CLI ile Blazor Projesi Oluşturma", link: "../../dotnet-cli/dotnet-cli-ile-blazor-projesi-olusturma/" },
            { title: ".NET CLI ile Minimal API Başlangıcı", link: "../../dotnet-cli/dotnet-cli-ile-minimal-api-baslangici/" },
            { title: ".NET CLI Kullanarak CI/CD Süreçleri Otomasyonu", link: "../../dotnet-cli/dotnet-kullanilarak-ci-cd-surecleri-otomasyonu/" }
        ]
    },
    {
        "title": "Entity Framework",
        "subMenu": [
            { "title": "Entity Framework Nedir? ORM Teknolojisine Genel Bakış", "link": "../../entity-framework/entity-framework-nedir-orm-teknolojisine-genel-bakis/" },
            { "title": "Entity Framework Core’un Avantajları ve Dezavantajları", "link": "../../entity-framework/entity-framework-core-avantajlari-ve-dezavantajlari/" },
            { "title": "Entity Framework Core Nasıl Kurulur? İlk Adımlar ve Proje Yapılandırması", "link": "../../entity-framework/entity-framework-core-nasil-kurulur-ilk-adimlar-ve-proje-yapilandirmasi/" },
            { "title": "Entity Framework ile Code-First ve Database-First Yaklaşımlarına Giriş", "link": "../../entity-framework/entity-framework-ile-code-first-ve-database-first-yaklasimlarina-giris/" },
            { "title": "Entity Framework Core için Gereksinimler ve Desteklenen Veritabanları", "link": "../../entity-framework/entity-framework-core-icin-gereksinimler-ve-desteklenen-veritabanlari/" },
            { "title": "Proje Yapılandırması: Connection String ve DbContext Ayarları", "link": "../../entity-framework/proje-yapilandirmasi-connection-string-ve-dbcontext-ayarlari/" },
            { "title": "Entity Framework ile Veritabanı İşlemleri: CRUD Operasyonları", "link": "../../entity-framework/entity-framework-ile-veritabani-islemleri-crud-operasyonlari/" },
            { "title": "Migration Nedir? Migration Yönetimi ve İlk Migration’ın Oluşturulması", "link": "../../entity-framework/migration-nedir-migration-yonetimi-ve-ilk-migration-olusturulmasi/" },
            { "title": "LINQ Sorgularıyla Entity Framework’ü Kullanmak", "link": "../../entity-framework/linq-sorgulariyla-entity-framework-kullanmak/" },
            { "title": "Modelleme: Tablolar Arasında İlişki (One-to-Many, Many-to-Many)", "link": "../../entity-framework/modelleme-tablolar-arasindaki-iliski-one-to-many-many-to-many/" },
            { "title": "Entity Framework’de Veri Doğrulama ve Fluent API Kullanımı", "link": "../../entity-framework/entity-framework-de-veri-dogrulama-ve-fluent-api-kullanimi/" },
            { "title": "Lazy Loading, Eager Loading ve Explicit Loading Nedir? Hangisi Ne Zaman Kullanılır?", "link": "../../entity-framework/lazy-loading-eager-loading-ve-explicit-loading-nedir/" },
            { "title": "Performans Optimizasyonu: AsNoTracking ve NoTracking Queries Kullanımı", "link": "../../entity-framework/performans-optimizasyonu/" },
            { "title": "N+1 Problemi Nedir? Entity Framework ile Çözüm Yöntemleri", "link": "../../entity-framework/n-arti-bir-problemi-nedir/" },
            { "title": "Entity Framework’de Transaction Yönetimi ve En İyi Uygulamalar", "link": "../../entity-framework/entity-framework-de-transaction-yonetimi-ve-en-iyi-uygulamalar/" },
            { "title": "Raw SQL ve Stored Procedure Kullanımı", "link": "../../entity-framework/raw-sql-ve-stored-procedure-kullanimi/" },
            { "title": "Global Query Filters ile Çok Katmanlı Veri Filtreleme", "link": "../../entity-framework/global-query-filters-ile-cok-katmanli-veri-filtreleme/" },
            { "title": "Repository Pattern ve Unit of Work ile Entity Framework Kullanımı", "link": "../../entity-framework/repository-pattern-ve-unit-of-work-ile-entity-framework/" },
            { "title": "Entity Framework ve Dapper Karşılaştırması: Hangi Durumda Hangisini Seçmeli?", "link": "../../entity-framework/entity-framework-vs-dapper/" },
            { "title": "DTO (Data Transfer Object) ile Entity Framework Entegrasyonu", "link": "../../entity-framework/dto-ile-entity-framework-entegrasyonu/" },
            { "title": "CQRS (Command Query Responsibility Segregation) ile Entity Framework Kullanımı", "link": "../../entity-framework/cqrs-ile-entity-framework-kullanimi/" },
            { "title": "Concurrency Control: Çakışma Yönetimi ve RowVersion Kullanımı", "link": "../../entity-framework/concurrency-control/" },
            { "title": "Shadow Properties ve Backing Fields ile Gelişmiş Veri Yönetimi", "link": "../../entity-framework/shadow-properties-ve-backing-fields-ile-gelismis-veri-yonetimi/" },
            { "title": "Owned Entity Types Kullanımı ve Avantajları", "link": "../../entity-framework/owned-entity-types-kullanimi-ve-avantajlari/" },
            { "title": "Migration’da Custom Scripts ve Veri Taşıma Stratejileri", "link": "../../entity-framework/migration-da-custom-scripts-ve-veri-tasima-stratejileri/" },
            { "title": "Value Conversions ile Veri Tipi Dönüşümleri", "link": "../../entity-framework/value-conversions-ile-veri-tipi-donusumleri/" },
            { "title": "Entity Framework Hataları ve Çözüm Yolları: Common Pitfalls", "link": "../../entity-framework/entity-framework-hatalari-ve-cozum-yollari/" },
            { "title": "Timeout Problemleri ve Çözüm Teknikleri", "link": "../../entity-framework/timeout-problemleri-ve-cozum-teknikleri/" },
            { "title": "Entity Framework ile Büyük Veri Setlerini İşlemek: En İyi Yöntemler", "link": "../../entity-framework/entity-framework-ile-buyuk-veri-setlerini-islemek/" },
            { "title": "Migration Çakışmaları ve Versiyonlama Stratejileri", "link": "../../entity-framework/migration-cakismalari-ve-versiyonlama-stratekileri/" }
        ]
    },

    {
        title: "Logging",
        subMenu: [
            { title: "Serilog", link: "../../logging/serilog/" },
            { title: "NLog", link: "../../logging/nlog/" },
            { title: "Microsoft.Extensions.Logging", link: "../../logging/microsoft-extension-logging/" },
            { title: "log4net", link: "../../logging/log4net/" },
            { title: "Elmah (Error Logging Modules and Handlers)", link: "../../logging/elmah/" },
            { title: "Seq", link: "../../logging/seq/" },
            { title: ". Application Insights (Azure Monitor)", link: "../../logging/application-insights/" },
            { title: "Syslog", link: "../../logging/syslog/" },
            { title: "Splunk", link: "../../logging/splunk/" },
            { title: "Elastic Stack (ELK)", link: "../../logging/elastic-stack/" },
            { title: "New Relic", link: "../../logging/new-relic/" }
        ]
    },
    {
        title: "Dapper",
        subMenu: [
            { title: "Dapper Nedir?", link: "../../dapper/dapper-nedir/" },
            { title: "Dapper ve Diğer ORM Araçları (Karşılaştırmalar)", link: "../../dapper/dapper-ve-diger-orm-araclari/" },
            { title: "Dapper’ın Avantajları ve Dezavantajları", link: "../../dapper/dapper-avantajlari-ve-dezavantajlari/" },
            { title: "Dapper Kurulumu ve Başlangıç", link: "../../dapper/dapper-kurulumu-ve-baslangic/" },
            { title: "Dapper ile SQL Bağlantısı (Connection String Kullanımı)", link: "../../dapper/dapper-ile-sql-baglantisi/" },
            { title: "Dapper ile Veri Çekme (Query ve QueryAsync Kullanımı)", link: "../../dapper/dapper-ile-veri-cekme/" },
            { title: "Dapper ile Parametreli Sorgular", link: "../../dapper/dapper-ile-parametreli-srogular/" },
            { title: "Dapper ile Veri Ekleme (Insert İşlemleri)", link: "../../dapper/dapper-ile-veri-ekleme/" },
            { title: "Dapper ile Veri Güncelleme (Update İşlemleri)", link: "../../dapper/dapper-ile-veri-guncelleme/" },
            { title: "Dapper ile Veri Silme (Delete İşlemleri)", link: "../../dapper/dapper-ile-veri-silme/" },
            { title: "Dapper ile Stored Procedure Kullanımı", link: "../../dapper/dapper-ile-stored-procedure-kullanimi/" },
            { title: "Dapper’da Dinamik Sorgular (Dynamic Parameters Kullanımı)", link: "../../dapper/dapper-da-dinamik-sorgular-dynamic-parameters-kullanimi/" },
            { title: "Dapper ile Multiple Mapping", link: "../../dapper/dapper-ile-multiple-mapping/" },
            { title: "Dapper ile Multiple Result Set Yönetimi", link: "../../dapper/dapper-ile-multiple-result-yonetimi/" },
            { title: "Dapper’da Transaction Yönetimi", link: "../../dapper/dapper-da-transaction-yonetimi/" },
            { title: "Dapper ve Performans Optimizasyonları", link: "../../dapper/dapper-ve-performans-optimizasyonlari/" },
            { title: "Dapper ile DTO Kullanımı", link: "../../dapper/dapper-ile-dto-kullanimi/" },
            { title: "Dapper’da Custom Type Mapping (Özel Veri Tiplerini Eşleme)", link: "../../dapper/dapper-da-custom-type-mapping/" },
            { title: "Dapper ile Async/Await Kullanımı", link: "../../dapper/dapper-ile-async-await-kullanimi/" },
            { title: "Dapper ve Unit of Work Deseni", link: "../../dapper/dapper-ve-unit-of-work-deseni/" },
            { title: "Dapper ile Cache Yönetimi (Memory Cache, Redis Kullanımı)", link: "../../dapper/dapper-ile-cache-yonetimi/" },
            { title: "Dapper ile Loglama (Serilog, NLog Entegrasyonu)", link: "../../dapper/dapper-ile-loglama/" },
            { title: "Dapper Kullanırken Sık Yapılan Hatalar ve Çözümleri", link: "../../dapper/dapper-kullanirken-sik-yapilan-hatalar-ve-cozumleri/" },
            { title: "Dapper’ın Geliştirme Sürecindeki Rolü ve Sınırlamaları", link: "../../dapper/dapper-in-gelistrime-surecindeki-rolu-ve-sinirlamari/" },
            { title: "Dapper Kullanırken Mocking ve Test Senaryoları", link: "../../dapper/dapper-kullanirken-mocking-ve-test-senaryorlari/" },
            { title: "Dapper’ın Açık Kaynak Katkıları ve Güncel Durumu", link: "../../dapper/dapper-in-acik-kaynak-katkilari-ve-guncel-durumu/" },
            { title: "Dapper İle Büyük Veri Setleri Üzerinde Çalışma", link: "../../dapper/dapper-ile-buyuk-veri-setleri-uzerinde-calisma/" },
            { title: "Dapper ile Mikroservis Entegrasyonları", link: "../../dapper/dapper-ile-mikroservis-entegrasyonlari/" }
        ]
    },
    {
        title: "NHibernate",
        subMenu: [
            { title: "NHibernate Nedir?", link: "../../nhibernate/nhibernate-nedir" },
            { title: "NHibernate ve ORM (Object-Relational Mapping)", link: "../../nhibernate/nhibernate-ve-orm/" },
            { title: "NHibernate'in Avantaj ve Dezavantajları", link: "../../nhibernate/nhibernate-avantajlari-dezavantajlari/" },
            { title: "NHibernate ile Veri Tabanı Bağlantısı", link: "../../nhibernate/nhiberante-ile-veri-tabani-baglantisi/" },
            { title: "NHibernate Kurulumu ve Konfigürasyonu", link: "../../nhibernate/nhibernate-kurulumu-ve-konfigurasyonu/" },
            { title: "NHibernate Mapping (Entity ile Database İlişkisi)", link: "../../nhibernate/nhibernate-mapping/" },
            { title: "HQL (Hibernate Query Language) Nedir?", link: "../../nhibernate/hql-nedir/" },
            { title: "NHibernate ile CRUD İşlemleri", link: "../../nhibernate/nhibernate-ile-crud-islemleri/" },
            { title: "Lazy Loading ve Eager Loading Kavramları", link: "../../nhibernate/lazy-loading-ve-eager-loading-kavramlari/" },
            { title: "NHibernate Cache Mekanizmaları", link: "../../nhibernate/nhibernate-cache-mekanizalari/" },
            { title: "NHibernate ile Unit of Work Pattern Kullanımı", link: "../../nhibernate/nhibernate-ile-unit-of-work-pattern-kullanimi/" },
            { title: "Repository Pattern ve NHibernate Entegrasyonu", link: "../../nhibernate/repository-pattern-ve-nhibernate-entegrasyonu/" },
            { title: "NHibernate Performans Optimizasyonu", link: "../../nhibernate/nhibernate-performans-optimizasyonu/" },
            { title: "Test Edilebilir Kod Yazımı için NHibernate", link: "../../nhibernate/test-edilebilir-kod-yazimi-icin-nhibernate/" }
        ]
    },
    {
        title: ".NET Life Cycle",
        subMenu: [
            { title: ".NET Life Cycle Nedir?", link: "../../dotnet-life-cycle/net-life-cycle-nedir/" },
            { title: "Uygulama Yaşam Döngüsü (Application Life Cycle) Nedir?", link: "../../dotnet-life-cycle/uygulama-yasam-dongusu/" },
            { title: "ASP.NET ve ASP.NET Core Yaşam Döngüsü", link: "../../dotnet-life-cycle/asp-net-ve-asp-net-core-yasam-dongusu/" },
            { title: "HTTP Request-Response Pipeline (İstek-Cevap Süreci)", link: "../../dotnet-life-cycle/http-request-response-pipeline/" },
            { title: "Middleware Kavramı ve Yaşam Döngüsündeki Rolü", link: "../../dotnet-life-cycle/middleware-kavrami-ve-yasam-dongusundeki-rolu/" },
            { title: "Dependency Injection ve Yaşam Döngüsü", link: "../../dotnet-life-cycle/dependency-injection-ve-yasam-dongusu/" },
            { title: "Service Lifetime Türleri (Transient, Scoped, Singleton)", link: "../../dotnet-life-cycle/service-lifetime-turleri-transient-scoped-singleton/" },
            { title: "Controller ve Action Life Cycle (ASP.NET MVC)", link: "../../dotnet-life-cycle/controller-ve-action-life-cycle/" },
            { title: "Component Life Cycle (Blazor Uygulamaları İçin)", link: "../../dotnet-life-cycle/component-life-cycle/" },
            { title: "Entity Framework DbContext Life Cycle", link: "../../dotnet-life-cycle/entity-framework-dbContext-life-cycle/" },
            { title: "Garbage Collection (Çöp Toplayıcı) ve Bellek Yönetimi", link: "../../dotnet-life-cycle/garbage-collection-ve-bellek-yonetimi/" },
            { title: "Thread ve Task Life Cycle (Multithreading)", link: "../../dotnet-life-cycle/thread-ve-task-life-cycle/" },
            { title: "Event Life Cycle ve Delegates", link: "../../dotnet-life-cycle/event-life-cycle-ve-delegates/" },
            { title: "SignalR ile Bağlantı Yaşam Döngüsü", link: "../../dotnet-life-cycle/signalr-ile-baglanti-yasam-dongusu/" },
            { title: "Test Ortamında Yaşam Döngüsü Yönetimi (Unit Testing)", link: "../../dotnet-life-cycle/test-ortaminda-yaşam-döngüsü-yönetimi/" }
        ]
    },
    {
        title: "MVC",
        subMenu: [
            { title: "MVC Nedir?", link: "../../mvc/mvc-nedir/" },
            { title: "MVC Mimarisinin Tarihçesi ve Gelişimi", link: "../../mvc/mvc-mimarisinin-tarihcesi-ve-gelisim/" },
            { title: "Model-View-Controller Bileşenleri", link: "../../mvc/model-view-controller-bilesenleri/" },
            { title: "MVC ve Diğer Mimari Desenler Arasındaki Farklar", link: "../../mvc/mvc-ve-diger-mimari-desenler-arasindaki-farklar/" },
            { title: "ASP.NET MVC’nin Temel Özellikleri", link: "../../mvc/asp-net-mvc-temel-ozellikleri/" },
            { title: "ASP.NET MVC Proje Yapısı", link: "../../mvc/asp-net-mvc-proje-yapisi/" },
            { title: "Routing Nedir? ASP.NET MVC'de Routing Kullanımı", link: "../../mvc/routing-nedir-asp-net-mvc-routing-kullanimi/" },
            { title: "Controller ve Action Metotları", link: "../../mvc/controller-ve-action-metotlari/" },
            { title: "Model Binding ve Veri Doğrulama", link: "../../mvc/model-binding-ve-veri-dogrulama/" },
            { title: "View Engine Nedir? Razor View Engine’in Kullanımı", link: "../../mvc/view-engine-ve-razor-view-engine-kullanimi/" },
            { title: "Partial View ve Layout View Kullanımı", link: "../../mvc/partial-view-ve-layout-view-kullanimi/" },
            { title: "ViewBag, ViewData ve TempData Arasındaki Farklar", link: "../../mvc/viewbag-viewdata-ve-tempdata-arasindaki-farklar/" },
            { title: "Dependency Injection (DI) ASP.NET MVC'de Nasıl Kullanılır?", link: "../../mvc/dependency-injection-asp-net-mvc/" },
            { title: "Entity Framework ve MVC Entegrasyonu", link: "../../mvc/entity-framework-ve-mvc-entegrasyonu/" },
            { title: "Repository Design Pattern’in MVC ile Kullanımı", link: "../../mvc/repository-design-pattern-mvc-kullanimi/" },
            { title: "DTO Kullanımı ve MVC’de Veri Aktarımı", link: "../../mvc/dto-kullanimi-ve-veri-aktarimi/" },
            { title: "Dapper ile MVC Projesinde Performanslı Veri İşleme", link: "../../mvc/dapper-ve-performansli-veri-isleme/" },
            { title: "ASP.NET MVC ile Authentication ve Authorization", link: "../../mvc/asp-net-mvc-authentication-ve-authorization/" },
            { title: "Session ve Cookie Yönetimi ASP.NET MVC'de Nasıl Yapılır?", link: "../../mvc/session-ve-cookie-yonetimi/" },
            { title: "AJAX ve JQuery Kullanımıyla Dinamik MVC Uygulamaları", link: "../../mvc/ajax-jquery-ile-dinamik-mvc-uygulamalari/" },
            { title: "ASP.NET MVC’de API Entegrasyonu", link: "../../mvc/asp-net-mvc-api-entegrasyonu/" },
            { title: "Model-View-Controller İlişkisini Optimize Etme Yöntemleri", link: "../../mvc/model-view-controller-iliskisini-optimize-etme/" },
            { title: "ASP.NET MVC Projelerinde Hata Yönetimi ve Loglama", link: "../../mvc/asp-net-mvc-projelerinde-hata-yonetimi-ve-loglama/" },
            { title: "Globalization ve Localization MVC’de Nasıl Yapılır?", link: "../../mvc/globalization-ve-localization-mvc/" },
            { title: "Unit Testing ve MVC Uygulamaları için Test Süreçleri", link: "../../mvc/unit-testing-ve-mvc-test-surecleri/" },
            { title: "Performance Tuning ve MVC Uygulamalarını Optimize Etme", link: "../../mvc/performance-tuning-mvc-uygulamalari-optimize-etme/" },
            { title: "ASP.NET Core MVC ve Klasik MVC Arasındaki Farklar", link: "../../mvc/asp-net-core-mvc-ve-klasik-mvc-farklari/" },
            {
                title: "SignalR Kullanarak MVC ile Gerçek Zamanlı Uygulamalar Geliştirme", link: "../../mvc/signalr-ile-gercek-zamanli-uygulamalar/"
            },
            { title: "Blazor ve MVC’nin Karşılaştırılması", link: "../../mvc/blazor-ve-mvc-karsilastirilmasi/" },
            { title: "MVC Projelerinde CI/CD ve DevOps Süreçleri", link: "../../mvc/mvc-projelerinde-ci-cd-ve-devops-surecleri/" }
        ]
    },
    {
        title: "Razor Pages",
        subMenu: [
            { title: "Razor Pages Nedir?", link: "../../razor-pages/razor-pages-nedir/" },
            { title: "Razor Pages Kurulumu ve Konfigürasyonu", link: "../../razor-pages/razor-pages-kurulumu-ve-konfigurasiyonu/" },
            { title: "Razor Pages ile Form İşlemleri", link: "../../razor-pages/razor-pages-ile-form-islemleri/" },
            { title: "Razor Pages ile Model Binding ve Validation", link: "../../razor-pages/razor-pages-ile-model-binding-ve-validation/" },
            { title: "Razor Pages ile Layout ve Partial View Kullanımı", link: "../../razor-pages/razor-pages-ile-layout-ve-partial-view-kullanimi/" },
            { title: "Razor Pages ile Veri İletimi ve Bağlantılar", link: "../../razor-pages/razor-pages-ile-veri-iletimi-ve-baglantilar/" },
            { title: "Razor Pages ile Async ve Task İşlemleri", link: "../../razor-pages/razor-pages-ile-async-ve-task-islemleri/" },
            { title: "Razor Pages ile Dynamic Routing ve URL Parametreleri", link: "../../razor-pages/razor-pages-ile-dynamic-routing-ve-url-parameterleri/" },
            { title: "Razor Pages ile Page Handler’lar ve Actions", link: "../../razor-pages/razor-pages-ile-page-handlerlar-ve-actions/" },
            { title: "Razor Pages ile Session ve Cookie Yönetimi", link: "../../razor-pages/razor-pages-ile-session-ve-cookie-yonetimi/" },
            { title: "Razor Pages ile Ajax ve jQuery Kullanımı", link: "../../razor-pages/razor-pages-ile-ajax-ve-jquery-kullanimi/" },
            { title: "Razor Pages ile Redirect ve Result Dönüşü", link: "../../razor-pages/razor-pages-ile-redirect-ve-result-donusu/" }
        ]
    },
    {
        title: "Razor Components",
        subMenu: [
            { title: "Razor Components Nedir?", link: "../../razor-components/razor-components-nedir/" },
            { title: "Razor Components ve Razor Pages Farkları", link: "../../razor-components/razor-components-ve-razor-pages-farklari/" },
            { title: "Razor Components Proje Yapısı", link: "../../razor-components/razor-components-proje-yapisi/" },
            { title: "Component Oluşturma ve Kullanımı", link: "../../razor-components/component-olusturma-ve-kullanimi/" },
            { title: "Component Hierarchy ve Veri Akışı", link: "../../razor-components/component-hierarchy-ve-veri-akisi/" },
            { title: "Component İçerisinde Event İşleme", link: "../../razor-components/component-icerisinde-event-isleme/" },
            { title: "Component Life Cycle Metotları", link: "../../razor-components/component-life-cycle-metotlari/" },
            { title: "Razor Components ve Dependency Injection", link: "../../razor-components/razor-components-ve-dependency-injection/" },
            { title: "Parameter Kullanımı ve Veri Aktarma", link: "../../razor-components/parameter-kullanimi-ve-veri-aktarma/" },
            { title: "Component İçerisinde CSS ve Stil Uygulamaları", link: "../../razor-components/component-icerisinde-css-ve-stil-uygulamalari/" },
            { title: "EventCallback ve Event Yönetimi", link: "../../razor-components/eventcallback-ve-event-yonetimi/" },
            { title: "JavaScript ile İletişim ve IJSRuntime Kullanımı", link: "../../razor-components/javascript-ile-iletisim-ve-jsruntime/" },
            { title: "Reusable Components Oluşturma", link: "../../razor-components/reusable-components-olusturma/" },
            { title: "RenderFragment ve Dinamik İçerik Kullanımı", link: "../../razor-components/renderfragment-ve-dynamic-content/" },
            { title: "Razor Components Routing ve Navigation", link: "../../razor-components/razor-components-routing-ve-navigation/" },
            { title: "State Management ve Component State", link: "../../razor-components/state-management-ve-component-state/" },
            { title: "Component Library Oluşturma ve Paylaşma", link: "../../razor-components/component-library-olusturma-ve-paylasma/" },
            { title: "Razor Components ve SignalR Entegrasyonu", link: "../../razor-components/razor-components-ve-signalr-entegrasyonu/" },
            { title: "Razor Components ile Form ve Veri Doğrulama", link: "../../razor-components/razor-components-ile-form-ve-veri-dogrulama/" },
            { title: "Razor Components Performans Optimizasyonu", link: "../../razor-components/razor-components-performans-optimizasyonu/" },
            { title: "Razor Components Hata Yönetimi", link: "../../razor-components/razor-components-hata-yonetimi/" },
            { title: "Razor Components ve Unit Test Yapıları", link: "../../razor-components/razor-components-ve-unit-test-yapilari/" },
            { title: "Razor Components Globalization ve Localization", link: "../../razor-components/razor-components-globalization-ve-localization/" },
            { title: "Razor Components CI/CD ve DevOps Süreçleri", link: "../../razor-components/razor-components-ci-cd-ve-devops-surecleri/" },
            { title: "Razor Components ile PWA Uygulamaları", link: "../../razor-components/razor-components-pwa-uygulamalari/" },
            { title: "Razor Components ve API Entegrasyonu", link: "../../razor-components/razor-components-ve-api-entegrasyonu/" },
            { title: "Blazor ve Razor Components Karşılaştırması", link: "../../razor-components/blazor-ve-razor-components-karsilastirmasi/" },
            { title: "Razor Components ile Frontend ve Backend Entegrasyonu", link: "../../razor-components/razor-components-ile-frontend-ve-backend-entegrasyonu/" },
            { title: "Razor Components ile Real-Time Uygulama Geliştirme", link: "../../razor-components/razor-components-ile-real-time-uygulama-gelistirme/" }
        ]
    },
    {
        title: "Middleware",
        subMenu: [
            { title: "Middleware Nedir?", link: "../../middlewares/middleware-nedir/" },
            { title: "Middleware Pipeline Nedir ve Nasıl Çalışır?", link: "../../middlewares/middleware-pipeline-nedir-ve-nasil-calisir/" },
            { title: "Middleware Oluşturma ve Kullanımı", link: "../../middlewares/middleware-olusturma-ve-kullanimi/" },
            { title: "Built-in Middlewares Nelerdir?", link: "../../middlewares/built-in-middlewares-nelerdir/" },
            { title: "Request ve Response Manipülasyonu", link: "../../middlewares/request-ve-response-manipulasyonu/" },
            { title: "Middleware Sıralama ve Önemli Noktalar", link: "../../middlewares/middleware-siralama-ve-onemli-noktalar/" },
            { title: "Custom Middleware Oluşturma", link: "../../middlewares/custom-middleware-olusturma/" },
            { title: "Exception Handling ile Hata Yönetimi", link: "../../middlewares/exception-handling-ile-hata-yonetimi/" },
            { title: "Request Logging ile Loglama", link: "../../middlewares/request-logging-ile-loglama/" },
            { title: "Authentication ve Authorization Middlewares", link: "../../middlewares/authentication-ve-authorization-middlewares/" },
            { title: "Static Files Middleware Kullanımı", link: "../../middlewares/static-files-middleware-kullanimi/" },
            { title: "CORS Middleware ve Cross-Origin Requestler", link: "../../middlewares/cors-middleware-ve-cross-origin-requestler/" },
            { title: "Session ve Cookie Management Middlewares", link: "../../middlewares/session-ve-cookie-management-middlewares/" },
            { title: "URL Rewriting ve Routing Middlewares", link: "../../middlewares/url-rewriting-ve-routing-middlewares/" },
            { title: "Performance Monitoring ile Middleware Optimizasyonu", link: "../../middlewares/performance-monitoring-ile-middleware-optimizasyonu/" },
            { title: "Middleware Dependency Injection ve Hızlı Çözümler", link: "../../middlewares/middleware-dependency-injection-ve-hizli-cozumler/" },
            { title: "Middleware Testi ve Debug Yapısı", link: "../../middlewares/middleware-testi-ve-debug-yapisi/" },
            { title: "Middleware ile Cache Kontrolü ve Yönetimi", link: "../../middlewares/middleware-ile-cache-kontrolu-ve-yonetimi/" },
            { title: "Gelişmiş Middleware Kullanımı ve Pratik Çözümler", link: "../../middlewares/gelişmiş-middleware-kullanimi-ve-pratik-cozumler/" },
            { title: "gRPC ve Middleware Entegrasyonu", link: "../../middlewares/grpc-ve-middleware-entegrasyonu/" },
            { title: "Middleware Globalization ve Localization Desteği", link: "../../middlewares/middleware-globalization-ve-localization-destegi/" },
            { title: "Middleware ile Real-Time Uygulama Geliştirme", link: "../../middlewares/middleware-ile-real-time-uygulama-gelistirme/" },
            { title: "Middleware ve Containerization Kullanımı", link: "../../middlewares/middleware-ve-containerization-kullanimi/" },
            { title: "Middleware Tasarımı ve Best Practices", link: "../../middlewares/middleware-tasarimi-ve-best-practices/" },
            { title: "Middleware ile AI ve ML Entegrasyonu", link: "../../middlewares/middleware-ile-ai-ve-ml-entegrasyonu/" },
            { title: "Middleware ve Modern Microservices Entegrasyonu", link: "../../middlewares/middleware-ve-modern-microservices-entegrasyonu/" },
            { title: "Middleware CI/CD ve DevOps Entegrasyonu", link: "../../middlewares/middleware-ci-cd-ve-devops-entegrasyonu/" },
            { title: "Middleware ile Data Compression ve Optimizasyon", link: "../../middlewares/middleware-ile-data-compression-ve-optimizasyon/" },
            { title: "Middleware Kullanımı ile Scalable Uygulamalar", link: "../../middlewares/middleware-kullanimi-ile-scalable-uygulamalar/" }
        ]
    },
    {
        title: "Filters And Attribute",
        subMenu: [
            { title: "Filters ve Attributes Nedir?", link: "../../filters-and-attributes/filters-ve-attributes-nedir/" },
            { title: "Filter Türleri ve Kullanımları", link: "../../filters-and-attributes/filter-turleri-ve-kullanimlari/" },
            { title: "Action Filters Nedir ve Nasıl Kullanılır?", link: "../../filters-and-attributes/action-filters-nedir-ve-nasil-kullanilir/" },
            { title: "Authorization Filters ve Yetkilendirme", link: "../../filters-and-attributes/authorization-filters-ve-yetkilendirme/" },
            { title: "Resource Filters ile Kaynak Yönetimi", link: "../../filters-and-attributes/resource-filters-ile-kaynak-yonetimi/" },
            { title: "Exception Filters ve Hata Yönetimi", link: "../../filters-and-attributes/exception-filters-ve-hata-yonetimi/" },
            { title: "Result Filters ve Sonuç Manipülasyonu", link: "../../filters-and-attributes/result-filters-ve-sonuc-manipulasyonu/" },
            { title: "Custom Filters Oluşturma", link: "../../filters-and-attributes/custom-filters-olusturma/" },
            { title: "Filter Sıralama ve Öncelik", link: "../../filters-and-attributes/filter-siralama-ve-oncelik/" },
            { title: "Global Filters ve Lokasyon Bazlı Filtreleme", link: "../../filters-and-attributes/global-filters-ve-lokasyon-bazli-filtreleme/" },
            { title: "Attributes ile Metadata Kullanımı", link: "../../filters-and-attributes/attributes-ile-metadata-kullanimi/" },
            { title: "Built-in Attributes ve Örnekler", link: "../../filters-and-attributes/built-in-attributes-ve-ornekler/" },
            { title: "Custom Attributes Oluşturma ve Kullanımı", link: "../../filters-and-attributes/custom-attributes-olusturma-ve-kullanimi/" },
            { title: "Attribute Routing ve Route Manipülasyonu", link: "../../filters-and-attributes/attribute-routing-ve-route-manipulasyonu/" },
            { title: "Filters ile Dependency Injection", link: "../../filters-and-attributes/filters-ile-dependency-injection/" },
            { title: "Attribute Validation ve Veri Doğrulama", link: "../../filters-and-attributes/attribute-validation-ve-veri-dogrulama/" },
            { title: "Filters ve Attributes ile Performans Optimizasyonu", link: "../../filters-and-attributes/filters-ve-attributes-ile-performans-optimizasyonu/" },
            { title: "Filters ile Loglama ve İzleme", link: "../../filters-and-attributes/filters-ile-loglama-ve-izleme/" },
            { title: "Filters ile Security ve Yetkilendirme", link: "../../filters-and-attributes/filters-ile-security-ve-yetkilendirme/" },
            { title: "Filters and Attributes Best Practices", link: "../../filters-and-attributes/filters-and-attributes-best-practices/" },
            { title: "Custom Filter Library Oluşturma ve Paylaşma", link: "../../filters-and-attributes/custom-filter-library-olusturma-ve-paylasma/" },
            { title: "Unit Test Yapıları ve Filter Test", link: "../../filters-and-attributes/unit-test-yapilari-ve-filter-test/" },
            { title: "Filters ile Real-Time Uygulama Geliştirme", link: "../../filters-and-attributes/filters-ile-real-time-uygulama-gelistirme/" },
            { title: "Filters and Attributes CI/CD ve DevOps Süreçleri", link: "../../filters-and-attributes/filters-and-attributes-ci-cd-ve-devops-surecleri/" },
            { title: "Global Filters ile Kullanıcı Odaklı Filtreleme", link: "../../filters-and-attributes/global-filters-ile-kullanici-odakli-filtreleme/" },
            { title: "Filters ve Attributes ile Hata Analizi", link: "../../filters-and-attributes/filters-ve-attributes-ile-hata-analizi/" },
            { title: "Advanced Attributes Kullanımı ve Örnekler", link: "../../filters-and-attributes/advanced-attributes-kullanimi-ve-ornekler/" },
            { title: "Filters ve Attributes Kullanımı ile Scalable Uygulamalar", link: "../../filters-and-attributes/filters-ve-attributes-kullanimi-ile-scalable-uygulamalar/" }
        ]
    },
    {
        title: "Appsettings ve Config",
        subMenu: [
            { title: "Appsettings.json Nedir?", link: "../../app-settings-and-config/appsettings-json-nedir/" },
            { title: "Appsettings.json ile Konfigürasyon", link: "../../app-settings-and-config/appsettings-json-ile-konfigurasyon/" },
            { title: "Appsettings.json ile Çoklu Environment Desteği", link: "../../app-settings-and-config/appsettings-json-ile-coklu-environment-destegi/" },
            { title: "Appsettings.json Veri Okuma ve Yazma", link: "../../app-settings-and-config/appsettings-json-veri-okuma-ve-yazma/" },
            { title: "Option Pattern ile Konfigürasyon Yönetimi", link: "../../app-settings-and-config/option-pattern-ile-konfigurasyon-yonetimi/" },
            { title: "Secret Manager ve Gizli Bilgilerin Yönetimi", link: "../../app-settings-and-config/secret-manager-ve-gizli-bilgilerin-yonetimi/" },
            { title: "Environment Variables Kullanımı", link: "../../app-settings-and-config/environment-variables-kullanimi/" },
            { title: "ConfigurationProvider Kullanımı ve Özelleştirme", link: "../../app-settings-and-config/configurationprovider-kullanimi-ve-ozellestirme/" },
            { title: "ConfigureMethod ve Konfigürasyon Ayarları", link: "../../app-settings-and-config/configuremethod-ve-konfigurasyon-ayarlari/" },
            { title: "Dynamic Configuration ve Hot Reload", link: "../../app-settings-and-config/dynamic-configuration-ve-hot-reload/" },
            { title: "Hierarchical Configuration Yapısı", link: "../../app-settings-and-config/hierarchical-configuration-yapisi/" },
            { title: "JSON Yapısı ve Konfigürasyon Validasyonu", link: "../../app-settings-and-config/json-yapisi-ve-konfigurasyon-validasyonu/" },
            { title: "Azure App Configuration Entegrasyonu", link: "../../app-settings-and-config/azure-app-configuration-entegrasyonu/" },
            { title: "Configuration API ile Konfigürasyon Okuma", link: "../../app-settings-and-config/configuration-api-ile-konfigurasyon-okuma/" },
            { title: "Appsettings.json ile Logging Konfigürasyonu", link: "../../app-settings-and-config/appsettings-json-ile-logging-konfigurasyonu/" },
            { title: "User Secrets ile Lokal Gizli Bilgiler", link: "../../app-settings-and-config/user-secrets-ile-lokal-gizli-bilgiler/" },
            { title: "Cloud Configurations ile Dağıtık Sistemler", link: "../../app-settings-and-config/cloud-configurations-ile-dagitik-sistemler/" },
            { title: "ConfigurationBinding ve DTO Entegrasyonu", link: "../../app-settings-and-config/configurationbinding-ve-dto-entegrasyonu/" },
            { title: "Configuration ile Dependency Injection", link: "../../app-settings-and-config/configuration-ile-dependency-injection/" },
            { title: "Appsettings.json vs Environment Variables", link: "../../app-settings-and-config/appsettings-json-versus-environment-variables/" },
            { title: "Configurations ile Performans Optimizasyonu", link: "../../app-settings-and-config/configurations-ile-performans-optimizasyonu/" },
            { title: "Appsettings.json ile Database Bağlantı Ayarları", link: "../../app-settings-and-config/appsettings-json-ile-database-baglanti-ayarlari/" },
            { title: "Microservices ile Distributed Configuration", link: "../../app-settings-and-config/microservices-ile-distributed-configuration/" },
            { title: "Configurations ile Hata Yönetimi ve Logging", link: "../../app-settings-and-config/configurations-ile-hata-yonetimi-ve-logging/" },
            { title: "Custom ConfigurationProvider Oluşturma", link: "../../app-settings-and-config/custom-configurationprovider-olusturma/" },
            { title: "Appsettings.json ile Feature Flags", link: "../../app-settings-and-config/appsettings-json-ile-feature-flags/" },
            { title: "Configurations ile Unit Test Yapıları", link: "../../app-settings-and-config/configurations-ile-unit-test-yapilari/" },
            { title: "Appsettings.json ile Dynamic UI Konfigürasyonu", link: "../../app-settings-and-config/appsettings-json-ile-dynamic-ui-konfigurasyonu/" },
            { title: "Scalable Applications için Konfigürasyon Yapıları", link: "../../app-settings-and-config/scalable-applications-icin-konfigurasyon-yapilari/" }
        ]
    },
    {
        title: "SQL Server",
        subMenu: [
            { title: "SQL Server Nedir?", link: "../../sql-server/sql-server-nedir/" },
            { title: "SQL Server Kurulumu ve Konfigürasyonu", link: "../../sql-server/sql-server-kurulumu-ve-konfigurasyonu/" },
            {
                title: "SQL Server Management Studio (SSMS) Nedir ve Nasıl Kullanılır?", link: "../../sql-server/sql-server-management-studio-ssms-nedir-ve-nasil-kullanilir/ "
            },
            { title: "T-SQL Nedir ve Temel Sorgular", link: "../../sql-server/t-sql-nedir-ve-temel-sorgular/" },
            { title: "SQL Server Veritabanı ve Tablo Oluşturma", link: "../../sql-server/sql-server-veritabani-ve-tablo-olusturma/" },
            { title: "SQL Server ile Veri Ekleme, Güncelleme ve Silme", link: "../../sql-server/sql-server-ile-veri-ekleme-guncelleme-ve-silme/" },
            { title: "SQL Server İndexler ve Performans Artırımı", link: "../../sql-server/sql-server-indexler-ve-performans-artirimi/" },
            { title: "SQL Server Stored Procedure Nedir ve Nasıl Kullanılır?", link: "../../sql-server/sql-server-stored-procedure-nedir-ve-nasil-kullanilir/" },
            { title: "SQL Server View Nedir ve Kullanım Senaryoları", link: "../../sql-server/sql-server-view-nedir-ve-kullanim-senaryolari/" },
            { title: "SQL Server Trigger Nedir ve Nasıl Kullanılır?", link: "../../sql-server/sql-server-trigger-nedir-ve-nasil-kullanilir/" },
            { title: "SQL Server Transaction ve Locking", link: "../../sql-server/sql-server-transaction-ve-locking/" },
            { title: "SQL Server Performance Tuning ve Query Optimization", link: "../../sql-server/sql-server-performance-tuning-ve-query-optimization/" },
            { title: "SQL Server Temporal Tables ve Versiyonlama", link: "../../sql-server/sql-server-temporal-tables-ve-versiyonlama/" },
            { title: "SQL Server JSON Veri Tipleri ve İşlemleri", link: "../../sql-server/sql-server-json-veri-tipleri-ve-islemleri/" },
            { title: "SQL Server Full-Text Search ve Uygulama Örnekleri", link: "../../sql-server/sql-server-full-text-search-ve-uygulama-ornekleri/" },
            { title: "SQL Server Partitioning ile Veri Yönetimi", link: "../../sql-server/sql-server-partitioning-ile-veri-yonetimi/" },
            { title: "SQL Server ile Veritabanı Yedekleme ve Geri Yükleme", link: "../../sql-server/sql-server-ile-veritabani-yedekleme-ve-geri-yukleme/" },
            { title: "SQL Server ile Security ve Yetkilendirme", link: "../../sql-server/sql-server-ile-security-ve-yetkilendirme/" },
            { title: "SQL Server Loglama ve Audit Log", link: "../../sql-server/sql-server-loglama-ve-audit-log/" },
            { title: "SQL Server Always On ve High Availability", link: "../../sql-server/sql-server-always-on-ve-high-availability/" },
            { title: "SQL Server Data Warehouse ve OLAP", link: "../../sql-server/sql-server-data-warehouse-ve-olap/" },
            { title: "SQL Server SSIS ile Veri Entegrasyonu", link: "../../sql-server/sql-server-ssis-ile-veri-entegrasyonu/" },
            { title: "SQL Server ile Distributed Database Uygulamaları", link: "../../sql-server/sql-server-ile-distributed-database-uygulamalari/" },
            { title: "SQL Server Stored Procedure Unit Test", link: "../../sql-server/sql-server-stored-procedure-unit-test/" },
            { title: "SQL Server ile Entity Framework Integration", link: "../../sql-server/sql-server-ile-entity-framework-integration/" },
            { title: "SQL Server Geospatial Data Kullanımı", link: "../../sql-server/sql-server-geospatial-data-kullanimi/" },
            { title: "SQL Server ile Streaming Data ve IoT", link: "../../sql-server/sql-server-ile-streaming-data-ve-iot/" },
            { title: "SQL Server Query Store ve Query Analiz", link: "../../sql-server/sql-server-query-store-ve-query-analiz/" },
            { title: "SQL Server ile Scalable Veritabanı Uygulamaları", link: "../../sql-server/sql-server-ile-scalable-veritabani-uygulamalari/" }
        ]
    },
    {
        title: "PostgreSQL",
        subMenu: [
            { title: "PostgreSQL Nedir?", link: "../../postgresql/postgresql-nedir/" },
            { title: "PostgreSQL Kurulumu ve Konfigürasyonu", link: "../../postgresql/postgresql-kurulumu-ve-konfigurasyonu/" },
            { title: "PostgreSQL Veritabanı ve Tablo Oluşturma", link: "../../postgresql/postgresql-veritabani-ve-tablo-olusturma/" },
            { title: "PostgreSQL SQL Temelleri", link: "../../postgresql/postgresql-sql-temelleri/" },
            { title: "PostgreSQL Veri Ekleme, Güncelleme ve Silme", link: "../../postgresql/postgresql-veri-ekleme-guncelleme-ve-silme/" },
            { title: "PostgreSQL İndexler ve Performans Optimizasyonu", link: "../../postgresql/postgresql-indexler-ve-performans-optimizasyonu/" },
            { title: "PostgreSQL Stored Procedures ve Functions", link: "../../postgresql/postgresql-stored-procedures-ve-functions/" },
            { title: "PostgreSQL Transaction ve Locking", link: "../../postgresql/postgresql-transaction-ve-locking/" },
            { title: "PostgreSQL Trigger Nedir ve Nasıl Kullanılır?", link: "../../postgresql/postgresql-trigger-nedir-ve-nasil-kullanilir/" },
            { title: "PostgreSQL View Oluşturma ve Kullanımı", link: "../../postgresql/postgresql-view-olusturma-ve-kullanimi/" },
            { title: "PostgreSQL JSON ve JSONB Veri Tipleri", link: "../../postgresql/postgresql-json-ve-jsonb-veri-tipleri/" },
            { title: "PostgreSQL Full-Text Search Özellikleri", link: "../../postgresql/postgresql-full-text-search-ozellikleri/" },
            { title: "PostgreSQL Citext ve Case-Insensitive Veriler", link: "../../postgresql/postgresql-citext-ve-case-insensitive-veriler/" },
            { title: "PostgreSQL Partitioning ile Veri Yönetimi", link: "../../postgresql/postgresql-partitioning-ile-veri-yonetimi/" },
            { title: "PostgreSQL Veritabanı Yedekleme ve Geri Yükleme", link: "../../postgresql/postgresql-veritabani-yedekleme-ve-geri-yukleme/" },
            { title: "PostgreSQL Replication ve High Availability", link: "../../postgresql/postgresql-replication-ve-high-availability/" },
            { title: "PostgreSQL ile Security ve Yetkilendirme", link: "../../postgresql/postgresql-ile-security-ve-yetkilendirme/" },
            { title: "PostgreSQL Query Optimizer ve Planları Anlama", link: "../../postgresql/postgresql-query-optimizer-ve-planlari-anlama/" },
            { title: "PostgreSQL Geospatial Veri Kullanımı", link: "../../postgresql/postgresql-geospatial-veri-kullanimi/" },
            { title: "PostgreSQL Extensions Nelerdir ve Nasıl Kullanılır?", link: "../../postgresql/postgresql-extensions-nelerdir-ve-nasil-kullanilir/" },
            { title: "PostgreSQL Foreign Data Wrapper (FDW) Kullanımı", link: "../../postgresql/postgresql-foreign-data-wrapper-fdw-kullanimi/" },
            { title: "PostgreSQL Loglama ve Audit Log", link: "../../postgresql/postgresql-loglama-ve-audit-log/" },
            { title: "PostgreSQL Materialized View ve Kullanım Senaryoları", link: "../../postgresql/postgresql-materialized-view-ve-kullanim-senaryolari/" },
            { title: "PostgreSQL ile Data Warehouse Kullanımı", link: "../../postgresql/postgresql-ile-data-warehouse-kullanimi/" },
            { title: "PostgreSQL ile Streaming Data ve IoT", link: "../../postgresql/postgresql-ile-streaming-data-ve-iot/" },
            { title: "PostgreSQL ile Entity Framework Core Entegrasyonu", link: "../../postgresql/postgresql-ile-entity-framework-core-entegrasyonu/" },
            { title: "PostgreSQL Temporal Tables ve Versiyonlama", link: "../../postgresql/postgresql-temporal-tables-ve-versiyonlama/" },
            { title: "PostgreSQL ile Scalable Veritabanı Uygulamaları", link: "../../postgresql/postgresql-ile-scalable-veritabani-uygulamalari/" },
            { title: "PostgreSQL Performance Tuning ve Veri Analizi", link: "../../postgresql/postgresql-performance-tuning-ve-veri-analizi/" }
        ]
    },
    {
        title: "MariaDB",
        subMenu: [
            { title: "MariaDB Nedir?", link: "../../mariadb/mariadb-nedir/" },
            { title: "MariaDB Kurulumu ve Temel Konfigürasyonu", link: "../../mariadb/mariadb-kurulumu-ve-temel-konfigurasyonu/" },
            { title: "MariaDB Veritabanı ve Tablo Oluşturma", link: "../../mariadb/mariadb-veritabani-ve-tablo-olusturma/" },
            { title: "MariaDB Veri Ekleme, Okuma ve Silme İşlemleri", link: "../../mariadb/mariadb-veri-ekleme-okuma-ve-silme-islemleri/" },
            { title: "MariaDB İndex ve Performans Optimizasyonu", link: "../../mariadb/mariadb-index-ve-performans-optimizasyonu/" },
            { title: "MariaDB Stored Procedures ve Functions", link: "../../mariadb/mariadb-stored-procedures-ve-functions/" },
            { title: "MariaDB Transaction ve İşlemler", link: "../../mariadb/mariadb-transaction-ve-islemler/" },
            { title: "MariaDB Trigger Oluşturma ve Kullanımı", link: "../../mariadb/mariadb-trigger-olusturma-ve-kullanimi/" },
            { title: "MariaDB View ve Kullanım Senaryoları", link: "../../mariadb/mariadb-view-ve-kullanim-senaryolari/" },
            { title: "MariaDB Join Çeşitleri ve Örnekler", link: "../../mariadb/mariadb-join-cesitleri-ve-ornekler/" },
            { title: "MariaDB JSON ve Virtual Columns Kullanımı", link: "../../mariadb/mariadb-json-ve-virtual-columns-kullanimi/" },
            { title: "MariaDB Full-Text Search ve İndeksleme", link: "../../mariadb/mariadb-full-text-search-ve-indexleme/" },
            { title: "MariaDB Replication Nedir ve Nasıl Kullanılır?", link: "../../mariadb/mariadb-replication-nedir-ve-nasil-kullanilir/" },
            { title: "MariaDB Clustering ve High Availability", link: "../../mariadb/mariadb-clustering-ve-high-availability/" },
            { title: "MariaDB Backup ve Restore İşlemleri", link: "../../mariadb/mariadb-backup-ve-restore-islemleri/" },
            { title: "MariaDB Security ve Yetkilendirme", link: "../../mariadb/mariadb-security-ve-yetkilendirme/" },
            { title: "MariaDB Query Plan ve Optimizasyon Stratejileri", link: "../../mariadb/mariadb-query-plan-ve-optimizasyon-stratejileri/" },
            { title: "MariaDB Partitioning ve Veri Bölümleme", link: "../../mariadb/mariadb-partitioning-ve-veri-bolumleme/" },
            { title: "MariaDB Temporal Data ve Versiyon Yönetimi", link: "../../mariadb/mariadb-temporal-data-ve-versiyon-yonetimi/" },
            { title: "MariaDB Extensions ve Eklentiler", link: "../../mariadb/mariadb-extensions-ve-eklentiler/" },
            { title: "MariaDB Storage Engine Seçimi ve Karşılaştırması", link: "../../mariadb/mariadb-storage-engine-secimi-ve-karsilastirmasi/" },
            { title: "MariaDB Geospatial Veri ve Fonksiyonlar", link: "../../mariadb/mariadb-geospatial-veri-ve-fonksiyonlar/" },
            { title: "MariaDB Loglama ve Monitoring", link: "../../mariadb/mariadb-loglama-ve-monitoring/" },
            { title: "MariaDB ile Entity Framework Core Kullanımı", link: "../../mariadb/mariadb-ile-entity-framework-core-kullanimi/" },
            { title: "MariaDB ile Scalable ve Dağıtımlı Uygulamalar", link: "../../mariadb/mariadb-ile-scalable-ve-dagitimli-uygulamalar/" },
            { title: "MariaDB ile Data Warehouse Entegrasyonu", link: "../../mariadb/mariadb-ile-data-warehouse-entegrasyonu/" },
            { title: "MariaDB Performance Tuning ve Analiz", link: "../../mariadb/mariadb-performance-tuning-ve-analiz/" },
            { title: "MariaDB JSON ve NoSQL Desteği", link: "../../mariadb/mariadb-json-ve-nosql-destegi/" },
            { title: "MariaDB Materialized View Oluşturma", link: "../../mariadb/mariadb-materialized-view-olusturma/" }
        ]
    },
    {
        title: "DynamoDB",
        subMenu: [
            { title: "DynamoDB Nedir?", link: "../../dynamodb/dynamodb-nedir/" },
            { title: "DynamoDB Kurulumu ve Konfigürasyonu", link: "../../dynamodb/dynamodb-kurulumu-ve-konfigurasyonu/" },
            { title: "DynamoDB Veritabanı ve Tablo Oluşturma", link: "../../dynamodb/dynamodb-veritabani-ve-tablo-olusturma/" },
            { title: "DynamoDB Item Ekleme, Okuma ve Silme", link: "../../dynamodb/dynamodb-item-ekleme-okuma-ve-silme/" },
            { title: "DynamoDB Primary Key ve Sort Key Kullanımı", link: "../../dynamodb/dynamodb-primary-key-ve-sort-key-kullanimi/" },
            { title: "DynamoDB Global Secondary Index ve Local Secondary Index", link: "../../dynamodb/dynamodb-global-secondary-index-ve-local-secondary-index/" },
            { title: "DynamoDB Query ve Scan Farkları", link: "../../dynamodb/dynamodb-query-ve-scan-farklari/" },
            { title: "DynamoDB Transaction ve Batch Operations", link: "../../dynamodb/dynamodb-transaction-ve-batch-operations/" },
            { title: "DynamoDB Read ve Write Capacity Unit'leri", link: "../../dynamodb/dynamodb-read-ve-write-capacity-unitleri/" },
            { title: "DynamoDB On-Demand ve Provisioned Capacity Modelleri", link: "../../dynamodb/dynamodb-on-demand-ve-provisioned-capacity-modelleri/" },
            { title: "DynamoDB Data Modelling ve Normalizasyon", link: "../../dynamodb/dynamodb-data-modelling-ve-normalizasyon/" },
            { title: "DynamoDB Time-to-Live (TTL) Özelliği", link: "../../dynamodb/dynamodb-time-to-live-ttl-ozelligi/" },
            { title: "DynamoDB Streams ve Üzerinde İşlem Yapma", link: "../../dynamodb/dynamodb-streams-ve-uzerinde-islem-yapma/" },
            { title: "DynamoDB Global Table Kullanımı", link: "../../dynamodb/dynamodb-global-table-kullanimi/" },
            { title: "DynamoDB Access Control ve IAM Rolleri", link: "../../dynamodb/dynamodb-aciklama-ve-onur-" },
            { title: "DynamoDB Item Ozet Dosyalar", link: "../../dynamodb/dynamodb-item-ozet-dosyalar/" },
            { title: "DynamoDB Cosolutions For Performance Impact", link: "../../dynamodb/dynamodb-cosolutions-for-performance-impact/" }
        ]
    },
    {
        title: "CosmosDB",
        subMenu: [
            { title: "CosmosDB Nedir?", link: "../../cosmosdb/cosmosdb-nedir/" },
            { title: "CosmosDB Kurulumu ve Konfigürasyonu", link: "../../cosmosdb/cosmosdb-kurulumu-ve-konfigurasiyonu/" },
            { title: "CosmosDB Veritabanı ve Koleksiyon Oluşturma", link: "../../cosmosdb/cosmosdb-veritabani-ve-koleksiyon-olusturma/" },
            { title: "CosmosDB Doküman Ekleme, Okuma ve Silme", link: "../../cosmosdb/cosmosdb-dokuman-ekleme-okuma-ve-silme/" },
            { title: "CosmosDB Veri Modelleme ve Normalizasyon", link: "../../cosmosdb/cosmosdb-veri-modelleme-ve-normalizasyon/" },
            { title: "CosmosDB Request Units (RU) ve Performans Yönetimi", link: "../../cosmosdb/cosmosdb-request-units-ru-ve-performans/" },
            { title: "CosmosDB İndeksleme ve Performans Optimizasyonu", link: "../../cosmosdb/cosmosdb-indexleme-ve-performans-optimizasyonu/" },
            { title: "CosmosDB Global Dağıtım ve Replikasyon", link: "../../cosmosdb/cosmosdb-global-distribution-ve-replication/" },
            { title: "CosmosDB Multi-Region Deployment ve High Availability", link: "../../cosmosdb/cosmosdb-multi-region-deployment-ve-high-availability/" },
            { title: "CosmosDB Query Özellikleri ve SQL API", link: "../../cosmosdb/cosmosdb-query-ozellikleri-ve-sql-api/" },
            { title: "CosmosDB Cosmos SDK Kullanımı", link: "../../cosmosdb/cosmosdb-cosmos-sdk-kullanimi/" },
            { title: "CosmosDB Değişiklikler, Mimari ve Küme Yönetimi", link: "../../cosmosdb/cosmosdb-changes-architectures-and-clusters/" },
            { title: "CosmosDB Data Consistency Modelleri", link: "../../cosmosdb/cosmosdb-data-consistency-modelleri/" },
            { title: "CosmosDB Change Feed ve Event Streaming", link: "../../cosmosdb/cosmosdb-change-feed-ve-event-streaming/" },
            { title: "CosmosDB Temporal Data ve Historical Queries", link: "../../cosmosdb/cosmosdb-temporal-data-ve-historical-queries/" },
            { title: "CosmosDB Auto-Scaling ve Scaling Operations", link: "../../cosmosdb/cosmosdb-auto-scaling-ve-scaling-operations/" },
            { title: "CosmosDB Security ve Yetkilendirme", link: "../../cosmosdb/cosmosdb-security-ve-yetkilendirme/" },
            { title: "CosmosDB Backup ve Restore İşlemleri", link: "../../cosmosdb/cosmosdb-backup-ve-restore-islemleri/" },
            { title: "CosmosDB ETL ve Veri Bağlama", link: "../../cosmosdb/cosmosdb-etl-ve-veri-basimlama/" },
            { title: "CosmosDB SQL API ve DocumentDB Veri Modeli", link: "../../cosmosdb/cosmosdb-sql-api-ve-documentdb-veri-modeli/" },
            { title: "CosmosDB Data Warehouse ve Analytics Entegrasyonu", link: "../../cosmosdb/cosmosdb-data-warehouse-ve-analytics-entegrasyonu/" },
            { title: "CosmosDB Logging ve Monitoring", link: "../../cosmosdb/cosmosdb-logging-ve-monitoring/" }
        ]
    },
    {
        title: "Redis",
        subMenu: [
            { title: "Redis Nedir?", link: "../../redis/redis-nedir/" },
            { title: "Redis Kurulumu ve Konfigürasyonu", link: "../../redis/redis-kurulumu-ve-konfigurasiyonu/" },
            { title: "Redis Temel Veri Tipleri", link: "../../redis/redis-temel-veri-tipleri/" },
            { title: "Redis Kuyruk ve Publish-Subscribe Modelleri", link: "../../redis/redis-kuyruk-ve-publish-subscribe-modelleri/" },
            { title: "Redis Cache Olarak Kullanımı", link: "../../redis/redis-cache-olarak-kullanimi/" },
            { title: "Redis Persistence ve Eviction Stratejileri", link: "../../redis/redis-persistence-ve-eviction-stratejileri/" },
            { title: "Redis Cluster ve Replication Kullanımı", link: "../../redis/redis-cluster-ve-replication-kullanimi/" },
            { title: "Redis Pipeline ve Batch İşlemleri", link: "../../redis/redis-pipeline-ve-batch-islemleri/" },
            { title: "Redis Lua Scripting ve Otomasyon", link: "../../redis/redis-lua-scripting-ve-otomasyon/" },
            { title: "Redis ve Memcached Arasındaki Farklar", link: "../../redis/redis-memcached-ile-farklar/" },
            { title: "Redis Monitoring ve Performance Tuning", link: "../../redis/redis-monitoring-ve-performance-tuning/" },
            { title: "Redis Sharding ve Veri Dağıtımı", link: "../../redis/redis-sharding-ve-veri-dagitimi/" },
            { title: "Redis Sentinel ve High Availability", link: "../../redis/redis-sentinel-ve-high-availability/" },
            { title: "Redis Transaction ve Multi-Commands", link: "../../redis/redis-transaction-ve-multi-commands/" },
            { title: "Redis Advanced Data Structures", link: "../../redis/redis-advanced-data-structures/" },
            { title: "Redis Connection Management ve Tuning", link: "../../redis/redis-connection-management-ve-tuning/" },
            { title: "Redis Transaction Management ve Atomic Operations", link: "../../redis/redis-transaction-management-ve-atomic-operations/" },
            { title: "Redis Security ve Authorization", link: "../../redis/redis-security-ve-authorization/" },
            { title: "Redis Backup ve Restore İşlemleri", link: "../../redis/redis-backup-ve-restore-isyleri/" }
        ]
    },
    {
        title: "MongoDB",
        subMenu: [
            { title: "MongoDB Nedir?", link: "../../mongodb/mongodb-nedir/" },
            { title: "MongoDB Kurulumu ve Konfigürasyonu", link: "../../mongodb/mongodb-kurulumu-ve-konfigurasiyonu/" },
            { title: "MongoDB Temel Veri Tipleri", link: "../../mongodb/mongodb-temel-veri-tipleri/" },
            { title: "MongoDB Collection ve Document Kavramları", link: "../../mongodb/mongodb-collection-ve-document-kavramlari/" },
            { title: "MongoDB Veri Ekleme, Okuma ve Silme", link: "../../mongodb/mongodb-veri-ekleme-okuma-ve-silme/" },
            { title: "MongoDB İndeksleme ve Veri Optimizasyonu", link: "../../mongodb/mongodb-indexleme-ve-veri-optimizasyonu/" },
            { title: "MongoDB Query ve Aggregation Pipelines", link: "../../mongodb/mongodb-query-ve-aggregation-pipelines/" },
            { title: "MongoDB Replication ve Cluster Kullanımı", link: "../../mongodb/mongodb-replication-ve-cluster-kullanimi/" },
            { title: "MongoDB Sharding ve Veri Dağıtım Stratejileri", link: "../../mongodb/mongodb-sharding-ve-veri-dagitim-stratejileri/" },
            { title: "MongoDB Data Modeling ve Normalizasyon", link: "../../mongodb/mongodb-data-modeling-ve-normalizasyon/" },
            { title: "MongoDB ACID ve Consistency", link: "../../mongodb/mongodb-acid-ve-consistency/" },
            { title: "MongoDB Transaction Support ve Multi-Document Transactions", link: "../../mongodb/mongodb-transaction-support-ve-multi-document-transactions/" },
            { title: "MongoDB Güvenlik ve Authentication", link: "../../mongodb/mongodb-security-ve-authentication/" },
            { title: "MongoDB Backup ve Restore İşlemleri", link: "../../mongodb/mongodb-backup-ve-restore-isyleri/" },
            { title: "MongoDB Monitoring ve Performance Tuning", link: "../../mongodb/mongodb-monitoring-ve-performance-tuning/" },
            { title: "MongoDB Advanced Aggregation Framework", link: "../../mongodb/mongodb-advanced-aggregation-framework/" },
            { title: "MongoDB Full-Text Search ve İndeksleme", link: "../../mongodb/mongodb-full-text-search-ve-indexleme/" },
            { title: "MongoDB Shell ve Araçları", link: "../../mongodb/mongodb-mongodb-shell-ve-tools/" },
            { title: "MongoDB Cloud Deployment ve Üzerindeki Uygulamalar", link: "../../mongodb/mongodb-cloud-deployment-ve-uzerindeki-uygulamalar/" }
        ]
    },
    {
        title: "LiteDB",
        subMenu: [
            { title: "LiteDB Nedir?", link: "../../litedb/litedb-nedir/" },
            { title: "LiteDB Kurulumu ve Konfigürasyonu", link: "../../litedb/litedb-kurulumu-ve-konfigurasiyonu/" },
            { title: "LiteDB Temel Veri Tipleri", link: "../../litedb/litedb-temel-veri-tipleri/" },
            { title: "LiteDB Veri Ekleme, Okuma ve Silme", link: "../../litedb/litedb-veri-ekleme-okuma-ve-silme/" },
            { title: "LiteDB Query ve Aggregation", link: "../../litedb/litedb-query-ve-aggregation/" },
            { title: "LiteDB İndeksleme ve Veri Optimizasyonu", link: "../../litedb/litedb-indexleme-ve-veri-optimizasyonu/" },
            { title: "LiteDB Replication ve Veri Senkronizasyonu", link: "../../litedb/litedb-replication-ve-data-synchronization/" },
            { title: "LiteDB Backup ve Restore İşlemleri", link: "../../litedb/litedb-backup-ve-restore-isyleri/" },
            { title: "LiteDB Performans ve Tuning", link: "../../litedb/litedb-performance-ve-tuning/" },
            { title: "LiteDB Güvenlik ve Authentication", link: "../../litedb/litedb-security-ve-authentication/" },
            { title: "LiteDB Veri Modelleme ve Veri Mimarisi", link: "../../litedb/litedb-data-modeling-ve-veri-mimari/" },
            { title: "LiteDB Sync ve Async İşlemleri", link: "../../litedb/litedb-sync-async-operations/" },
            { title: "LiteDB Transaction Support ve Veri Bütünlüğü", link: "../../litedb/litedb-transaction-support-ve-veri-bütünlüğü/" },
            { title: "LiteDB Embedded Database Kullanımı", link: "../../litedb/litedb-embedded-database-kullanimi/" }
        ]
    },
    {
        title: "Cassandara",
        subMenu: [
            { title: "Cassandra Nedir?", link: "../../cassandra/cassandra-nedir/" },
            { title: "Cassandra Kurulumu ve Konfigürasyonu", link: "../../cassandra/cassandra-kurulumu-ve-konfigurasiyonu/" },
            { title: "Cassandra Veri Modelleme ve Yapısı", link: "../../cassandra/cassandra-veri-modelleme-ve-yapisi/" },
            { title: "Cassandra Cluster ve Replication Kullanımı", link: "../../cassandra/cassandra-cluster-ve-replication-kullanimi/" },
            { title: "Cassandra Sharding ve Veri Dağıtımı", link: "../../cassandra/cassandra-sharding-ve-veri-dagitimi/" },
            { title: "Cassandra Veri Ekleme, Okuma ve Silme", link: "../../cassandra/cassandra-veri-ekleme-okuma-ve-silme/" },
            { title: "Cassandra İndeksleme ve Sorgulama", link: "../../cassandra/cassandra-indexleme-ve-sorgulama/" },
            { title: "Cassandra Consistency ve Availability", link: "../../cassandra/cassandra-consistency-ve-availability/" },
            { title: "Cassandra Transaction ve Batch İşlemleri", link: "../../cassandra/cassandra-transaction-ve-batch-islemleri/" },
            { title: "Cassandra Data Modeling ve Normalizasyon", link: "../../cassandra/cassandra-data-modeling-ve-normalizasyon/" },
            { title: "Cassandra Backup ve Restore İşlemleri", link: "../../cassandra/cassandra-backup-ve-restore-isyleri/" },
            { title: "Cassandra Gelişmiş Sorgulama ve Aggregation", link: "../../cassandra/cassandra-gelismis-sorgulama-ve-aggregation/" },
            { title: "Cassandra Performans Tuning ve Optimizasyon", link: "../../cassandra/cassandra-performance-tuning-ve-optimizasyon/" },
            { title: "Cassandra Güvenlik ve Authorization", link: "../../cassandra/cassandra-güvenlik-ve-authorization/" },
            { title: "Cassandra High Availability ve Fault Tolerance", link: "../../cassandra/cassandra-high-availability-ve-fault-tolerance/" },
            { title: "Cassandra Cluster Monitoring ve Troubleshooting", link: "../../cassandra/cassandra-cluster-monitoring-ve-troubleshooting/" },
            { title: "Cassandra Scaling ve Dağıtık Mimari", link: "../../cassandra/cassandra-scaling-ve-distributed-architecture/" }
        ]
    },
    {
        title: "RavenDB",
        subMenu: [
            { title: "RavenDB Nedir?", link: "../../ravendb/ravendb-nedir/" },
            { title: "RavenDB Kurulumu ve Konfigürasyonu", link: "../../ravendb/ravendb-kurulumu-ve-konfigurasiyonu/" },
            { title: "RavenDB Veri Modelleme ve Yapısı", link: "../../ravendb/ravendb-veri-modelleme-ve-yapisi/" },
            { title: "RavenDB Cluster ve Replication Kullanımı", link: "../../ravendb/ravendb-cluster-ve-replication-kullanimi/" },
            { title: "RavenDB İndeksleme ve Veri Arama", link: "../../ravendb/ravendb-indexleme-ve-veri-arama/" },
            { title: "RavenDB Sharding ve Veri Dağıtımı", link: "../../ravendb/ravendb-sharding-ve-veri-dagitimi/" },
            { title: "RavenDB Veri Ekleme, Okuma ve Silme", link: "../../ravendb/ravendb-veri-ekleme-okuma-ve-silme/" },
            { title: "RavenDB Transaction ve Batch İşlemleri", link: "../../ravendb/ravendb-transaction-ve-batch-islemleri/" },
            { title: "RavenDB Query ve Aggregation", link: "../../ravendb/ravendb-query-ve-aggregation/" },
            { title: "RavenDB Backup ve Restore İşlemleri", link: "../../ravendb/ravendb-backup-ve-restore-isyleri/" },
            { title: "RavenDB Cluster Management ve Scaling", link: "../../ravendb/ravendb-cluster-management-ve-scaling/" },
            { title: "RavenDB Güvenlik ve Authentication", link: "../../ravendb/ravendb-güvenlik-ve-authentication/" },
            { title: "RavenDB Performans Tuning ve Optimizasyon", link: "../../ravendb/ravendb-performance-tuning-ve-optimizasyon/" },
            { title: "RavenDB Veri Modelleme ve Normalizasyon", link: "../../ravendb/ravendb-data-modeling-ve-normalizasyon/" },
            { title: "RavenDB Gelişmiş İndeksleme ve Sorgulama", link: "../../ravendb/ravendb-advanced-indexing-ve-sorgulama/" },
            { title: "RavenDB High Availability ve Fault Tolerance", link: "../../ravendb/ravendb-high-availability-ve-fault-tolerance/" },
            { title: "RavenDB Scaling ve Dağıtık Mimari", link: "../../ravendb/ravendb-scaling-ve-distributed-architecture/" }
        ]
    },
    {
        title: "CouchDB",
        subMenu: [
            { title: "CouchDB Nedir?", link: "../../couchdb/couchdb-nedir/" },
            { title: "CouchDB Kurulumu ve Konfigürasyonu", link: "../../couchdb/couchdb-kurulumu-ve-konfigurasiyonu/" },
            { title: "CouchDB Veri Modelleme ve Yapısı", link: "../../couchdb/couchdb-veri-modelleme-ve-yapisi/" },
            { title: "CouchDB Cluster ve Replication Kullanımı", link: "../../couchdb/couchdb-cluster-ve-replication-kullanimi/" },
            { title: "CouchDB Veri Ekleme, Okuma ve Silme", link: "../../couchdb/couchdb-veri-ekleme-okuma-ve-silme/" },
            { title: "CouchDB Query ve Aggregation", link: "../../couchdb/couchdb-query-ve-aggregation/" },
            { title: "CouchDB İndeksleme ve Arama", link: "../../couchdb/couchdb-indexleme-ve-arama/" },
            { title: "CouchDB Cluster ve Scaling", link: "../../couchdb/couchdb-cluster-ve-scaling/" },
            { title: "CouchDB Replication ve Veri Dağıtımı", link: "../../couchdb/couchdb-replication-ve-veri-dağıtımı/" },
            { title: "CouchDB Veri Modelleme ve Normalizasyon", link: "../../couchdb/couchdb-veri-modelleme-ve-normalizasyon/" },
            { title: "CouchDB Backup ve Restore İşlemleri", link: "../../couchdb/couchdb-backup-ve-restore-isyleri/" },
            { title: "CouchDB Güvenlik ve Authorization", link: "../../couchdb/couchdb-güvenlik-ve-authorization/" },
            { title: "CouchDB Performans Tuning ve Optimizasyon", link: "../../couchdb/couchdb-performance-tuning-ve-optimizasyon/" },
            { title: "CouchDB Veri Ekleme, Okuma ve Silme", link: "../../couchdb/couchdb-veri-ekleme-okuma-ve-silme/" }
        ]
    },
    {
        title: "CouchDB",
        subMenu: [
        ]
    },
    {
        title: "Solr",
        subMenu: [
            { title: "Solr Nedir?", link: "../../solr/solr-nedir/" },
            { title: "Solr Kurulumu ve Konfigürasyonu", link: "../../solr/solr-kurulumu-ve-konfigurasiyonu/" },
            { title: "Solr Veri Modelleme ve İndeksleme", link: "../../solr/solr-veri-modelleme-ve-indeksleme/" },
            { title: "Solr Veri Arama ve Querying", link: "../../solr/solr-veri-arama-ve-querying/" },
            { title: "Solr Cluster ve Replication Kullanımı", link: "../../solr/solr-cluster-ve-replication-kullanimi/" },
            { title: "Solr Scaling ve Distributed Search", link: "../../solr/solr-scaling-ve-distributed-search/" },
            { title: "Solr Performans Tuning ve Optimizasyon", link: "../../solr/solr-performance-tuning-ve-optimizasyon/" },
            { title: "Solr Backup ve Restore İşlemleri", link: "../../solr/solr-backup-ve-restore-isyleri/" },
            { title: "Solr Query, Faceting ve Aggregation", link: "../../solr/solr-query-faceting-ve-aggregation/" },
            { title: "Solr Gelişmiş Özellikler ve Extensions", link: "../../solr/solr-advanced-features-ve-extensions/" },
            { title: "Solr Güvenlik ve Authorization", link: "../../solr/solr-güvenlik-ve-authorization/" },
            { title: "Solr Data Import Handler ve ETL", link: "../../solr/solr-data-import-handler-ve-etl/" },
            { title: "Solr Error Handling ve Debugging", link: "../../solr/solr-error-handling-ve-debugging/" },
            { title: "Solr Gelişmiş Arama Özellikleri", link: "../../solr/solr-advanced-search-features/" }
        ]
    },
    {
        title: "Sphinx",
        subMenu: [
            { title: "Sphinx Nedir?", link: "../../sphinx/sphinx-nedir/" },
            { title: "Sphinx Kurulumu ve Konfigürasyonu", link: "../../sphinx/sphinx-kurulumu-ve-konfigurasiyonu/" },
            { title: "Sphinx İndeksleme ve Veri Arama", link: "../../sphinx/sphinx-indeksleme-ve-veri-arama/" },
            { title: "Sphinx Query ve Sorgulama", link: "../../sphinx/sphinx-query-ve-sorgulama/" },
            { title: "Sphinx Cluster ve Replication Kullanımı", link: "../../sphinx/sphinx-cluster-ve-replication-kullanimi/" },
            { title: "Sphinx Scaling ve Distributed Search", link: "../../sphinx/sphinx-scaling-ve-distributed-search/" },
            { title: "Sphinx Performans Tuning ve Optimizasyon", link: "../../sphinx/sphinx-performans-tuning-ve-optimizasyon/" },
            { title: "Sphinx Backup ve Restore İşlemleri", link: "../../sphinx/sphinx-backup-ve-restore-isyleri/" },
            { title: "Sphinx Gelişmiş Arama ve Query Optimizasyonu", link: "../../sphinx/sphinx-advanced-search-ve-query-optimization/" },
            { title: "Sphinx Entegrasyon ve Uyumluluk", link: "../../sphinx/sphinx-integrasyon-ve-uyumluluk/" },
            { title: "Sphinx Veri Modelleme ve Normalizasyon", link: "../../sphinx/sphinx-veri-modelleme-ve-normalizasyon/" },
            { title: "Sphinx Query Faceting ve Aggregation", link: "../../sphinx/sphinx-query-faceting-ve-aggregation/" },
            { title: "Sphinx Güvenlik ve Authorization", link: "../../sphinx/sphinx-güvenlik-ve-authorization/" },
            { title: "Sphinx Error Handling ve Debugging", link: "../../sphinx/sphinx-error-handling-ve-debugging/" }
        ]
    },
    {
        title: "Elastic Search",
        subMenu: [
            { title: "Elastic Search Nedir?", link: "../../elasticsearch/elasticsearch-nedir/" },
            { title: "Elastic Search Kurulumu ve Konfigürasyonu", link: "../../elasticsearch/elasticsearch-kurulumu-ve-konfigurasiyonu/" },
            { title: "Elastic Search Veri Modelleme ve İndeksleme", link: "../../elasticsearch/elasticsearch-veri-modelleme-ve-indeksleme/" },
            { title: "Elastic Search Query ve Sorgulama", link: "../../elasticsearch/elasticsearch-query-ve-sorgulama/" },
            { title: "Elastic Search Cluster ve Replication Kullanımı", link: "../../elasticsearch/elasticsearch-cluster-ve-replication-kullanimi/" },
            { title: "Elastic Search Scaling ve Distributed Search", link: "../../elasticsearch/elasticsearch-scaling-ve-distributed-search/" },
            { title: "Elastic Search Performans Tuning ve Optimizasyon", link: "../../elasticsearch/elasticsearch-performans-tuning-ve-optimizasyon/" },
            { title: "Elastic Search Backup ve Restore İşlemleri", link: "../../elasticsearch/elasticsearch-backup-ve-restore-isyleri/" },
            { title: "Elastic Search Query, Faceting ve Aggregation", link: "../../elasticsearch/elasticsearch-query-faceting-ve-aggregation/" },
            { title: "Elastic Search Gelişmiş Özellikler ve Extensions", link: "../../elasticsearch/elasticsearch-gelişmiş-özellikler-ve-extensions/" },
            { title: "Elastic Search Veri Ekleme ve Güncelleme", link: "../../elasticsearch/elasticsearch-veri-ekleme-ve-güncelleme/" },
            { title: "Elastic Search Analytics ve Log Analizi", link: "../../elasticsearch/elasticsearch-analytics-ve-log-analizi/" },
            { title: "Elastic Search Güvenlik ve Authorization", link: "../../elasticsearch/elasticsearch-güvenlik-ve-authorization/" },
            { title: "Elastic Search Error Handling ve Debugging", link: "../../elasticsearch/elasticsearch-error-handling-ve-debugging/" }
        ]
    },
    {
        title: "Scrutor",
        subMenu: [
            { title: "Scrutor Nedir?", link: "../../scrutor/scrutor-nedir/" },
            { title: "Scrutor Kurulumu ve Konfigürasyonu", link: "../../scrutor/scrutor-kurulumu-ve-konfigurasiyonu/" },
            { title: "Scrutor Nedir ve Neden Kullanılır?", link: "../../scrutor/scrutor-nedir-ve-neden-kullanilir/" },
            { title: "Scrutor ile Dependency Injection Üzerinde Çalışma", link: "../../scrutor/scrutor-ile-dependency-injection-uzerinde-calisma/" },
            { title: "Scrutor ile Service Registration ve Scoped Lifetimes", link: "../../scrutor/scrutor-ile-service-registration-ve-scoped-lifetimes/" },
            { title: "Scrutor ile Otomatik Service Registration", link: "../../scrutor/scrutor-ile-otomatik-service-registration/" },
            { title: "Scrutor ile Filter Attributes Kullanımı", link: "../../scrutor/scrutor-ile-filter-attributes-kullanimi/" },
            { title: "Scrutor ile Named Services Kullanımı", link: "../../scrutor/scrutor-ile-named-services-kullanimi/" },
            { title: "Scrutor ile Assembly Scanning", link: "../../scrutor/scrutor-ile-assembly-scanning/" },
            { title: "Scrutor ile Advanced Dependency Injection Taktikleri", link: "../../scrutor/scrutor-ile-advanced-dependency-injection-taktikleri/" },
            { title: "Scrutor ile Lifecycle Üzerinde Çalışma", link: "../../scrutor/scrutor-ile-lifecycle-uzerinde-calisma/" },
            { title: "Scrutor ile Service Provider ve Injection", link: "../../scrutor/scrutor-ile-service-provider-ve-injection/" },
            { title: "Scrutor ile Dependency Injection Gelişmiş Kullanımı", link: "../../scrutor/scrutor-ile-dependency-injection-gelismis-kullanimi/" }
        ]
    },
    {
        title: "Razor",
        subMenu: [
            { title: "Razor Nedir?", link: "../../razor/razor-nedir/" },
            { title: "Razor Sayfaları ve View'lar", link: "../../razor/razor-sayfalari-ve-viewlar/" },
            { title: "Razor Syntax ve Temel Özellikler", link: "../../razor/razor-syntax-ve-temel-ozellikler/" },
            { title: "Razor Değişkenleri ve Dinamik Veri", link: "../../razor/razor-degiskenleri-ve-dinamik-veri/" },
            { title: "Razor Döngüler ve Koşullar", link: "../../razor/razor-donguler-ve-kosullar/" },
            { title: "Razor Yardımcı Fonksiyonlar", link: "../../razor/razor-yardimci-fonksiyonlar/" },
            { title: "Razor HTML ile C# Entegrasyonu", link: "../../razor/razor-html-ile-csharp-entegrasyonu/" },
            { title: "Razor ViewBag ve ViewData Kullanımı", link: "../../razor/razor-viewbag-ve-viewdata-kullanimi/" },
            { title: "Razor Layout'lar ve Partial View'lar", link: "../../razor/razor-layoutlar-ve-partial-viewlar/" },
            { title: "Razor Formlar ve Veri Bindingi", link: "../../razor/razor-formlar-ve-veri-bindingi/" },
            { title: "Razor Ajax ve JSON Destekli Formlar", link: "../../razor/razor-ajax-ve-json-destekli-formlar/" },
            { title: "Razor Görünümü ve Controller ile İletişim", link: "../../razor/razor-gorunumu-ve-controller-ile-iletisim/" },
            { title: "Razor ViewModel Kullanımı", link: "../../razor/razor-viewmodel-kullanimi/" }
        ]
    },
    {
        title: "DotLiquid",
        subMenu: [
            { title: "DotLiquid Nedir?", link: "../../dotliquid/dotliquid-nedir/" },
            { title: "DotLiquid Kurulumu ve Konfigürasyonu", link: "../../dotliquid/dotliquid-kurulumu-ve-konfigurasiyonu/" },
            { title: "DotLiquid Syntax ve Temel Özellikler", link: "../../dotliquid/dotliquid-syntax-ve-temel-ozellikler/" },
            { title: "DotLiquid Değişkenleri ve Veri Bindingi", link: "../../dotliquid/dotliquid-degiskenleri-ve-veri-bindingi/" },
            { title: "DotLiquid Filter ve Function Kullanımı", link: "../../dotliquid/dotliquid-filter-ve-function-kullanimi/" },
            { title: "DotLiquid ile Templating ve Dinamik İçerik", link: "../../dotliquid/dotliquid-ile-templating-ve-dinamik-icerik/" },
            { title: "DotLiquid Conditional ve Loop Yapıları", link: "../../dotliquid/dotliquid-conditional-ve-loop-yapilari/" },
            { title: "DotLiquid Layout'lar ve İncluion'lar", link: "../../dotliquid/dotliquid-layoutlar-ve-incluionlar/" },
            { title: "DotLiquid Extend ve Inherit Kullanımı", link: "../../dotliquid/dotliquid-extend-ve-inherit-kullanimi/" },
            { title: "DotLiquid Template Rendering ve Output", link: "../../dotliquid/dotliquid-template-rendering-ve-output/" },
            { title: "DotLiquid Performance ve Optimization", link: "../../dotliquid/dotliquid-performance-ve-optimization/" },
            { title: "DotLiquid Debugging ve Hata Ayıklama", link: "../../dotliquid/dotliquid-debugging-ve-hata-ayiklama/" },
            { title: "DotLiquid ile Gelişmiş Template Özellikleri", link: "../../dotliquid/dotliquid-ile-gelismis-template-ozellikleri/" }
        ]
    },
    {
        title: "Scriban",
        subMenu: [
            { title: "Scriban Nedir?", link: "../../scriban/scriban-nedir/" },
            { title: "Scriban Kurulumu ve Konfigürasyonu", link: "../../scriban/scriban-kurulumu-ve-konfigurasiyonu/" },
            { title: "Scriban Syntax ve Temel Özellikler", link: "../../scriban/scriban-syntax-ve-temel-ozellikler/" },
            { title: "Scriban Değişkenleri ve Veri Bindingi", link: "../../scriban/scriban-degiskenleri-ve-veri-bindingi/" },
            { title: "Scriban Filter ve Function Kullanımı", link: "../../scriban/scriban-filter-ve-function-kullanimi/" },
            { title: "Scriban Template Engine ve Dinamik İçerik", link: "../../scriban/scriban-template-engine-ve-dinamik-icerik/" },
            { title: "Scriban Conditional ve Loop Yapıları", link: "../../scriban/scriban-conditional-ve-loop-yapilari/" },
            { title: "Scriban Layout'lar ve İncluion'lar", link: "../../scriban/scriban-layoutlar-ve-incluionlar/" },
            { title: "Scriban Extend ve Inherit Kullanımı", link: "../../scriban/scriban-extend-ve-inherit-kullanimi/" },
            { title: "Scriban Template Rendering ve Output", link: "../../scriban/scriban-template-rendering-ve-output/" },
            { title: "Scriban Performance ve Optimization", link: "../../scriban/scriban-performance-ve-optimization/" },
            { title: "Scriban Debugging ve Hata Ayıklama", link: "../../scriban/scriban-debugging-ve-hata-ayiklama/" },
            { title: "Scriban ile Gelişmiş Template Özellikleri", link: "../../scriban/scriban-ile-gelismis-template-ozellikleri/" }
        ]
    },
    {
        title: "Fluid",
        subMenu: [
            { title: "Fluid Nedir?", link: "../../fluid/fluid-nedir/" },
            { title: "Fluid Kurulumu ve Konfigürasyonu", link: "../../fluid/fluid-kurulumu-ve-konfigurasiyonu/" },
            { title: "Fluid Syntax ve Temel Özellikler", link: "../../fluid/fluid-syntax-ve-temel-ozellikler/" },
            { title: "Fluid Değişkenleri ve Veri Bindingi", link: "../../fluid/fluid-degiskenleri-ve-veri-bindingi/" },
            { title: "Fluid Filter ve Function Kullanımı", link: "../../fluid/fluid-filter-ve-function-kullanimi/" },
            { title: "Fluid Template Engine ve Dinamik İçerik", link: "../../fluid/fluid-template-engine-ve-dinamik-icerik/" },
            { title: "Fluid Conditional ve Loop Yapıları", link: "../../fluid/fluid-conditional-ve-loop-yapilari/" },
            { title: "Fluid Layout'lar ve İncluion'lar", link: "../../fluid/fluid-layoutlar-ve-incluionlar/" },
            { title: "Fluid Extend ve Inherit Kullanımı", link: "../../fluid/fluid-extend-ve-inherit-kullanimi/" },
            { title: "Fluid Template Rendering ve Output", link: "../../fluid/fluid-template-rendering-ve-output/" },
            { title: "Fluid Performance ve Optimization", link: "../../fluid/fluid-performance-ve-optimization/" },
            { title: "Fluid Debugging ve Hata Ayıklama", link: "../../fluid/fluid-debugging-ve-hata-ayiklama/" },
            { title: "Fluid ile Gelişmiş Template Özellikleri", link: "../../fluid/fluid-ile-gelismis-template-ozellikleri/" }
        ]
    },
    {
        title: "MediatR",
        subMenu: [
            { title: "Mediatr Nedir?", link: "../../mediatr/mediatr-nedir/" },
            { title: "Mediatr Kurulumu ve Konfigürasyonu", link: "../../mediatr/mediatr-kurulumu-ve-konfigurasiyonu/" },
            { title: "Mediatr Request ve Response Modelleri", link: "../../mediatr/mediatr-request-ve-response-modelleri/" },
            { title: "Mediatr Handler Kullanımı", link: "../../mediatr/mediatr-handler-kullanimi/" },
            { title: "Mediatr Pipeline Behaviors", link: "../../mediatr/mediatr-pipeline-behaviors/" },
            { title: "Mediatr Notifications", link: "../../mediatr/mediatr-notifications/" },
            { title: "Mediatr ile Dependency Injection", link: "../../mediatr/mediatr-injection-dependency/" },
            { title: "Mediatr Request-Response Örnekleri", link: "../../mediatr/mediatr-request-response-ornekleri/" },
            { title: "Mediatr Async İstekler", link: "../../mediatr/mediatr-async-istekler/" },
            { title: "Mediatr Validation ve Error Handling", link: "../../mediatr/mediatr-validation-ve-error-handling/" },
            { title: "Mediatr Pipeline Özellikleri", link: "../../mediatr/mediatr-pipeline-ozellikleri/" },
            { title: "Mediatr Performance ve Optimization", link: "../../mediatr/mediatr-performance-ve-optimization/" },
            { title: "Mediatr Debugging ve Hata Ayıklama", link: "../../mediatr/mediatr-debugging-ve-hata-ayiklama/" }
        ]
    },
    {
        title: "FluentValidation",
        subMenu: [
            { title: "FluentValidation Nedir?", link: "../../fluentvalidation/fluentvalidation-nedir/" },
            { title: "FluentValidation Kurulumu ve Konfigürasyonu", link: "../../fluentvalidation/fluentvalidation-kurulumu-ve-konfigurasiyonu/" },
            { title: "FluentValidation Validation Özellikleri", link: "../../fluentvalidation/fluentvalidation-validation-ozellikleri/" },
            { title: "FluentValidation Validators ve Rules", link: "../../fluentvalidation/fluentvalidation-validators-ve-rules/" },
            { title: "FluentValidation Custom Validation Kullanımı", link: "../../fluentvalidation/fluentvalidation-custom-validation-kullanimi/" },
            { title: "FluentValidation Dinamik Validation", link: "../../fluentvalidation/fluentvalidation-dinamik-validation/" },
            { title: "FluentValidation Dependency Injection ile Validation", link: "../../fluentvalidation/fluentvalidation-validation-with-dependency-injection/" },
            { title: "FluentValidation Client-Side Validation", link: "../../fluentvalidation/fluentvalidation-client-side-validation/" },
            { title: "FluentValidation Complex Validation Senaryoları", link: "../../fluentvalidation/fluentvalidation-complex-validation-scenarios/" },
            { title: "FluentValidation Validation Errors ve Messages", link: "../../fluentvalidation/fluentvalidation-validation-errors-ve-messages/" },
            { title: "FluentValidation Performance ve Optimization", link: "../../fluentvalidation/fluentvalidation-performance-ve-optimization/" },
            { title: "FluentValidation Debugging ve Hata Ayıklama", link: "../../fluentvalidation/fluentvalidation-debugging-ve-hata-ayiklama/" },
            { title: "FluentValidation ile Gelişmiş Validation Özellikleri", link: "../../fluentvalidation/fluentvalidation-ile-gelismis-validation-ozellikleri/" }
        ]
    },
    {
        title: "Polly",
        subMenu: [
            { title: "Polly Nedir?", link: "../../polly/polly-nedir/" },
            { title: "Polly Kurulumu ve Konfigürasyonu", link: "../../polly/polly-kurulumu-ve-konfigurasiyonu/" },
            { title: "Polly ile Hata Yönetimi ve Sağlamlık Stratejileri", link: "../../polly/polly-ile-hata-yonetimi-ve-saglamlik-stratejileri/" },
            { title: "Polly Retry Stratejisi Kullanımı", link: "../../polly/polly-retry-stratejisi-kullanimi/" },
            { title: "Polly Circuit Breaker Stratejisi", link: "../../polly/polly-circuit-breaker-stratejisi/" },
            { title: "Polly Timeout Stratejisi", link: "../../polly/polly-timeout-stratejisi/" },
            { title: "Polly Fallback Stratejisi", link: "../../polly/polly-fallback-stratejisi/" },
            { title: "Polly Bulkhead Stratejisi", link: "../../polly/polly-bulkhead-stratejisi/" },
            { title: "Polly Async ve Senkron Stratejiler", link: "../../polly/polly-async-ve-senkron-stratejiler/" },
            { title: "Polly Dependency Injection ile Kullanımı", link: "../../polly/polly-dependency-injection-ile-kullanimi/" },
            { title: "Polly Performance ve Optimization", link: "../../polly/polly-performance-ve-optimization/" },
            { title: "Polly Debugging ve Hata Ayıklama", link: "../../polly/polly-debugging-ve-hata-ayiklama/" },
            { title: "Polly ile Gelişmiş Hata Yönetimi Özellikleri", link: "../../polly/polly-ile-gelismis-hata-yonetimi-ozellikleri/" }
        ]
    },
    {
        title: "Nuke",
        subMenu: [
            { title: "Nuke Nedir?", link: "../../nuke/nuke-nedir/" },
            { title: "Nuke Kurulumu ve Konfigürasyonu", link: "../../nuke/nuke-kurulumu-ve-konfigurasiyonu/" },
            { title: "Nuke ile Otomasyon Süreçleri", link: "../../nuke/nuke-ile-otomasyon-surecleri/" },
            { title: "Nuke Task ve Build Step Kullanımı", link: "../../nuke/nuke-task-ve-build-step-kullanimi/" },
            { title: "Nuke ile CI/CD Pipelines", link: "../../nuke/nuke-ile-ci-cd-pipelines/" },
            { title: "Nuke Build Targets ve Dependency Management", link: "../../nuke/nuke-build-targets-ve-dependency-management/" },
            { title: "Nuke Configuration Dosyaları ve Environment Variables", link: "../../nuke/nuke-configuration-dosyalari-ve-environment-variables/" },
            { title: "Nuke Test Automation ve Sonuç Raporları", link: "../../nuke/nuke-test-automation-ve-sonuc-raporlari/" },
            { title: "Nuke Performance ve Optimization", link: "../../nuke/nuke-performance-ve-optimization/" },
            { title: "Nuke Debugging ve Hata Ayıklama", link: "../../nuke/nuke-debugging-ve-hata-ayiklama/" },
            { title: "Nuke ile Gelişmiş Build Özellikleri", link: "../../nuke/nuke-ile-gelismis-build-ozellikleri/" }
        ]
    },
    {
        title: "Benchmark.NET",
        subMenu: [
            { title: "Benchmark.NET Nedir?", link: "../../benchmark-dotnet/benchmarkdotnet-nedir/" },
            { title: "Benchmark.NET Kurulumu ve Konfigürasyonu", link: "../../benchmark-dotnet/benchmarkdotnet-kurulumu-ve-konfigurasiyonu/" },
            { title: "Benchmark.NET ile Performans Testleri", link: "../../benchmark-dotnet/benchmarkdotnet-ile-performans-testleri/" },
            { title: "Benchmark.NET Kod Örnekleri ve Senaryolar", link: "../../benchmark-dotnet/benchmarkdotnet-kod-ornekleri-ve-senaryolar/" },
            { title: "Benchmark.NET Senkron ve Asenkron Testler", link: "../../benchmark-dotnet/benchmarkdotnet-senkron-ve-asenkron-testler/" },
            { title: "Benchmark.NET ile Gelişmiş Performans Analizleri", link: "../../benchmark-dotnet/benchmarkdotnet-ile-gelismis-performans-analizleri/" },
            { title: "Benchmark.NET Sonuç Raporları ve Yorumlama", link: "../../benchmark-dotnet/benchmarkdotnet-sonuc-raporlari-ve-yorumlama/" },
            { title: "Benchmark.NET Test Kategorileri ve Parametreleri", link: "../../benchmark-dotnet/benchmarkdotnet-test-kategorileri-ve-parametreleri/" },
            { title: "Benchmark.NET Performance ve Optimization", link: "../../benchmark-dotnet/benchmarkdotnet-performance-ve-optimization/" },
            { title: "Benchmark.NET Debugging ve Hata Ayıklama", link: "../../benchmark-dotnet/benchmarkdotnet-debugging-ve-hata-ayiklama/" },
            { title: "Benchmark.NET ile Kapsamlı Performans Testleri", link: "../../benchmark-dotnet/benchmarkdotnet-ile-kapsamli-performans-testleri/" },
            { title: "Benchmark.NET Advanced Configuration Options", link: "../../benchmark-dotnet/benchmarkdotnet-advanced-configuration-options/" }
        ]
    },
    {
        title: "NodaTime",
        subMenu: [
            { title: "NodaTime Nedir?", link: "../../nodatime/nodatime-nedir/" },
            { title: "NodaTime Kurulumu ve Konfigürasyonu", link: "../../nodatime/nodatime-kurulumu-ve-konfigurasiyonu/" },
            { title: "NodaTime ile Tarih ve Zaman Manipülasyonu", link: "../../nodatime/nodatime-ile-tarih-ve-zaman-manipulasyonu/" },
            { title: "NodaTime Zaman Bölgeleri ve UTC ile Çalışma", link: "../../nodatime/nodatime-zaman-bolgeleri-ve-utc-ile-calisma/" },
            { title: "NodaTime Intervalleri ve Süre Hesaplamaları", link: "../../nodatime/nodatime-intervalleri-ve-sure-hesaplamalari/" },
            { title: "NodaTime ile LocalDateTime ve Instant Kullanımı", link: "../../nodatime/nodatime-ile-localdatetime-ve-instant-kullanimi/" },
            { title: "NodaTime ile Duration ve Period Kullanımı", link: "../../nodatime/nodatime-ile-duration-ve-period-kullanimi/" },
            { title: "NodaTime ile Tarih Formatlama ve Parsing", link: "../../nodatime/nodatime-ile-tarih-formatlama-ve-parsing/" },
            { title: "NodaTime ile Tarih/Zaman Veritabanına Kaydetme", link: "../../nodatime/nodatime-ile-tarih-zaman-veritabanina-kaydetme/" },
            { title: "NodaTime ile UTC ve Local Time Dönüştürme", link: "../../nodatime/nodatime-ile-utc-ve-local-time-donusturme/" },
            { title: "NodaTime ile Uluslararası Tarih ve Zaman Hesaplamaları", link: "../../nodatime/nodatime-ile-uluslararasi-tarih-ve-zaman-hesaplamalari/" },
            { title: "NodaTime ile Tarih-Saat Uyumsuzluğu Çözme", link: "../../nodatime/nodatime-ile-tarih-saat-uyumsuzlugu-cozme/" }
        ]
    },
    {
        title: "GenFu",
        subMenu: [
            { title: "GenFu Nedir?", link: "../../genfu/genfu-nedir/" },
            { title: "GenFu Kurulumu ve Konfigürasyonu", link: "../../genfu/genfu-kurulumu-ve-konfigurasiyonu/" },
            { title: "GenFu ile Veri Üretimi ve Modelleme", link: "../../genfu/genfu-ile-veri-uretimi-ve-modelleme/" },
            { title: "GenFu ile Kendi Veri Modelinizi Oluşturun", link: "../../genfu/genfu-kendi-veri-modelinizi-olusturun/" },
            { title: "GenFu ile Random Veri Üretimi ve Validasyon", link: "../../genfu/genfu-ile-random-veri-uretimi-ve-validasyon/" },
            { title: "GenFu ile Numeric Veri Üretimi", link: "../../genfu/genfu-ile-numeric-veri-uretimi/" },
            { title: "GenFu ile String ve Date Veri Üretimi", link: "../../genfu/genfu-ile-string-ve-date-veri-uretimi/" },
            { title: "GenFu ile Özelleştirilmiş Veri Modeli Oluşturma", link: "../../genfu/genfu-ile-ozelleştirilmiş-veri-modeli-olusturma/" },
            { title: "GenFu ile Veri Generator Özellikleri", link: "../../genfu/genfu-ile-veri-generator-ozellikleri/" },
            { title: "GenFu ile Birden Fazla Veri Üreticisi Kullanımı", link: "../../genfu/genfu-ile-birden-fazla-veri-ureticisi-kullanimi/" },
            { title: "GenFu ile Data Analytics Uygulamaları", link: "../../genfu/genfu-ile-data-analytics-uygulamalari/" },
            { title: "GenFu ile Test ve Değerlendirme Senaryoları", link: "../../genfu/genfu-ile-test-ve-degerlendirme-senaryolari/" }
        ]
    },
    {
        title: "SwashBuckle",
        subMenu: [
            { title: "SwashBuckle Nedir?", link: "../../swashbuckle/swashbuckle-nedir/" },
            { title: "SwashBuckle Kurulumu ve Konfigürasyonu", link: "../../swashbuckle/swashbuckle-kurulumu-ve-konfigurasiyonu/" },
            { title: "SwashBuckle ile Swagger UI ve Docs Oluşturma", link: "../../swashbuckle/swashbuckle-ile-swagger-ui-ve-docs-olusturma/" },
            { title: "SwashBuckle ile API Özelliklerini Belgeleme", link: "../../swashbuckle/swashbuckle-ile-api-ozelliklerini-belgelesme/" },
            { title: "SwashBuckle ile Swagger Özellikleri ve Konfigürasyonları", link: "../../swashbuckle/swashbuckle-ile-swagger-ozellikleri-ve-konfigurasiyonlari/" },
            { title: "SwashBuckle ile Authorization ve Security Ayarları", link: "../../swashbuckle/swashbuckle-ile-authorization-ve-security-ayarlar/" },
            { title: "SwashBuckle ile API Versionlama", link: "../../swashbuckle/swashbuckle-ile-api-versionlama/" },
            { title: "SwashBuckle ile Dinamik Swagger Dokümanı Oluşturma", link: "../../swashbuckle/swashbuckle-ile-dinamik-swagger-dokumani-olusturma/" },
            { title: "SwashBuckle ile API Dokümanı Destekleyici Ekler", link: "../../swashbuckle/swashbuckle-ile-api-dokumani-destekleyici-ekler/" },
            { title: "SwashBuckle ile Response Dokümanı Özellikleri", link: "../../swashbuckle/swashbuckle-ile-response-dokumani-ozellikleri/" },
            { title: "SwashBuckle ile API Pipeline Özellikleri", link: "../../swashbuckle/swashbuckle-ile-api-pipeline-ozellikleri/" },
            { title: "SwashBuckle ile OpenAPI Standardı Uyumu", link: "../../swashbuckle/swashbuckle-ile-openapi-standardi-uyumu/" }
        ]
    },
    {
        title: "Blazor",
        subMenu: [
            { title: "Blazor Nedir?", link: "../../blazor/blazor-nedir/" },
            { title: "Blazor Kurulumu ve Konfigürasyonu", link: "../../blazor/blazor-kurulumu-ve-konfigurasiyonu/" },
            { title: "Blazor ile İnteraktif Web Uygulamaları Geliştirme", link: "../../blazor/blazor-ile-interaktif-web-uygulamalari-gelistirme/" },
            { title: "Blazor WebAssembly ve Server-Side Modelleri", link: "../../blazor/blazor-webassembly-ve-server-side-modelleri/" },
            { title: "Blazor ile Komponent Tabanlı Uygulama Geliştirme", link: "../../blazor/blazor-ile-komponent-temelli-uygulama-gelistirme/" },
            { title: "Blazor ile Rerendering ve State Management", link: "../../blazor/blazor-ile-rerendering-ve-state-management/" },
            { title: "Blazor ile Hata Ayıklama ve Debugging", link: "../../blazor/blazor-ile-hata-ayiklama-ve-debugging/" },
            { title: "Blazor ile Formlar ve Validasyon", link: "../../blazor/blazor-ile-formlar-ve-validasyon/" },
            { title: "Blazor ile Veri Bağlama ve Komponent Etkileşimleri", link: "../../blazor/blazor-ile-veri-baglama-ve-komponent-etkileşimleri/" },
            { title: "Blazor ile API ve Arayüz Etkileşimleri", link: "../../blazor/blazor-ile-api-ve-arayuz-etkileşimleri/" },
            { title: "Blazor ile Authentication ve Authorization", link: "../../blazor/blazor-ile-authentication-ve-authorization/" },
            { title: "Blazor ile Routing ve Navigation", link: "../../blazor/blazor-ile-routing-ve-navigation/" }
        ]
    },
    {
        title: "Orleans",
        subMenu: [
            { title: "Orleans Nedir?", link: "../../orleans/orleans-nedir/" },
            { title: "Orleans Kurulumu ve Konfigürasyonu", link: "../../orleans/orleans-kurulumu-ve-konfigurasiyonu/" },
            { title: "Orleans ile Dağıtık Sistemler Geliştirme", link: "../../orleans/orleans-ile-dağıtık-sistemler-geliştirme/" },
            { title: "Orleans Actor Modeli ve Grains Kullanımı", link: "../../orleans/orleans-actor-modeli-ve-grains-kullanimi/" },
            { title: "Orleans ile Depolama ve Senkronizasyon", link: "../../orleans/orleans-ile-depolama-ve-senkronizasyon/" },
            { title: "Orleans ile Scalability ve Performans Optimizasyonu", link: "../../orleans/orleans-ile-scalability-ve-performans-optimizasyonu/" },
            { title: "Orleans ile Fault Tolerant ve High Availability Sistemler", link: "../../orleans/orleans-ile-fault-tolerant-ve-high-availability-sistemler/" },
            { title: "Orleans ile Event Sourcing ve Aktualizasyonlar", link: "../../orleans/orleans-ile-event-sourcing-ve-aktualizasyonlar/" },
            { title: "Orleans ile Async ve Parallel Programming", link: "../../orleans/orleans-ile-async-ve-parallel-programming/" },
            { title: "Orleans ile Kompleks Dağıtık Uygulamalar Geliştirme", link: "../../orleans/orleans-ile-kompleks-dağıtık-uygulamalar-gelistirme/" },
            { title: "Orleans ile Monitoring ve Loglama", link: "../../orleans/orleans-ile-monitoring-ve-loglama/" },
            { title: "Orleans ile Transactionlar ve Consistency", link: "../../orleans/orleans-ile-transactionlar-ve-consistency/" }
        ]
    },
    {
        title: "Tye",
        subMenu: [
            { title: "Tye Nedir?", link: "../../tye/tye-nedir/" },
            { title: "Tye Kurulumu ve Konfigürasyonu", link: "../../tye/tye-kurulumu-ve-konfigurasiyonu/" },
            { title: "Tye ile Mikroservis Geliştirme", link: "../../tye/tye-ile-mikroservis-gelistirme/" },
            { title: "Tye ile Servislerinizi Yönetme ve İzleme", link: "../../tye/tye-ile-servislerinizi-yonetme-ve-izleme/" },
            { title: "Tye ile Local Geliştirme ve Dağıtım Senaryoları", link: "../../tye/tye-ile-local-gelistirme-ve-dağıtım-senaryoları/" },
            { title: "Tye ile Çoklu Servisler Arası İletişim", link: "../../tye/tye-ile-çoklu-servisler-arası-iletişim/" },
            { title: "Tye ile Service Discovery ve Communication", link: "../../tye/tye-ile-service-discovery-ve-communication/" },
            { title: "Tye ile Docker Konteynerleri ve Mikroservisler", link: "../../tye/tye-ile-docker-konteynerleri-ve-mikroservisler/" },
            { title: "Tye ile Logging ve Monitoring", link: "../../tye/tye-ile-logging-ve-monitoring/" },
            { title: "Tye ile API Gateway Kullanımı ve Konfigürasyonu", link: "../../tye/tye-ile-api-gateway-kullanimi-ve-konfigurasiyonu/" },
            { title: "Tye ile Async Servisler ve Parallel Uygulamalar", link: "../../tye/tye-ile-async-servisler-ve-parallel-uygulamalar/" },
            { title: "Tye ile Kubernetes ile Uyumlu Geliştirme", link: "../../tye/tye-ile-kubernetes-ile-uyumlu-gelistirme/" }
        ]
    },
    {
        title: "ELK Stack",
        subMenu: [
            { title: "ELK Stack Nedir?", link: "../../elk-stack/elk-stack-nedir/" },
            { title: "ELK Stack Kurulumu ve Konfigürasyonu", link: "../../elk-stack/elk-stack-kurulumu-ve-konfigurasiyonu/" },
            { title: "Elasticsearch ile Veri Arama ve Analiz", link: "../../elk-stack/elasticsearch-ile-veri-arama-ve-analiz/" },
            { title: "Logstash ile Veri İşleme ve Entegrasyon", link: "../../elk-stack/logstash-ile-veri-işleme-ve-entegrasyon/" },
            { title: "Kibana ile Veri Görselleştirme ve Raporlama", link: "../../elk-stack/kibana-ile-veri-görselleştirme-ve-raporlama/" },
            { title: "ELK Stack ile Log Analizi ve İzleme", link: "../../elk-stack/elk-stack-ile-log-analizi-ve-izleme/" },
            { title: "ELK Stack ile Sistem ve Uygulama Monitoring", link: "../../elk-stack/elk-stack-ile-sistem-ve-uygulama-monitoring/" },
            { title: "Elasticsearch ile Full-Text Search ve Indexleme", link: "../../elk-stack/elasticsearch-ile-full-text-search-ve-indexleme/" },
            { title: "ELK Stack ile Gerçek Zamanlı Analiz ve Raporlama", link: "../../elk-stack/elk-stack-ile-gercek-zamanli-analiz-ve-raporlama/" },
            { title: "ELK Stack ile Veri Toplama ve ETL İşlemleri", link: "../../elk-stack/elk-stack-ile-veri-toplama-ve-etl-islemleri/" },
            { title: "ELK Stack ile Hata İzleme ve Anomali Tespiti", link: "../../elk-stack/elk-stack-ile-hata-izleme-ve-anomali-tespiti/" },
            { title: "ELK Stack ile Data Streaming ve Real-Time Analysis", link: "../../elk-stack/elk-stack-ile-data-streaming-ve-real-time-analysis/" }
        ]
    },
    {
        title: "Senty.io",
        subMenu: [
            { title: "Sentry.io Nedir?", link: "../../sentry-io/sentry-io-nedir/" },
            { title: "Sentry.io Kurulumu ve Konfigürasyonu", link: "../../sentry-io/sentry-io-kurulumu-ve-konfigurasiyonu/" },
            { title: "Sentry.io ile Hata İzleme ve Raporlama", link: "../../sentry-io/sentry-io-ile-hata-izleme-ve-raporlama/" },
            { title: "Sentry.io ile Uçtan Uca Monitoring", link: "../../sentry-io/sentry-io-ile-uçtan-uca-monitoring/" },
            { title: "Sentry.io ile Real-Time Hata İzleme", link: "../../sentry-io/sentry-io-ile-real-time-hata-izleme/" },
            { title: "Sentry.io ile Hata Raporlaması ve Anomali Tespiti", link: "../../sentry-io/sentry-io-ile-hata-raporlamasi-ve-anomali-tespiti/" },
            { title: "Sentry.io ile Backend ve Frontend Hata Takibi", link: "../../sentry-io/sentry-io-ile-backend-ve-frontend-hata-takibi/" },
            { title: "Sentry.io ile Hata Önceliklendirme ve Takip Sistemi", link: "../../sentry-io/sentry-io-ile-hata-önceliklendirme-ve-takip-sistemi/" },
            { title: "Sentry.io ile Uygulama Performans İzleme", link: "../../sentry-io/sentry-io-ile-uygulama-performans-izleme/" },
            { title: "Sentry.io ile Entegrasyon ve Uplikasyon Ayarları", link: "../../sentry-io/sentry-io-ile-integrasyon-ve-uplikasyon-ayarları/" },
            { title: "Sentry.io ile Hata Cause Analizi ve Raporlama", link: "../../sentry-io/sentry-io-ile-hata-cause-analizi-ve-raporlama/" },
            { title: "Sentry.io ile Ekip Yönetimi ve Hata Paylaşımı", link: "../../sentry-io/sentry-io-ile-ekip-yönetimi-ve-hata-paylaşımı/" }
        ]
    },
    {
        title: "Datadog",
        subMenu: [
            { title: "Datadog Nedir?", link: "../../datadog/datadog-nedir/" },
            { title: "Datadog Kurulumu ve Konfigürasyonu", link: "../../datadog/datadog-kurulumu-ve-konfigurasiyonu/" },
            { title: "Datadog ile Sistem Monitoring ve Log Analizi", link: "../../datadog/datadog-ile-sistem-monitoring-ve-log-analizi/" },
            { title: "Datadog ile Performance Monitoring ve Geliştirme", link: "../../datadog/datadog-ile-performance-monitoring-ve-gelistirme/" },
            { title: "Datadog ile Dinamik Log Analizi ve İzleme", link: "../../datadog/datadog-ile-dinamik-log-analizi-ve-izleme/" },
            { title: "Datadog ile Kubernetes Monitoring ve İzleme", link: "../../datadog/datadog-ile-kubernetes-monitoring-ve-izleme/" },
            { title: "Datadog ile Alarm Konfigürasyonu ve Notifikasyonlar", link: "../../datadog/datadog-ile-alarm-konfigürasyonu-ve-notifikasyonlar/" },
            { title: "Datadog ile Uygulama Monitoring ve İzleme", link: "../../datadog/datadog-ile-uygulama-monitoring-ve-izleme/" },
            { title: "Datadog ile Anomali Tespiti ve Hata İzleme", link: "../../datadog/datadog-ile-anomali-tespiti-ve-hata-izleme/" },
            { title: "Datadog ile İzleme Panelleri ve Raporlama", link: "../../datadog/datadog-ile-izleme-panelleri-ve-raporlama/" },
            { title: "Datadog ile Log Toplama ve Veri Analizi", link: "../../datadog/datadog-ile-log-toplama-ve-veri-analizi/" },
            { title: "Datadog ile Mikroservis Monitoring ve İzleme", link: "../../datadog/datadog-ile-mikroservis-monitoring-ve-izleme/" }
        ]
    },
    {
        title: "Loggly",
        subMenu: [
            { title: "Loggly Nedir?", link: "../../loggly/loggly-nedir/" },
            { title: "Loggly Kurulumu ve Konfigürasyonu", link: "../../loggly/loggly-kurulumu-ve-konfigurasiyonu/" },
            { title: "Loggly ile Log Analizi ve İzleme", link: "../../loggly/loggly-ile-log-analizi-ve-izleme/" },
            { title: "Loggly ile Veri Toplama ve Central Logging", link: "../../loggly/loggly-ile-veri-toplama-ve-central-logging/" },
            { title: "Loggly ile Anomali Tespiti ve Hata İzleme", link: "../../loggly/loggly-ile-anomali-tespiti-ve-hata-izleme/" },
            { title: "Loggly ile Alarm Konfigürasyonu ve Raporlama", link: "../../loggly/loggly-ile-alarm-konfigürasyonu-ve-raporlama/" },
            { title: "Loggly ile Veri Görselleştirme ve Dashboard Oluşturma", link: "../../loggly/loggly-ile-veri-görselleştirme-ve-dashboard-olusturma/" },
            { title: "Loggly ile Performance İzleme ve Monitoring", link: "../../loggly/loggly-ile-performance-izleme-ve-monitoring/" },
            { title: "Loggly ile Kubernetes Log İzleme", link: "../../loggly/loggly-ile-kubernetes-log-izleme/" },
            { title: "Loggly ile API Gateway Log Analizi", link: "../../loggly/loggly-ile-api-gateway-log-analizi/" },
            { title: "Loggly ile Sistem Monitoring ve Raporlama", link: "../../loggly/loggly-ile-sistem-monitoring-ve-raporlama/" },
            { title: "Loggly ile Kapsamlı Log Analizi ve Gelişmiş Filtreleme", link: "../../loggly/loggly-ile-kapsamli-log-analizi-ve-gelişmiş-filtreleme/" }
        ]
    },
    {
        title: "StackExchanege.Redis",
        subMenu: [
            { title: "StackExchange.Redis Nedir?", link: "../../stackexchange-redis/stackexchange-redis-nedir/" },
            { title: "StackExchange.Redis Kurulumu ve Konfigürasyonu", link: "../../stackexchange-redis/stackexchange-redis-kurulumu-ve-konfigurasiyonu/" },
            { title: "StackExchange.Redis ile Veri Depolama ve Erişim", link: "../../stackexchange-redis/stackexchange-redis-ile-veri-depolama-ve-erişim/" },
            { title: "StackExchange.Redis ile Publish-Subscribe Modeli", link: "../../stackexchange-redis/stackexchange-redis-ile-publish-subscribe-modeli/" },
            { title: "StackExchange.Redis ile Transaction'lar ve Pipelining", link: "../../stackexchange-redis/stackexchange-redis-ile-transactionlar-ve-pipelining/" },
            { title: "StackExchange.Redis ile Uzun Dönemli Veri Depolama", link: "../../stackexchange-redis/stackexchange-redis-ile-uzun-donemli-veri-depolama/" },
            { title: "StackExchange.Redis ile Veri İzleme ve Analiz", link: "../../stackexchange-redis/stackexchange-redis-ile-veri-izleme-ve-analiz/" },
            { title: "StackExchange.Redis ile Hata İzleme ve Debugging", link: "../../stackexchange-redis/stackexchange-redis-ile-hata-izleme-ve-debugging/" },
            { title: "StackExchange.Redis ile Cache ve Otomatik Expiry Kullanımı", link: "../../stackexchange-redis/stackexchange-redis-ile-cache-ve-otomatik-expiry-kullanimi/" },
            { title: "StackExchange.Redis ile Veri İlerleme ve Senkronizasyon", link: "../../stackexchange-redis/stackexchange-redis-ile-veri-ilerleme-ve-senkronizasyon/" },
            { title: "StackExchange.Redis ile Multithreading ve Asenkron İşlemler", link: "../../stackexchange-redis/stackexchange-redis-ile-multithreading-ve-asenkron-islemler/" },
            { title: "StackExchange.Redis ile Skalalanabilir Veri Depolama", link: "../../stackexchange-redis/stackexchange-redis-ile-skalalanabilir-veri-depolama/" }
        ]
    },
    {
        title: "EasyCaching",
        subMenu: [
            { title: "EasyCaching Nedir?", link: "../../easycaching/easycaching-nedir/" },
            { title: "EasyCaching Kurulumu ve Konfigürasyonu", link: "../../easycaching/easycaching-kurulumu-ve-konfigurasiyonu/" },
            { title: "EasyCaching ile Cache Yapısı Oluşturma", link: "../../easycaching/easycaching-ile-cache-yapisi-olusturma/" },
            { title: "EasyCaching ile Distributed Cache Kullanımı", link: "../../easycaching/easycaching-ile-distributed-cache-kullanimi/" },
            { title: "EasyCaching ile Veri Expiry ve Temizleme", link: "../../easycaching/easycaching-ile-veri-expiry-ve-temizleme/" },
            { title: "EasyCaching ile Memcached ve Redis Kullanımı", link: "../../easycaching/easycaching-ile-memcached-ve-redis-kullanimi/" },
            { title: "EasyCaching ile Performance Optimizations", link: "../../easycaching/easycaching-ile-performance-optimizations/" },
            { title: "EasyCaching ile Cache Key Stratejileri", link: "../../easycaching/easycaching-ile-cache-key-stratejileri/" },
            { title: "EasyCaching ile Thread Safe ve Concurrency Desteği", link: "../../easycaching/easycaching-ile-thread-safe-ve-concurrency-destegi/" },
            { title: "EasyCaching ile Async Cache Operations", link: "../../easycaching/easycaching-ile-async-cache-operations/" },
            { title: "EasyCaching ile Cache Analytics ve Monitoring", link: "../../easycaching/easycaching-ile-cache-analytics-ve-monitoring/" }
        ]
    },
    {
        title: "Stored Procedure",
        subMenu: [
            { title: "Stored Procedure Nedir?", link: "../../stored-procedures/stored-procedure-nedir/" },
            { title: "Neden Stored Procedure Kullanılır?", link: "../../stored-procedures/neden-stored-procedure-kullanilir/" },
            { title: "Stored Procedure Avantajları ve Dezavantajları", link: "../../stored-procedures/stored-procedure-avantajlari-ve-dezavantajlari/" },
            { title: "C# ile Stored Procedure Çağrısı", link: "../../stored-procedures/csharp-ile-stored-procedure-cagrisi/" },
            { title: "Stored Procedure Parametreli Kullanımı", link: "../../stored-procedures/stored-procedure-parametreli-kullanimi/" },
            { title: "Stored Procedure Örnekleri", link: "../../stored-procedures/stored-procedure-ornekleri/" },
            { title: "Stored Procedure Hata Yönetimi", link: "../../stored-procedures/stored-procedure-hata-yonetimi/" },
            { title: "Stored Procedure Performans Optimizasyonu", link: "../../stored-procedures/performance-optimization-stored-procedures/" }
        ]
    },
    {
        title: "Constraint",
        subMenu: [
            { title: "Constraint Nedir?", link: "../../constraints/constraint-nedir/" },
            { title: "Primary Key Constraint Nedir?", link: "../../constraints/primary-key-constraint/" },
            { title: "Foreign Key Constraint Nedir?", link: "../../constraints/foreign-key-constraint/" },
            { title: "Unique Constraint Nedir?", link: "../../constraints/unique-constraint/" },
            { title: "Check Constraint Nedir?", link: "../../constraints/check-constraint/" },
            { title: "Default Constraint Nedir?", link: "../../constraints/default-constraint/" },
            { title: "Not Null Constraint Nedir?", link: "../../constraints/not-null-constraint/" },
            { title: "Constraint Yönetimi ve Performans Optimizasyonu", link: "../../constraints/constraint-yonetimi-ve-performans-optimizasyonu/" },
            { title: "Constraint Kullanımı ile İlgili En İyi Yöntemler", link: "../../constraints/constraint-kullanimi-ile-ilgili-en-iyi-yontemler/" }
        ]
    },
    {
        title: "Trigger",
        subMenu: [
            { title: "Trigger Nedir?", link: "../../triggers/trigger-nedir/" },
            { title: "Neden Trigger Kullanılır?", link: "../../triggers/neden-trigger-kullanilir/" },
            { title: "AFTER Trigger Nedir?", link: "../../triggers/after-trigger-nedir/" },
            { title: "BEFORE Trigger Nedir?", link: "../../triggers/before-trigger-nedir/" },
            { title: "INSTEAD OF Trigger Nedir?", link: "../../triggers/instead-of-trigger-nedir/" },
            { title: "Trigger Oluşturma Örnekleri", link: "../../triggers/trigger-olusturma-ornekleri/" },
            { title: "Trigger Yönetimi ve Hata Yönetimi", link: "../../triggers/trigger-yonetimi-ve-hata-yonetimi/" },
            { title: "Performans Optimizasyonu için Trigger Kullanımı", link: "../../triggers/performans-optimizasyonu-icin-trigger-kullanimi/" },
            { title: "Trigger Kullanımı için En İyi Yöntemler", link: "../../triggers/trigger-kullanimi-icin-en-iyi-yontemler/" }
        ]
    },
    {
        title: "WebSocket",
        subMenu: [
            { title: "WebSocket Nedir?", link: "../../websockets/websocket-nedir/" },
            { title: "WebSocket ile HTTP Arasındaki Farklar", link: "../../websockets/websocket-ile-http-arasindaki-farklar/" },
            { title: "WebSocket Nasıl Çalışır?", link: "../../websockets/websocket-nasil-calisir/" },
            { title: "C# ile WebSocket Kullanımı", link: "../../websockets/csharp-ile-websocket-kullanimi/" },
            { title: "SignalR ve WebSocket", link: "../../websockets/signalr-ve-websocket/" },
            { title: "Gerçek Zamanlı Uygulamalar için WebSockets", link: "../../websockets/gercek-zamanli-uygulamalar-icin-websockets/" },
            { title: "WebSocket Güvenliği ve En İyi Yöntemler", link: "../../websockets/websocket-guvenligi-ve-en-iyi-yontemler/" },
            { title: "WebSocket Performans Optimizasyonu", link: "../../websockets/websocket-performans-optimizasyonu/" },
            { title: "WebSocket Tabanlı Chat Uygulaması", link: "../../websockets/websocket-tabanli-chat-uygulamasi/" }
        ]
    },
    {
        title: "SignalR Core",
        subMenu: [
            { title: "SignalR Core Nedir?", link: "../../signalr-core/signalr-core-nedir/" },
            { title: "SignalR Core ve WebSocket Farkları", link: "../../signalr-core/signalr-core-ve-websocket-farklari/" },
            { title: "SignalR Core Mimarisi ve Çalışması", link: "../../signalr-core/signalr-core-mimari-ve-calismasi/" },
            { title: "SignalR Core Kurulumu ve İlk Proje", link: "../../signalr-core/signalr-core-kurulumu-ve-ilk-proje/" },
            { title: "SignalR Core Hub Kavramı ve Kullanımı", link: "../../signalr-core/signalr-core-hub-kavrami-ve-kullanimi/" },
            { title: "Gerçek Zamanlı Uygulama Örneği", link: "../../signalr-core/gercek-zamanli-uygulama-ornegi/" },
            { title: "SignalR Core Güvenlik ve Yetkilendirme", link: "../../signalr-core/signalr-core-guvenlik-ve-yetkilendirme/" },
            { title: "SignalR Core Scalability: Redis ve Azure", link: "../../signalr-core/signalr-core-scalability-redis-ve-azure/" },
            { title: "SignalR Core Performans Optimizasyonu", link: "../../signalr-core/signalr-core-performans-optimizasyonu/" }
        ]
    },
    {
        title: "AutoMapper",
        subMenu: [
            { title: "AutoMapper Nedir?", link: "../../automapper/automapper-nedir/" },
            { title: "Neden AutoMapper Kullanılır?", link: "../../automapper/neden-automapper-kullanilir/" },
            { title: "AutoMapper Kurulumu ve İlk Kullanım", link: "../../automapper/automapper-kurulumu-ve-ilk-kullanim/" },
            { title: "Mapleme İşlemleri ve Konfigürasyon", link: "../../automapper/mapleme-islemleri-ve-konfigurasyon/" },
            { title: "Custom Mapping ve Resolver Kullanımı", link: "../../automapper/custom-mapping-ve-resolver-kullanimi/" },
            { title: "AutoMapper ile Collection Mapleme", link: "../../automapper/automapper-ile-collection-mapleme/" },
            { title: "Performans Optimizasyonu ve En İyi Yöntemler", link: "../../automapper/performans-optimizasyonu-ve-en-iyi-yontemler/" },
            { title: "Profil Oluşturma ile Katmanlı Yapı Desteği", link: "../../automapper/profil-olusturma-ile-katmanli-yapi-destegi/" },
            { title: "Hata Yönetimi ve Debug İpuçları", link: "../../automapper/hata-yonetimi-ve-debug-ipuclari/" }
        ]
    },
    {
        title: "Express Mapper",
        subMenu: [
            { title: "Express Mapper Nedir?", link: "../../express-mapper/express-mapper-nedir/" },
            { title: "AutoMapper ve Express Mapper Farkları", link: "../../express-mapper/automapper-ve-express-mapper-farklari/" },
            { title: "Express Mapper Kurulumu ve İlk Kullanım", link: "../../express-mapper/express-mapper-kurulumu-ve-ilk-kullanim/" },
            { title: "Mapleme İşlemleri ve Temel Konfigürasyon", link: "../../express-mapper/mapleme-islemleri-ve-temel-konfigurasyon/" },
            { title: "Custom Mapping ve Fonksiyonel Destek", link: "../../express-mapper/custom-mapping-ve-fonksiyonel-destek/" },
            { title: "Performans Optimizasyonu ve Hafif Yapı", link: "../../express-mapper/performans-optimizasyonu-ve-hafif-yapi/" },
            { title: "Express Mapper ile Collection Mapleme", link: "../../express-mapper/express-mapper-ile-collection-mapleme/" },
            { title: "Katmanlı Mimari Desteği ile Express Mapper", link: "../../express-mapper/katmanli-mimari-destegi-ile-express-mapper/" },
            { title: "Hata Yönetimi ve Debug İpuçları", link: "../../express-mapper/hata-yonetimi-ve-debug-ipuclari/" }
        ]
    },
    {
        title: "Agile Mapper",
        subMenu: [
            { title: "Agile Mapper Nedir?", link: "../../agile-mapper/agile-mapper-nedir/" },
            { title: "Agile Mapper Özellikleri ve Avantajları", link: "../../agile-mapper/agile-mapper-ozellikleri-ve-avantajlari/" },
            { title: "Agile Mapper Kurulumu ve İlk Kullanım", link: "../../agile-mapper/agile-mapper-kurulumu-ve-ilk-kullanim/" },
            { title: "Mapleme İşlemleri ve Konfigürasyon", link: "../../agile-mapper/mapleme-islemleri-ve-konfigurasyon/" },
            { title: "Agile Mapper ile Custom Mapping", link: "../../agile-mapper/agile-mapper-ile-custom-mapping/" },
            { title: "Agile Mapper ile Collection Mapleme", link: "../../agile-mapper/agile-mapper-ile-collection-mapleme/" },
            { title: "Performans Optimizasyonu ve Esneklik", link: "../../agile-mapper/performans-optimizasyonu-ve-esneklik/" },
            { title: "Agile Mapper ile Katmanlı Yapı Desteği", link: "../../agile-mapper/agile-mapper-ile-katmanli-yapi-destegi/" },
            { title: "Hata Yönetimi ve Debug İpuçları", link: "../../agile-mapper/hata-yonetimi-ve-debug-ipuclari/" }
        ]
    },
    {
        title: "Mapster",
        subMenu: [
            { title: "Mapster Nedir?", link: "../../mapster/mapster-nedir/" },
            { title: "Mapster ve Diğer Mapping Kütüphaneleri Karşılaştırması", link: "../../mapster/mapster-ve-diger-mapping-kutuphaneleri-karsilastirmasi/" },
            { title: "Mapster Kurulumu ve İlk Kullanım", link: "../../mapster/mapster-kurulumu-ve-ilk-kullanim/" },
            { title: "Mapster ile Basit Mapleme İşlemleri", link: "../../mapster/mapster-ile-basit-mapleme-islemleri/" },
            { title: "Custom Mapping ve Advanced Konfigürasyon", link: "../../mapster/custom-mapping-ve-advanced-konfigurasyon/" },
            { title: "Performans Avantajları ve Optimizasyon", link: "../../mapster/performans-avantajlari-ve-optimizasyon/" },
            { title: "Mapster ile Collection Mapleme", link: "../../mapster/mapster-ile-collection-mapleme/" },
            { title: "Mapster ile Katmanlı Mimari Desteği", link: "../../mapster/mapster-ile-katmanli-mimari-destegi/" },
            { title: "Hata Yönetimi ve Debug İpuçları", link: "../../mapster/hata-yonetimi-ve-debug-ipuclari/" }
        ]
    },
    {
        title: "E2E (End-to-End)",
        subMenu: [
            { title: "E2E (End-to-End) Testing Nedir?", link: "../../e2e-testing/e2e-testing-nedir/" },
            { title: "E2E Testing Avantajları ve Dezavantajları", link: "../../e2e-testing/e2e-testing-avantajlari-ve-dezavantajlari/" },
            { title: "E2E Test Stratejileri ve Planlama", link: "../../e2e-testing/e2e-test-stratejileri-ve-planlama/" },
            { title: "E2E Testing İçin Popüler Araçlar", link: "../../e2e-testing/e2e-testing-icin-populer-araclar/" },
            { title: "Cypress ile E2E Testing", link: "../../e2e-testing/cypress-ile-e2e-testing/" },
            { title: "Playwright ile E2E Testing", link: "../../e2e-testing/playwright-ile-e2e-testing/" },
            { title: "Selenium ile E2E Testing", link: "../../e2e-testing/selenium-ile-e2e-testing/" },
            { title: "E2E Testler için En İyi Yöntemler", link: "../../e2e-testing/e2e-testler-icin-en-iyi-yontemler/" },
            { title: "E2E Testlerin Otomasyonu ve DevOps Entegrasyonu", link: "../../e2e-testing/e2e-testlerin-otomasyonu-ve-devops/" }
        ]
    },
    {
        title: "Selenium",
        subMenu: [
            { title: "Selenium Nedir?", link: "../../selenium/selenium-nedir/" },
            { title: "Selenium ile Web Otomasyonu", link: "../../selenium/selenium-ile-web-otomasyonu/" },
            { title: "Selenium Kurulumu ve İlk Proje", link: "../../selenium/selenium-kurulumu-ve-ilk-proje/" },
            { title: "Selenium ile Otomatik Testler Yazma", link: "../../selenium/selenium-ile-otomatik-testler-yazma/" },
            { title: "Selenium WebDriver Kavramı ve Kullanımı", link: "../../selenium/selenium-webdriver-kavrami-ve-kullanimi/" },
            { title: "Selenium Grid ve Paralel Testler", link: "../../selenium/selenium-grid-ve-paralel-testler/" },
            { title: "Selenium ile Cross-Browser Testleri", link: "../../selenium/selenium-ile-cross-browser-testleri/" },
            { title: "Selenium ile Bağlantılı Testler ve CI/CD", link: "../../selenium/selenium-ile-baglantili-testler-ve-ci-cd/" },
            { title: "Selenium ile Hata Ayıklama ve Debugging", link: "../../selenium/selenium-ile-hata-ayiklama-ve-debugging/" },
            { title: "Selenium ile Raporlama ve Analiz", link: "../../selenium/selenium-ile-raporlama-ve-analiz/" }
        ]
    },
    {
        title: "Playwright",
        subMenu: [
            { title: "Playwright Nedir?", link: "../../playwright/playwright-nedir/" },
            { title: "Playwright ile Web Otomasyonu", link: "../../playwright/playwright-ile-web-otomasyonu/" },
            { title: "Playwright Kurulumu ve İlk Proje", link: "../../playwright/playwright-kurulumu-ve-ilk-proje/" },
            { title: "Playwright ile Test Otomasyonu", link: "../../playwright/playwright-ile-test-otomasyonu/" },
            { title: "Playwright ile Paralel Testler ve Grid Kullanımı", link: "../../playwright/playwright-ile-paralel-testler-ve-grid-kullanimi/" },
            { title: "Playwright ile Cross-Browser Testleri", link: "../../playwright/playwright-ile-cross-browser-testleri/" },
            { title: "Playwright ile API Testleri ve Bağlantılı Testler", link: "../../playwright/playwright-ile-api-testleri-ve-baglantili-testler/" },
            { title: "Playwright Test Raporlama ve Hata Raporları", link: "../../playwright/playwright-test-raporlama-ve-hata-raporlari/" },
            { title: "Playwright ile CI/CD Entegrasyonu", link: "../../playwright/playwright-ile-ci-cd-en-integrasyonu/" }
        ]
    },
    {
        title: "Puppeteer",
        subMenu: [
            { title: "Puppeteer Nedir?", link: "../../puppeteer/puppeteer-nedir/" },
            { title: "Puppeteer ile Web Otomasyonu", link: "../../puppeteer/puppeteer-ile-web-otomasyonu/" },
            { title: "Puppeteer Kurulumu ve İlk Proje", link: "../../puppeteer/puppeteer-kurulumu-ve-ilk-proje/" },
            { title: "Puppeteer ile Sayfa Yükleme ve Web Scraping", link: "../../puppeteer/puppeteer-ile-sayfa-yukleme-ve-web-scraping/" },
            { title: "Puppeteer ile Otomatik Testler", link: "../../puppeteer/puppeteer-ile-otomatik-testler/" },
            { title: "Puppeteer ile Screenshot ve PDF Alma", link: "../../puppeteer/puppeteer-ile-screenshot-ve-pdf-alma/" },
            { title: "Puppeteer ile Paralel Testler ve Veri Toplama", link: "../../puppeteer/puppeteer-ile-paralel-testler-ve-veri-toplama/" },
            { title: "Puppeteer ile API Testleri ve Otomasyon", link: "../../puppeteer/puppeteer-ile-api-testleri-ve-otomasyon/" },
            { title: "Puppeteer ile CI/CD Entegrasyonu", link: "../../puppeteer/puppeteer-ile-ci-cd-en-integrasyonu/" }
        ]
    },
    {
        title: "Cypress",
        subMenu: [
            { title: "Cypress Nedir?", link: "../../cypress/cypress-nedir/" },
            { title: "Cypress ile Web Otomasyonu", link: "../../cypress/cypress-ile-web-otomasyonu/" },
            { title: "Cypress Kurulumu ve İlk Proje", link: "../../cypress/cypress-kurulumu-ve-ilk-proje/" },
            { title: "Cypress ile Otomatik Testler Yazma", link: "../../cypress/cypress-ile-otomatik-testler/" },
            { title: "Cypress ile Paralel Testler ve Grid Kullanımı", link: "../../cypress/cypress-ile-paralel-testler-ve-grid-kullanimi/" },
            { title: "Cypress ile Cross-Browser Testleri", link: "../../cypress/cypress-ile-cross-browser-testleri/" },
            { title: "Cypress ile API Testleri ve Bağlantılı Testler", link: "../../cypress/cypress-ile-api-testleri-ve-baglantili-testler/" },
            { title: "Cypress Test Raporlama ve Hata Raporları", link: "../../cypress/cypress-test-raporlama-ve-hata-raporlari/" },
            { title: "Cypress CI/CD Entegrasyonu", link: "../../cypress/cypress-ci-cd-en-integrasyonu/" }
        ]
    },
    {
        title: "ActiveMQ",
        subMenu: [
            { title: "ActiveMQ Nedir?", link: "../../activemq/activemq-nedir/" },
            { title: "ActiveMQ Kurulumu ve İlk Kullanımı", link: "../../activemq/activemq-kurulumu-ve-ilk-kullanimi/" },
            { title: "ActiveMQ ile Mesaj Gönderme ve Alma", link: "../../activemq/activemq-ile-mesaj-gonderme-ve-alma/" },
            { title: "ActiveMQ Topikler ve Kuyruklar ile Çalışma", link: "../../activemq/activemq-topikler-ve-kuyruklar-ile-calisma/" },
            { title: "ActiveMQ ile Özel İletişim Protokollerinin Kullanımı", link: "../../activemq/activemq-ile-ozel-iletisim-protokollerinin-kullanimi/" },
            { title: "ActiveMQ ile Mesaj Gelenekleri ve Güvenlik", link: "../../activemq/activemq-ile-mesaj-gelenekleri-ve-guvenlik/" },
            { title: "ActiveMQ ve Kafka Karşılaştırması", link: "../../activemq/activemq-ve-kafka-karsilaştirmasi/" },
            { title: "ActiveMQ ile CI/CD Entegrasyonu", link: "../../activemq/activemq-ile-ci-cd-en-integrasyonu/" },
            { title: "ActiveMQ Performans ve Optimizasyon", link: "../../activemq/activemq-performans-ve-optimizasyon/" }
        ]
    },
    {
        title: "Apache Kafka",
        subMenu: [
            { title: "Apache Kafka Nedir?", link: "../../apache-kafka/apache-kafka-nedir/" },
            { title: "Apache Kafka Kurulumu ve İlk Adımlar", link: "../../apache-kafka/apache-kafka-kurulumu-ve-ilk-adimlar/" },
            { title: "Apache Kafka ile Mesajlaşma ve İletişim", link: "../../apache-kafka/apache-kafka-ile-mesajlasma-ve-iletisim/" },
            { title: "Apache Kafka Topikler ve Partisyonlar", link: "../../apache-kafka/apache-kafka-topikler-ve-partisyonlar/" },
            { title: "Apache Kafka ile Streaming Veri İşleme", link: "../../apache-kafka/apache-kafka-ile-streaming-veri-isleme/" },
            { title: "Apache Kafka ile Producer ve Consumer Kullanımı", link: "../../apache-kafka/apache-kafka-ile-producer-ve-consumer-kullanimi/" },
            { title: "Apache Kafka ve RabbitMQ Karşılaştırması", link: "../../apache-kafka/apache-kafka-ve-rabbitmq-karsilaştirmasi/" },
            { title: "Apache Kafka ile Hata Yönetimi ve Güvenlik", link: "../../apache-kafka/apache-kafka-ile-hata-yonetimi-ve-guvenlik/" },
            { title: "Apache Kafka CI/CD Entegrasyonu", link: "../../apache-kafka/apache-kafka-ci-cd-en-integrasyonu/" },
            { title: "Apache Kafka Performans ve Optimizasyon", link: "../../apache-kafka/apache-kafka-performans-ve-optimizasyon/" }
        ]
    },
    {
        title: "RabbitMQ",
        subMenu: [
            { title: "RabbitMQ Nedir?", link: "../../rabbitmq/rabbitmq-nedir/" },
            { title: "RabbitMQ Kurulumu ve İlk Adımlar", link: "../../rabbitmq/rabbitmq-kurulumu-ve-ilk-adimlar/" },
            { title: "RabbitMQ ile Mesaj Gönderme ve Alma", link: "../../rabbitmq/rabbitmq-ile-mesaj-gonderme-ve-alma/" },
            { title: "RabbitMQ Topikler ve Kuyruklar ile Çalışma", link: "../../rabbitmq/rabbitmq-topikler-ve-kuyruklar-ile-calisma/" },
            { title: "RabbitMQ ile Mesaj Güvenliği ve Önceliklendirme", link: "../../rabbitmq/rabbitmq-ile-mesaj-guvenligi-ve-onceliklendirme/" },
            { title: "RabbitMQ ile Producer ve Consumer Kullanımı", link: "../../rabbitmq/rabbitmq-ile-producer-ve-consumer-kullanimi/" },
            { title: "RabbitMQ ile Cluster ve Replication Oluşturma", link: "../../rabbitmq/rabbitmq-ile-cluster-ve-replication-oluşturma/" },
            { title: "RabbitMQ ve Kafka Karşılaştırması", link: "../../rabbitmq/rabbitmq-ve-kafka-karsilaştirmas,/" },
            { title: "RabbitMQ Performans ve Optimizasyon", link: "../../rabbitmq/rabbitmq-performans-ve-optimizasyon/" },
            { title: "RabbitMQ CI/CD Entegrasyonu", link: "../../rabbitmq/rabbitmq-ci-cd-entegrasyonu/" }
        ]
    },
    {
        title: "Azure Service Bus",
        subMenu: [
            { title: "Azure Service Bus Nedir?", link: "../../azure-service-bus/azure-service-bus-nedir/" },
            { title: "Azure Service Bus Kurulumu ve İlk Adımlar", link: "../../azure-service-bus/azure-service-bus-kurulumu-ve-ilk-adimlar/" },
            { title: "Azure Service Bus ile Mesajlaşma", link: "../../azure-service-bus/azure-service-bus-ile-mesajlasma/" },
            { title: "Azure Service Bus Topikler ve Kuyruklar ile Çalışma", link: "../../azure-service-bus/azure-service-bus-topikler-ve-kuyruklar-ile-calisma/" },
            { title: "Azure Service Bus ile Mesaj Güvenliği ve Özellikler", link: "../../azure-service-bus/azure-service-bus-ile-mesaj-guvenligi-ve-ozellikler/" },
            { title: "Azure Service Bus ile Queue ve Subscription Yönetimi", link: "../../azure-service-bus/azure-service-bus-ile-queue-ve-subscription-yönetimi/" },
            { title: "Azure Service Bus ile Sık Kullanılan İşlemler", link: "../../azure-service-bus/azure-service-bus-ile-sık-kullanılan-işlemler/" },
            { title: "Azure Service Bus ve Event Grid Karşılaştırması", link: "../../azure-service-bus/azure-service-bus-ve-event-grid-karsilastirmasi/" },
            { title: "Azure Service Bus CI/CD Entegrasyonu", link: "../../azure-service-bus/azure-service-bus-ci-cd-entegrasyonu/" }
        ]
    },
    {
        title: "GitHub Actions",
        subMenu: [
            { title: "GitHub Actions Nedir?", link: "../../github-actions/github-actions-nedir/" },
            { title: "GitHub Actions Kurulumu ve İlk Adımlar", link: "../../github-actions/github-actions-kurulumu-ve-ilk-adimlar/" },
            { title: "GitHub Actions ile CI/CD Pipeline Oluşturma", link: "../../github-actions/github-actions-ile-ci-cd-pipeline-oluşturma/" },
            { title: "GitHub Actions ile Test Otomasyonu", link: "../../github-actions/github-actions-ile-test-otomasyonu/" },
            { title: "GitHub Actions ile Deploy Etme", link: "../../github-actions/github-actions-ile-deploy-etme/" },
            { title: "GitHub Actions ile İşlem Akışları Oluşturma", link: "../../github-actions/github-actions-ile-işlem-akislari-oluşturma/" },
            { title: "GitHub Actions ile Ortam Değişkenleri ve Sırları Kullanma", link: "../../github-actions/github-actions-ile-ortam-değişkenleri-ve-sirlari-kullanma/" },
            { title: "GitHub Actions ve Jenkins Karşılaştırması", link: "../../github-actions/github-actions-ve-jenkins-karsilaştirmasi/" },
            { title: "GitHub Actions Performans ve Optimizasyon", link: "../../github-actions/github-actions-performans-ve-optimizasyon/" }
        ]
    },
    {
        title: "Azure Pipelines",
        subMenu: [
            { title: "Azure Pipelines Nedir?", link: "../../azure-pipelines/azure-pipelines-nedir/" },
            { title: "Azure Pipelines Kurulumu ve İlk Adımlar", link: "../../azure-pipelines/azure-pipelines-kurulumu-ve-ilk-adimlar/" },
            { title: "Azure Pipelines ile CI/CD Pipeline Oluşturma", link: "../../azure-pipelines/azure-pipelines-ile-ci-cd-pipeline-oluşturma/" },
            { title: "Azure Pipelines ile Test Otomasyonu", link: "../../azure-pipelines/azure-pipelines-ile-test-otomasyonu/" },
            { title: "Azure Pipelines ile Deploy Etme", link: "../../azure-pipelines/azure-pipelines-ile-deploy-etme/" },
            { title: "Azure Pipelines ile Ortam Değişkenleri ve Sırları Kullanma", link: "../../azure-pipelines/azure-pipelines-ile-ortam-değişkenleri-ve-sirları-kullanma/" },
            { title: "Azure Pipelines ile Çoklu Platformlar Arası Entegrasyon", link: "../../azure-pipelines/azure-pipelines-ile-çoklu-platformlar-arası-entegrasyon/" },
            { title: "Azure Pipelines ve GitHub Actions Karşılaştırması", link: "../../azure-pipelines/azure-pipelines-ve-github-actions-karsilastirmasi/" },
            { title: "Azure Pipelines Performans ve Optimizasyon", link: "../../azure-pipelines/azure-pipelines-performans-ve-optimizasyon/" }
        ]
    },
    {
        title: "Travis CI",
        subMenu: [
            { title: "Travis CI Nedir?", link: "../../travis-ci/travis-ci-nedir/" },
            { title: "Travis CI Kurulumu ve İlk Adımlar", link: "../../travis-ci/travis-ci-kurulumu-ve-ilk-adimlar/" },
            { title: "Travis CI ile CI/CD Pipeline Oluşturma", link: "../../travis-ci/travis-ci-ile-ci-cd-pipeline-oluşturma/" },
            { title: "Travis CI ile Test Otomasyonu", link: "../../travis-ci/travis-ci-ile-test-otomasyonu/" },
            { title: "Travis CI ile Deploy Etme", link: "../../travis-ci/travis-ci-ile-deploy-etme/" },
            { title: "Travis CI ile Ortam Değişkenleri ve Sırları Kullanma", link: "../../travis-ci/travis-ci-ile-ortam-değişkenleri-ve-sirlari-kullanma/" },
            { title: "Travis CI ve Jenkins Karşılaştırması", link: "../../travis-ci/travis-ci-ve-jenkins-karsilastirmasi/" },
            { title: "Travis CI Performans ve Optimizasyon", link: "../../travis-ci/travis-ci-performans-ve-optimizasyon/" }
        ]
    },
    {
        title: "Jenkins",
        subMenu: [
            { title: "Jenkins Nedir?", link: "../../jenkins/jenkins-nedir/" },
            { title: "Jenkins Kurulumu ve İlk Adımlar", link: "../../jenkins/jenkins-kurulumu-ve-ilk-adimlar/" },
            { title: "Jenkins ile CI/CD Pipeline Oluşturma", link: "../../jenkins/jenkins-ile-ci-cd-pipeline-oluşturma/" },
            { title: "Jenkins ile Test Otomasyonu", link: "../../jenkins/jenkins-ile-test-otomasyonu/" },
            { title: "Jenkins ile Deploy Etme", link: "../../jenkins/jenkins-ile-deploy-etme/" },
            { title: "Jenkins ile Ortam Değişkenleri ve Sırları Kullanma", link: "../../jenkins/jenkins-ile-ortam-değişkenleri-ve-sirlari-kullanma/" },
            { title: "Jenkins ve Travis CI Karşılaştırması", link: "../../jenkins/jenkins-ve-travis-ci-karsilaştırmasi/" },
            { title: "Jenkins Performans ve Optimizasyon", link: "../../jenkins/jenkins-performans-ve-optimizasyon/" }
        ]
    },
    {
        title: "CircleCI",
        subMenu: [
            { title: "CircleCI Nedir?", link: "../../circleci/circleci-nedir/" },
            { title: "CircleCI Kurulumu ve İlk Adımlar", link: "../../circleci/circleci-kurulumu-ve-ilk-adimlar/" },
            { title: "CircleCI ile CI/CD Pipeline Oluşturma", link: "../../circleci/circleci-ile-ci-cd-pipeline-oluşturma/" },
            { title: "CircleCI ile Test Otomasyonu", link: "../../circleci/circleci-ile-test-otomasyonu/" },
            { title: "CircleCI ile Deploy Etme", link: "../../circleci/circleci-ile-deploy-etme/" },
            { title: "CircleCI ile Ortam Değişkenleri ve Sırları Kullanma", link: "../../circleci/circleci-ile-ortam-değişkenleri-ve-sirlari-kullanma/" },
            { title: "CircleCI ve Jenkins Karşılaştırması", link: "../../circleci/circleci-ve-jenkins-karsilastirmasi/" },
            { title: "CircleCI Performans ve Optimizasyon", link: "../../circleci/circleci-performans-ve-optimizasyon/" }
        ]
    },
    {
        title: "TeamCity",
        subMenu: [
            { title: "TeamCity Nedir?", link: "../../teamcity/teamcity-nedir/" },
            { title: "TeamCity Kurulumu ve İlk Adımlar", link: "../../teamcity/teamcity-kurulumu-ve-ilk-adimlar/" },
            { title: "TeamCity ile CI/CD Pipeline Oluşturma", link: "../../teamcity/teamcity-ile-ci-cd-pipeline-oluşturma/" },
            { title: "TeamCity ile Test Otomasyonu", link: "../../teamcity/teamcity-ile-test-otomasyonu/" },
            { title: "TeamCity ile Deploy Etme", link: "../../teamcity/teamcity-ile-deploy-etme/" },
            { title: "TeamCity ile Ortam Değişkenleri ve Sırları Kullanma", link: "../../teamcity/teamcity-ile-ortam-değişkenleri-ve-sirlari-kullanma/" },
            { title: "TeamCity ve Jenkins Karşılaştırması", link: "../../teamcity/teamcity-ve-jenkins-karsilastirmasi/" },
            { title: "TeamCity Performans ve Optimizasyon", link: "../../teamcity/teamcity-performans-ve-optimizasyon/" }
        ]
    },
    {
        title: "Native Background Service",
        subMenu: [
            { title: "Native Background Service Nedir?", link: "../../native-background-service/native-background-service-nedir/" },
            { title: "Native Background Service Kurulumu ve İlk Adımlar", link: "../../native-background-service/native-background-service-kurulumu-ve-ilk-adimlar/" },
            { title: "Native Background Service ile Uzun Sürelik İşlemler", link: "../../native-background-service/native-background-service-ile-uzun-sürelik-islemler/" },
            { title: "Native Background Service ile Pusula Gönderme", link: "../../native-background-service/native-background-service-ile-pusula-gonderme/" },
            { title: "Native Background Service ile Hata Yönetimi", link: "../../native-background-service/native-background-service-ile-hata-yonetimi/" },
            { title: "Native Background Service ile Uygulama Veri Senkronizasyonu", link: "../../native-background-service/native-background-service-ile-uygulama-veri-senkiroznasyonu/" },
            { title: "Native Background Service ile Arka Planda Ağ İstekleri", link: "../../native-background-service/native-background-service-ile-arka-planda-ag-istekleri/" },
            { title: "Native Background Service ile Enerji Verimliliği", link: "../../native-background-service/native-background-service-ile-enerji-verimliligi/" }
        ]
    },
    {
        title: "Quartz",
        subMenu: [
            { title: "Quartz Nedir?", link: "../../quartz/quartz-nedir/" },
            { title: "Quartz Kurulumu ve İlk Adımlar", link: "../../quartz/quartz-kurulumu-ve-ilk-adimlar/" },
            { title: "Quartz ile Zamanlanmış Görevler Oluşturma", link: "../../quartz/quartz-ile-zamanlanmis-gorevler-olusturma/" },
            { title: "Quartz ile Tekrarlayan Görevler", link: "../../quartz/quartz-ile-tekrarlayan-gorevler/" },
            { title: "Quartz ile Jobs ve Triggers Yapısı", link: "../../quartz/quartz-ile-jobs-ve-triggers-yapisi/" },
            { title: "Quartz ile Görev Kuyruğu ve Çalıştırma", link: "../../quartz/quartz-ile-gorev-kuyruğu-ve-calistirma/" },
            { title: "Quartz Performans ve Optimizasyon", link: "../../quartz/quartz-performans-ve-optimizasyon/" },
            { title: "Quartz ve Arka Plan İşlemleri", link: "../../quartz/quartz-ve-arka-plan-islemleri/" }
        ]
    },
    {
        title: "Coravel",
        subMenu: [
            { title: "Coravel Nedir?", link: "../../coravel/coravel-nedir/" },
            { title: "Coravel Kurulumu ve İlk Adımlar", link: "../../coravel/coravel-kurulumu-ve-ilk-adimlar/" },
            { title: "Coravel ile Zamanlanmış Görevler Oluşturma", link: "../../coravel/coravel-ile-zamanlanmis-gorevler-olusturma/" },
            { title: "Coravel ile Arka Plan Görevleri", link: "../../coravel/coravel-ile-arka-plan-gorevleri/" },
            { title: "Coravel ile Mail Gönderimi Otomasyonu", link: "../../coravel/coravel-ile-mail-gonderimi-otomasyonu/" },
            { title: "Coravel ile Görevler ve Jobların Yönetimi", link: "../../coravel/coravel-ile-gorevler-ve-joblarin-yonetimi/" },
            { title: "Coravel ile Cache Kullanımı", link: "../../coravel/coravel-ile-cache-kullanimi/" },
            { title: "Coravel Performans ve Optimizasyon", link: "../../coravel/coravel-performans-ve-optimizasyon/" }
        ]
    },
    {
        title: "Behavior Testing",
        subMenu: [
            { title: "Behavior Testing Nedir?", link: "../../behavior-testing/behavior-testing-nedir/" },
            { title: "Behavior Testing Kurulumu ve İlk Adımlar", link: "../../behavior-testing/behavior-testing-kurulumu-ve-ilk-adimlar/" },
            { title: "Behavior Testing ile Tavsiye Edilen Test Yaklaşımları", link: "../../behavior-testing/behavior-testing-ile-tavsiye-edilen-test-yaklasimlari/" },
            { title: "Behavior Testing ile Günlük Görevler ve Otomasyon", link: "../../behavior-testing/behavior-testing-ile-gunluk-gorevler-ve-otomasyon/" },
            { title: "Behavior Testing ile Kapsamlı Test Senaryoları Oluşturma", link: "../../behavior-testing/behavior-testing-ile-kapsamli-test-senaryolari-olusturma/" },
            { title: "Behavior Testing ile Hata Tespiti ve Düzeltme", link: "../../behavior-testing/behavior-testing-ile-hata-tespiti-ve-duzeltme/" },
            { title: "Behavior Testing ve TDD Karşılaştırması", link: "../../behavior-testing/behavior-testing-ve-tdd-karsilastirmasi/" },
            { title: "Behavior Testing ile Performans ve Ölçeklenebilirlik", link: "../../behavior-testing/behavior-testing-ile-performans-ve-ölçeklenebilirlik/" }
        ]
    },
    {
        title: "SpecFlow",
        subMenu: [
            { title: "SpecFlow Nedir?", link: "../../specflow/specflow-nedir/" },
            { title: "SpecFlow Kurulumu ve İlk Adımlar", link: "../../specflow/specflow-kurulumu-ve-ilk-adimlar/" },
            { title: "SpecFlow ile BDD Tabanlı Testler Oluşturma", link: "../../specflow/specflow-ile-bdd-tabanli-testler-olusturma/" },
            { title: "SpecFlow ile Step Definition ve Hooks Kullanımı", link: "../../specflow/specflow-ile-step-definition-ve-hooks-kullanimi/" },
            { title: "SpecFlow ile Database Testleri ve Veri Yönetimi", link: "../../specflow/specflow-ile-database-testleri-ve-veri-yonetimi/" },
            { title: "SpecFlow ile Paralel Testler ve Performans Testleri", link: "../../specflow/specflow-ile-paralel-testler-ve-performance-testleri/" },
            { title: "SpecFlow ve Selenium ile Web Uygulama Testleri", link: "../../specflow/specflow-ve-selenium-ile-web-uygulama-testleri/" },
            { title: "SpecFlow ile Test Raporlama ve Veri Analizi", link: "../../specflow/specflow-ile-test-raporlama-ve-veri-analizi/" }
        ]
    },
    {
        title: "BDDfy",
        subMenu: [
            { title: "BDDfy Nedir?", link: "../../bddfy/bddfy-nedir/" },
            { title: "BDDfy Kurulumu ve İlk Adımlar", link: "../../bddfy/bddfy-kurulumu-ve-ilk-adimlar/" },
            { title: "BDDfy ile BDD Tabanlı Testler Oluşturma", link: "../../bddfy/bddfy-ile-bdd-tabanli-testler-olusturma/" },
            { title: "BDDfy ile Step Definition ve Hooks Kullanımı", link: "../../bddfy/bddfy-ile-step-definition-ve-hooks-kullanimi/" },
            { title: "BDDfy ile Veri Yönetimi ve Database Testleri", link: "../../bddfy/bddfy-ile-veri-yonetimi-ve-database-testleri/" },
            { title: "BDDfy ile Paralel Testler ve Performans Testleri", link: "../../bddfy/bddfy-ile-paralel-testler-ve-performans-testleri/" },
            { title: "BDDfy ve Selenium ile Web Uygulama Testleri", link: "../../bddfy/bddfy-ve-selenium-ile-web-uygulama-testleri/" },
            { title: "BDDfy ile Test Raporlama ve Veri Analizi", link: "../../bddfy/bddfy-ile-test-raporlama-ve-veri-analizi/" }
        ]
    },
    {
        title: "LightBDD",
        subMenu: [
            { title: "LightBDD Nedir?", link: "../../lightbdd/lightbdd-nedir/" },
            { title: "LightBDD Kurulumu ve İlk Adımlar", link: "../../lightbdd/lightbdd-kurulumu-ve-ilk-adimlar/" },
            { title: "LightBDD ile BDD Tabanlı Testler Oluşturma", link: "../../lightbdd/lightbdd-ile-bdd-tabanli-testler-olusturma/" },
            { title: "LightBDD ile Step Definition ve Hooks Kullanımı", link: "../../lightbdd/lightbdd-ile-step-definition-ve-hooks-kullanimi/" },
            { title: "LightBDD ile Giriş-Çıkış Testleri", link: "../../lightbdd/lightbdd-ile-giris-cikis-testleri/" },
            { title: "LightBDD ile Paralel Testler ve Performans Testleri", link: "../../lightbdd/lightbdd-ile-paralel-testler-ve-performans-testleri/" },
            { title: "LightBDD ile Web Uygulama Testleri ve Selenium Kullanımı", link: "../../lightbdd/lightbdd-ile-web-uygulama-testleri-ve-selenium-kullanimi/" },
            { title: "LightBDD Performans ve Optimizasyon", link: "../../lightbdd/lightbdd-performans-ve-optimizasyon/" }
        ]
    },
    {
        title: "Integration Testing",
        subMenu: [
            { title: "Integration Testing Nedir?", link: "../../integration-testing/integration-testing-nedir/" },
            { title: "Integration Testing Kurulumu ve İlk Adımlar", link: "../../integration-testing/integration-testing-kurulumu-ve-ilk-adimlar/" },
            { title: "Integration Testing ile Modül ve Servis Testleri", link: "../../integration-testing/integration-testing-ile-modul-ve-servis-testleri/" },
            { title: "Integration Testing ile API ve Veri Testleri", link: "../../integration-testing/integration-testing-ile-api-ve-veri-testleri/" },
            { title: "Integration Testing ile Veri Akışı ve Senkronizasyonu", link: "../../integration-testing/integration-testing-ile-veri-akisi-ve-senkronizasyonu/" },
            { title: "Integration Testing ile Bağlantılı Uygulama Testleri", link: "../../integration-testing/integration-testing-ile-baglantili-uygulama-testleri/" },
            { title: "Integration Testing ile Hata Yönetimi ve Test Raporlama", link: "../../integration-testing/integration-testing-ile-hata-yonetimi-ve-test-raporlama/" },
            { title: "Integration Testing Performans ve Optimizasyon", link: "../../integration-testing/integration-testing-performans-ve-optimizasyon/" }
        ]
    },
    {
        title: "WebApplicationFactory",
        subMenu: [
            { title: "WebApplicationFactory Nedir?", link: "../../webapplicationfactory/webapplicationfactory-nedir/" },
            { title: "WebApplicationFactory Kurulumu ve İlk Adımlar", link: "../../webapplicationfactory/webapplicationfactory-kurulumu-ve-ilk-adimlar/" },
            { title: "WebApplicationFactory ile Integration Testing", link: "../../webapplicationfactory/webapplicationfactory-ile-integration-testing/" },
            { title: "WebApplicationFactory ile Configuration ve Service Setup", link: "../../webapplicationfactory/webapplicationfactory-ile-configuration-ve-service-setup/" },
            { title: "WebApplicationFactory ile Custom Configuration Setup", link: "../../webapplicationfactory/webapplicationfactory-ile-custom-configuration-setup/" },
            { title: "WebApplicationFactory ile Test Raporlama ve Hata Ayıklama", link: "../../webapplicationfactory/webapplicationfactory-ile-tek-raporlama-ve-hata-ayiklama/" },
            { title: "WebApplicationFactory ve ASP.NET Core Test Uygulamaları", link: "../../webapplicationfactory/webapplicationfactory-ve-aspnet-core-test-uygulamalari/" },
            { title: "WebApplicationFactory Performans ve Optimizasyon", link: "../../webapplicationfactory/webapplicationfactory-performans-ve-optimizasyon/" }
        ]
    },
    {
        title: "TestServer",
        subMenu: [
            { title: "TestServer Nedir?", link: "../../testserver/testserver-nedir/" },
            { title: "TestServer Kurulumu ve İlk Adımlar", link: "../../testserver/testserver-kurulumu-ve-ilk-adimlar/" },
            { title: "TestServer ile Integration Testing", link: "../../testserver/testserver-ile-integration-testing/" },
            { title: "TestServer ile ASP.NET Core Uygulama Testleri", link: "../../testserver/testserver-ile-aspnet-core-uygulama-testleri/" },
            { title: "TestServer ile API Testleri ve Response Doğrulama", link: "../../testserver/testserver-ile-api-testleri-ve-response-dogrulama/" },
            { title: "TestServer ile Service Konteyneri ve Dependency Injection", link: "../../testserver/testserver-ile-service-konteyneri-ve-dependency-injection/" },
            { title: "TestServer ile Hata Ayıklama ve Raporlama", link: "../../testserver/testserver-ile-hata-ayiklama-ve-raporlama/" },
            { title: "TestServer Performans ve Optimizasyon", link: "../../testserver/testserver-performans-ve-optimizasyon/" }
        ]
    },
    {
        title: "Unit Testing",
        subMenu: [
            { title: "Unit Testing Nedir?", link: "../../unit-testing/unit-testing-nedir/" },
            { title: "Unit Testing Kurulumu ve İlk Adımlar", link: "../../unit-testing/unit-testing-kurulumu-ve-ilk-adimlar/" },
            { title: "Unit Testing ile Mocking ve Stubbing", link: "../../unit-testing/unit-testing-ile-mocking-ve-stubbing/" },
            { title: "Unit Testing ile Test Case ve Scenario Oluşturma", link: "../../unit-testing/unit-testing-ile-test-case-ve-scenario-olusturma/" },
            { title: "Unit Testing ile Hata Tespiti ve Raporlama", link: "../../unit-testing/unit-testing-ile-hata-tespiti-ve-raporlama/" },
            { title: "Unit Testing ile Performans Analizi", link: "../../unit-testing/unit-testing-ile-performance-analizi/" },
            { title: "Unit Testing ile Coverage ve Quality Analizi", link: "../../unit-testing/unit-testing-ile-coverage-ve-quality-analizi/" },
            { title: "Unit Testing ile Paralel ve Otomatik Testler", link: "../../unit-testing/unit-testing-ile-paralel-ve-otomatik-testler/" }
        ]
    },
    {
        title: "MSTest",
        subMenu: [
            { title: "MSTest Nedir?", link: "../../mstest/mstest-nedir/" },
            { title: "MSTest Kurulumu ve İlk Adımlar", link: "../../mstest/mstest-kurulumu-ve-ilk-adimlar/" },
            { title: "MSTest ile Unit Testing ve Test Methods", link: "../../mstest/mstest-ile-unit-testing-ve-test-methods/" },
            { title: "MSTest ile Assertions ve Expected Results", link: "../../mstest/mstest-ile-assertions-ve-expected-results/" },
            { title: "MSTest ile Data-Driven Testler", link: "../../mstest/mstest-ile-data-driven-testler/" },
            { title: "MSTest ile Attribute-Baslı Testler", link: "../../mstest/mstest-ile-attribute-basli-testler/" },
            { title: "MSTest ile Test Execution ve Paralel Testler", link: "../../mstest/mstest-ile-test-execution-ve-paralel-testler/" },
            { title: "MSTest ile Test Raporlama ve Entegrasyon", link: "../../mstest/mstest-ile-test-raporlama-ve-entegrasyon/" }
        ]
    },
    {
        title: "xUnit",
        subMenu: [
            { title: "xUnit Nedir?", link: "../../xunit/xunit-nedir/" },
            { title: "xUnit Kurulumu ve İlk Adımlar", link: "../../xunit/xunit-kurulumu-ve-ilk-adimlar/" },
            { title: "xUnit ile Unit Testing ve Test Methods", link: "../../xunit/xunit-ile-unit-testing-ve-test-methods/" },
            { title: "xUnit ile Assertions ve Expected Results", link: "../../xunit/xunit-ile-assertions-ve-expected-results/" },
            { title: "xUnit ile Paralel Testler ve Test Execution", link: "../../xunit/xunit-ile-paralel-testler-ve-test-execution/" },
            { title: "xUnit ile Data-Driven Testler", link: "../../xunit/xunit-ile-data-driven-testler/" },
            { title: "xUnit ile Test Fixtures ve Setup Steps", link: "../../xunit/xunit-ile-test-fixtures-ve-setup-steps/" },
            { title: "xUnit ile Raporlama ve Test Sonuçları", link: "../../xunit/xunit-ile-raporlama-ve-test-sonuclari/" }
        ]
    },
    {
        title: "NUnit",
        subMenu: [
            { title: "NUnit Nedir?", link: "../../nunit/nunit-nedir/" },
            { title: "NUnit Kurulumu ve İlk Adımlar", link: "../../nunit/nunit-kurulumu-ve-ilk-adimlar/" },
            { title: "NUnit ile Unit Testing ve Test Methods", link: "../../nunit/nunit-ile-unit-testing-ve-test-methods/" },
            { title: "NUnit ile Assertions ve Expected Results", link: "../../nunit/nunit-ile-assertions-ve-expected-results/" },
            { title: "NUnit ile Paralel Testler ve Test Execution", link: "../../nunit/nunit-ile-paralel-testler-ve-test-execution/" },
            { title: "NUnit ile Data-Driven Testler", link: "../../nunit/nunit-ile-data-driven-testler/" },
            { title: "NUnit ile Test Fixtures ve Setup Steps", link: "../../nunit/nunit-ile-test-fixtures-ve-setup-steps/" },
            { title: "NUnit ile Raporlama ve Test Sonuçları", link: "../../nunit/nunit-ile-raporlama-ve-test-sonuclari/" }
        ]
    },
    {
        title: "Fluent Assertions",
        subMenu: [
            { title: "Fluent Assertions Nedir?", link: "../../fluent-assertions/fluent-assertions-nedir/" },
            { title: "Fluent Assertions Kurulumu ve İlk Adımlar", link: "../../fluent-assertions/fluent-assertions-kurulumu-ve-ilk-adimlar/" },
            { title: "Fluent Assertions ile Assertions ve Test Doğrulama", link: "../../fluent-assertions/fluent-assertions-ile-assertions-ve-test-dogrulama/" },
            { title: "Fluent Assertions ile Objeler ve Collection Assertions", link: "../../fluent-assertions/fluent-assertions-ile-objeler-ve-collection-assertions/" },
            { title: "Fluent Assertions ile Gezinti ve Verify Assertions", link: "../../fluent-assertions/fluent-assertions-ile-gezinti-ve-verify-assertions/" },
            { title: "Fluent Assertions ile Exception ve Error Assertions", link: "../../fluent-assertions/fluent-assertions-ile-exception-ve-error-assertions/" },
            { title: "Fluent Assertions ile Date ve Time Assertions", link: "../../fluent-assertions/fluent-assertions-ile-date-ve-time-assertions/" },
            { title: "Fluent Assertions ile Custom Assertions ve Validation", link: "../../fluent-assertions/fluent-assertions-ile-custom-assertions-ve-validation/" }
        ]
    },
    {
        title: "Shouldly",
        subMenu: [
            { title: "Shouldly Nedir?", link: "../../shouldly/shouldly-nedir/" },
            { title: "Shouldly Kurulumu ve İlk Adımlar", link: "../../shouldly/shouldly-kurulumu-ve-ilk-adimlar/" },
            { title: "Shouldly ile Assertions ve Doğrulama", link: "../../shouldly/shouldly-ile-assertions-ve-dogrulama/" },
            { title: "Shouldly ile Object ve Collection Assertions", link: "../../shouldly/shouldly-ile-object-ve-collection-assertions/" },
            { title: "Shouldly ile String Assertions", link: "../../shouldly/shouldly-ile-string-assertions/" },
            { title: "Shouldly ile Exception ve Error Assertions", link: "../../shouldly/shouldly-ile-exception-ve-error-assertions/" },
            { title: "Shouldly ile Date ve Time Assertions", link: "../../shouldly/shouldly-ile-date-ve-time-assertions/" },
            { title: "Shouldly ile Custom Assertions ve Validation", link: "../../shouldly/shouldly-ile-custom-assertions-ve-validation/" }
        ]
    },
    {
        title: "NSubstitute",
        subMenu: [
            { title: "NSubstitute Nedir?", link: "../../nsubstitute/nsubstitute-nedir/" },
            { title: "NSubstitute Kurulumu ve İlk Adımlar", link: "../../nsubstitute/nsubstitute-kurulumu-ve-ilk-adimlar/" },
            { title: "NSubstitute ile Mocking ve Stubbing", link: "../../nsubstitute/nsubstitute-ile-mocking-ve-stubbing/" },
            { title: "NSubstitute ile Test Davranışları ve Verify Mekanizmaları", link: "../../nsubstitute/nsubstitute-ile-test-davranislari-ve-verify-mekanizmalari/" },
            { title: "NSubstitute ile Async Testler ve Task Support", link: "../../nsubstitute/nsubstitute-ile-async-testler-ve-task-support/" },
            { title: "NSubstitute ile Dependency Injection ve Testleri Geliştirme", link: "../../nsubstitute/nsubstitute-ile-dependency-injection-ve-testleri-gelistirme/" },
            { title: "NSubstitute ile Object ve Collection Mocking", link: "../../nsubstitute/nsubstitute-ile-object-ve-collection-mocking/" },
            { title: "NSubstitute ile Exception ve Error Handling", link: "../../nsubstitute/nsubstitute-ile-exception-ve-error-handling/" }
        ]
    },
    {
        title: "Moq",
        subMenu: [
            { title: "Moq Nedir?", link: "../../moq/moq-nedir/" },
            { title: "Moq Kurulumu ve İlk Adımlar", link: "../../moq/moq-kurulumu-ve-ilk-adimlar/" },
            { title: "Moq ile Mocking ve Stubbing", link: "../../moq/moq-ile-mocking-ve-stubbing/" },
            { title: "Moq ile Test Davranışları ve Verify Mekanizmaları", link: "../../moq/moq-ile-test-davranislari-ve-verify-mekanizmalari/" },
            { title: "Moq ile Async Testler ve Task Support", link: "../../moq/moq-ile-async-testler-ve-task-support/" },
            { title: "Moq ile Dependency Injection ve Testleri Geliştirme", link: "../../moq/moq-ile-dependency-injection-ve-testleri-gelistirme/" },
            { title: "Moq ile Object ve Collection Mocking", link: "../../moq/moq-ile-object-ve-collection-mocking/" },
            { title: "Moq ile Exception ve Error Handling", link: "../../moq/moq-ile-exception-ve-error-handling/" }
        ]
    },
    {
        title: "FakeitEasy",
        subMenu: [
            { title: "FakeItEasy Nedir?", link: "../../fakeiteasy/fakeiteasy-nedir/" },
            { title: "FakeItEasy Kurulumu ve İlk Adımlar", link: "../../fakeiteasy/fakeiteasy-kurulumu-ve-ilk-adimlar/" },
            { title: "FakeItEasy ile Mocking ve Stubbing", link: "../../fakeiteasy/fakeiteasy-ile-mocking-ve-stubbing/" },
            { title: "FakeItEasy ile Test Davranışları ve Verify Mekanizmaları", link: "../../fakeiteasy/fakeiteasy-ile-test-davranislari-ve-verify-mekanizmalari/" },
            { title: "FakeItEasy ile Async Testler ve Task Support", link: "../../fakeiteasy/fakeiteasy-ile-async-testler-ve-task-support/" },
            { title: "FakeItEasy ile Dependency Injection ve Testleri Geliştirme", link: "../../fakeiteasy/fakeiteasy-ile-dependency-injection-ve-testleri-gelistirme/" },
            { title: "FakeItEasy ile Object ve Collection Mocking", link: "../../fakeiteasy/fakeiteasy-ile-object-ve-collection-mocking/" },
            { title: "FakeItEasy ile Exception ve Error Handling", link: "../../fakeiteasy/fakeiteasy-ile-exception-ve-error-handling/" }
        ]
    },
    {
        title: "Kubernetes",
        subMenu: [
            { title: "Kubernetes Nedir?", link: "../../kubernetes/kubernetes-nedir/" },
            { title: "Kubernetes Mimarisi", link: "../../kubernetes/kubernetes-mimari/" },
            { title: "Kubernetes Pod Nedir?", link: "../../kubernetes/kubernetes-pod-nedir/" },
            { title: "Kubernetes Service Nedir?", link: "../../kubernetes/kubernetes-service-nedir/" },
            { title: "Kubernetes Deployment Nasıl Yapılır?", link: "../../kubernetes/kubernetes-deployment-nasil-yapilir/" },
            { title: "Kubernetes Ingress Nedir?", link: "../../kubernetes/kubernetes-ingress-nedir/" },
            { title: "ConfigMap ve Secret Nedir?", link: "../../kubernetes/kubernetes-configmap-ve-secret/" },
            { title: "Kubernetes Helm Nedir?", link: "../../kubernetes/kubernetes-helm-nedir/" },
            { title: "Node ve Cluster Kavramları", link: "../../kubernetes/kubernetes-node-ve-cluster/" },
            { title: "Kubernetes Monitoring ve Loglama", link: "../../kubernetes/kubernetes-monitoring-ve-loglama/" }
        ]
    },
    {
        title: "Docker Swarm",
        subMenu: [
            { title: "Docker Swarm Nedir?", link: "../../docker-swarm/docker-swarm-nedir/" },
            { title: "Docker Swarm Mimarisi", link: "../../docker-swarm/docker-swarm-mimari/" },
            { title: "Docker Swarm Nasıl Kurulur?", link: "../../docker-swarm/docker-swarm-nasil-kurulur/" },
            { title: "Docker Swarm Service Nasıl Oluşturulur?", link: "../../docker-swarm/docker-swarm-service-nasil-olusturulur/" },
            { title: "Docker Swarm Stack Kavramı", link: "../../docker-swarm/docker-swarm-stack-kavrami/" },
            { title: "Docker Swarm Load Balancing", link: "../../docker-swarm/docker-swarm-load-balancing/" },
            { title: "Docker Swarm ile Servisleri Scale Etme", link: "../../docker-swarm/docker-swarm-scale-etme/" },
            { title: "Docker Swarm Networking", link: "../../docker-swarm/docker-swarm-networking/" },
            { title: "Docker Swarm ile Servisleri Güvenceye Alma", link: "../../docker-swarm/docker-swarm-securing-services/" },
            { title: "Docker Swarm Monitoring ve Loglama", link: "../../docker-swarm/docker-swarm-monitoring/" }
        ]
    },
    {
        title: "Ocelot",
        subMenu: [
            { title: "Ocelot Nedir?", link: "../../ocelot/ocelot-nedir/" },
            { title: "Ocelot Kurulumu ve Konfigürasyonu", link: "../../ocelot/ocelot-kurulumu-ve-konfigurasyonu/" },
            { title: "Ocelot ile API Gateway Kullanımı", link: "../../ocelot/ocelot-api-gateway-kullanimi/" },
            { title: "Ocelot Routing ve Request Değerlendirme", link: "../../ocelot/ocelot-routing-ve-request-degerlendirme/" },
            { title: "Ocelot ile Load Balancing ve Fault Tolerance", link: "../../ocelot/ocelot-load-balancing-ve-fault-tolerance/" },
            { title: "Ocelot Authentication ve Authorization", link: "../../ocelot/ocelot-authentication-ve-authorization/" },
            { title: "Ocelot Rate Limiting ve Caching", link: "../../ocelot/ocelot-rate-limiting-ve-caching/" },
            { title: "Ocelot Logging ve Monitoring", link: "../../ocelot/ocelot-logging-ve-monitoring/" },
            { title: "Ocelot Transformation ve Query String Manipülasyonu", link: "../../ocelot/ocelot-transformation-ve-query-string-manipulasyonu/" },
            { title: "Ocelot ile En İyi Uygulama Önerileri", link: "../../ocelot/ocelot-best-practices/" }
        ]
    },
    {
        title: "Docker",
        subMenu: [
            { title: "Docker Nedir?", link: "../../docker/docker-nedir/" },
            { title: "Docker Kurulumu", link: "../../docker/docker-kurulumu/" },
            { title: "Docker Image Nedir?", link: "../../docker/docker-image-nedir/" },
            { title: "Docker Container Nedir?", link: "../../docker/docker-container-nedir/" },
            { title: "Dockerfile Nasıl Yazılır?", link: "../../docker/dockerfile-nasil-yazilir/" },
            { title: "Docker Compose Nedir?", link: "../../docker/docker-compose-nedir/" },
            { title: "Docker Volume ve Data Management", link: "../../docker/docker-volume-ve-data-management/" },
            { title: "Docker Networking", link: "../../docker/docker-networking/" },
            { title: "Docker Güvenliği ve En İyi Uygulamalar", link: "../../docker/docker-security-en-iyi-uygulamalar/" },
            { title: "Docker Deployment Stratejileri", link: "../../docker/docker-deployment-stratejileri/" }
        ]
    },
    {
        title: "YARP",
        subMenu: [
            { title: "YARP Nedir?", link: "../../yarp/yarp-nedir/" },
            { title: "YARP Kurulumu ve Konfigürasyonu", link: "../../yarp/yarp-kurulumu-ve-konfigurasyonu/" },
            { title: "YARP ile Routing Nasıl Yapılır?", link: "../../yarp/yarp-routing-nasil-yapilir/" },
            { title: "YARP Load Balancing", link: "../../yarp/yarp-load-balancing/" },
            { title: "YARP Transformations ve Query Manipülasyonu", link: "../../yarp/yarp-transformations-ve-query-manipulasyonu/" },
            { title: "YARP Authentication ve Authorization", link: "../../yarp/yarp-authentication-ve-authorization/" },
            { title: "YARP Caching ve Rate Limiting", link: "../../yarp/yarp-caching-ve-rate-limiting/" },
            { title: "YARP Logging ve Monitoring", link: "../../yarp/yarp-logging-ve-monitoring/" },
            { title: "YARP İleri Düzey Konfigürasyon", link: "../../yarp/yarp-advanced-konfigurasyon/" },
            { title: "YARP En İyi Uygulama Örnekleri", link: "../../yarp/yarp-en-iyi-uygulama-ornekleri/" }
        ]
    },
    {
        title: "Simple Injector",
        subMenu: [
            { title: "Simple Injector Nedir?", link: "../../simple-injector/simple-injector-nedir/" },
            { title: "Simple Injector Kurulumu", link: "../../simple-injector/simple-injector-kurulumu/" },
            { title: "Dependency Injection Nasıl Yapılır?", link: "../../simple-injector/dependency-injection-nasil-yapilir/" },
            { title: "Lifecycle Management", link: "../../simple-injector/lifecycle-management/" },
            { title: "Property Injection ve Method Injection", link: "../../simple-injector/property-injection-ve-method-injection/" },
            { title: "Generic ve Conditional Registrations", link: "../../simple-injector/generic-ve-conditional-registrations/" },
            { title: "MVC ve Web API ile Simple Injector Entegrasyonu", link: "../../simple-injector/integration-ile-mvc-ve-web-api-kullanimi/" },
            { title: "Performans Optimizasyonu", link: "../../simple-injector/simple-injector-performans-optimizasyonu/" },
            { title: "Loglama ve Monitoring Stratejileri", link: "../../simple-injector/loglama-ve-monitoring-stratejileri/" },
            { title: "En İyi Uygulama Örnekleri", link: "../../simple-injector/en-iyi-uygulama-ornekleri/" }
        ]
    },
    {
        title: "Castle Windsor",
        subMenu: [
            { title: "Castle Windsor Nedir?", link: "../../castle-windsor/castle-windsor-nedir/" },
            { title: "Castle Windsor Kurulumu", link: "../../castle-windsor/castle-windsor-kurulumu/" },
            { title: "Dependency Injection Nasıl Yapılır?", link: "../../castle-windsor/dependency-injection-nasil-yapilir/" },
            { title: "Lifecycle Management", link: "../../castle-windsor/lifecycle-management/" },
            { title: "Property Injection ve Method Injection", link: "../../castle-windsor/property-injection-ve-method-injection/" },
            { title: "Facility ve Interceptor Kullanımı", link: "../../castle-windsor/facility-ve-interceptor-kullanimi/" },
            { title: "MVC ve Web API ile Castle Windsor Entegrasyonu", link: "../../castle-windsor/mvc-ve-web-api-ile-entegrasyon/" },
            { title: "Performans Optimizasyonu", link: "../../castle-windsor/castle-windsor-performans-optimizasyonu/" },
            { title: "Loglama ve Monitoring Stratejileri", link: "../../castle-windsor/loglama-ve-monitoring-stratejileri/" },
            { title: "En İyi Uygulama Örnekleri", link: "../../castle-windsor/en-iyi-uygulama-ornekleri/" }
        ]
    },
    {
        title: "Autofac",
        subMenu: [
            { title: "Autofac Nedir?", link: "../../autofac/autofac-nedir/" },
            { title: "Autofac Kurulumu", link: "../../autofac/autofac-kurulumu/" },
            { title: "Dependency Injection Nasıl Yapılır?", link: "../../autofac/dependency-injection-nasil-yapilir/" },
            { title: "Lifecycle Management", link: "../../autofac/lifecycle-management/" },
            { title: "Module ve Registration Stratejileri", link: "../../autofac/module-ve-registration-stratejileri/" },
            { title: "Property Injection ve Method Injection", link: "../../autofac/property-injection-ve-method-injection/" },
            { title: "MVC ve Web API ile Autofac Entegrasyonu", link: "../../autofac/mvc-ve-web-api-ile-entegrasyon/" },
            { title: "Decorator ve Interceptor Kullanımı", link: "../../autofac/decorator-ve-interceptor-kullanimi/" },
            { title: "Performans Optimizasyonu", link: "../../autofac/performance-optimizasyonu/" },
            { title: "En İyi Uygulama Örnekleri", link: "../../autofac/en-iyi-uygulama-ornekleri/" }
        ]
    },
    {
        title: "Ninject",
        subMenu: [
            { title: "Ninject Nedir?", link: "../../ninject/ninject-nedir/" },
            { title: "Ninject Kurulumu", link: "../../ninject/ninject-kurulumu/" },
            { title: "Dependency Injection Nasıl Yapılır?", link: "../../ninject/dependency-injection-nasil-yapilir/" },
            { title: "Binding Stratejileri", link: "../../ninject/binding-stratejileri/" },
            { title: "Lifecycle Management", link: "../../ninject/lifecycle-management/" },
            { title: "Property Injection ve Method Injection", link: "../../ninject/property-injection-ve-method-injection/" },
            { title: "MVC ve Web API ile Ninject Entegrasyonu", link: "../../ninject/mvc-ve-web-api-ile-entegrasyon/" },
            { title: "Interceptor ve Decorator Kullanımı", link: "../../ninject/interceptor-ve-decorator-kullanimi/" },
            { title: "Performans Optimizasyonu", link: "../../ninject/performance-optimizasyonu/" },
            { title: "En İyi Uygulama Örnekleri", link: "../../ninject/en-iyi-uygulama-ornekleri/" }
        ]
    },
    {
        title: "Microsoft Extensions Dependency Injection",
        subMenu: [
            { title: "Microsoft.Extensions.DependencyInjection Nedir?", link: "../../microsoft-di/microsoft-extensions-dependency-injection-nedir/" },
            { title: "Kullanım ve Kurulum", link: "../../microsoft-di/kullanim-ve-kurulum/" },
            { title: "Dependency Injection ile İlk Adımlar", link: "../../microsoft-di/dependency-injection-ilk-adimlar/" },
            { title: "Service Lifetime ve Scoping", link: "../../microsoft-di/service-lifetime-ve-scoping/" },
            { title: "Constructor ve Method Injection", link: "../../microsoft-di/constructor-ve-method-injection/" },
            { title: "Generic Registrations ve Service Factory", link: "../../microsoft-di/generic-registrations-ve-service-factory/" },
            { title: "Configuration ve Options Pattern Kullanımı", link: "../../microsoft-di/configuration-ve-options-pattern-kullanimi/" },
            { title: "MVC ve Web API ile Entegrasyon", link: "../../microsoft-di/mvc-ve-web-api-ile-entegrasyon/" },
            { title: "Service Provider Optimizasyonu", link: "../../microsoft-di/service-provider-optimizasyonu/" },
            { title: "En İyi Uygulama Örnekleri", link: "../../microsoft-di/en-iyi-uygulama-ornekleri/" }
        ]
    },
    {
        title: "Entity Framework Cache",
        subMenu: [
            { title: "Entity Framework Cache Nedir?", link: "../../ef-cache/entity-framework-cache-nedir/" },
            { title: "Entity Framework Cache ile Performans Artırma", link: "../../ef-cache/entity-framework-cache-ile-performans-arttirma/" },
            { title: "Entity Framework Query Caching", link: "../../ef-cache/entity-framework-query-caching/" },
            { title: "Caching Stratejileri ve Taktikleri", link: "../../ef-cache/caching-stratejileri-ve-taktikleri/" },
            { title: "Entity Framework Dizinleme ve Cache Verimliliği", link: "../../ef-cache/entity-framework-dizinleme-ve-cache-verimliligi/" },
            { title: "Entity Framework Cache ile Katmanlı Mimariler", link: "../../ef-cache/entity-framework-cache-katmanli-mimariler/" },
            { title: "Entity Framework First Level Cache ve Second Level Cache", link: "../../ef-cache/entity-framework-first-level-cache-ve-second-level-cache/" },
            { title: "Caching ile Database Access Optimizasyonu", link: "../../ef-cache/caching-ile-database-access-optimizasyonu/" },
            { title: "Cache Invalidation ve Update Stratejileri", link: "../../ef-cache/cache-invalidation-ve-update-stratejileri/" },
            { title: "En İyi Caching Uygulamaları", link: "../../ef-cache/en-iyi-caching-uygulamaları/" }
        ]
    },
    {
        title: "Memory Cache",
        subMenu: [
            { title: "Memory Cache Nedir?", link: "../../memory-cache/memory-cache-nedir/" },
            { title: "Memory Cache Kullanımı ve Konfigürasyonu", link: "../../memory-cache/memory-cache-kullanimi-ve-konfigurasyonu/" },
            { title: "Memory Cache ve Performans Artışı", link: "../../memory-cache/memory-cache-ve-performans-artisi/" },
            { title: "Memory Cache ile Veri İşleme Stratejileri", link: "../../memory-cache/memory-cache-ile-veri-işleme-stratejileri/" },
            { title: "Memory Cache En İyi Uygulamalar", link: "../../memory-cache/memory-cache-en-iyi-uygulamalar/" },
            { title: "Cache Expiration ve Invalidation Stratejileri", link: "../../memory-cache/cache-expiration-ve-invalidation-stratejileri/" },
            { title: "Memory Cache ile Uygulama Optimizasyonu", link: "../../memory-cache/memory-cache-ile-uygulama-optimizasyonu/" },
            { title: "Memory Cache ile Multithreading ve Paralel İşlemler", link: "../../memory-cache/memory-cache-ile-multithreading-ve-paralel-islemler/" },
            { title: "Memory Cache Kullanarak Caching Pattern'leri", link: "../../memory-cache/memory-cache-kullanarak-caching-patternleri/" },
            { title: "Memory Cache ve Thread-Safe Uygulamalar", link: "../../memory-cache/memory-cache-ve-thread-safe-uygulamalar/" }
        ]
    },
    {
        title: "Caching",
        subMenu: [
            { title: "Caching Nedir?", link: "../../caching/caching-nedir/" },
            { title: "Caching Türleri ve Stratejileri", link: "../../caching/caching-turleri-ve-stratejileri/" },
            { title: "Cache Expiration ve Invalidation Stratejileri", link: "../../caching/cache-expiration-ve-invalidation-stratejileri/" },
            { title: "Performans Optimizasyonu ile Caching Kullanımı", link: "../../caching/performance-optimizasyonu-ile-caching-kullanimi/" },
            { title: "Caching ile Database Erişim Optimizasyonu", link: "../../caching/caching-ile-database-erişim-optimizesi/" },
            { title: "Distributed Caching ve Microservice Mimarisi", link: "../../caching/distributed-caching-ve-microservice-mimarisi/" },
            { title: "Caching ve Multithreading Stratejileri", link: "../../caching/caching-ve-multithreading-stratejileri/" },
            { title: "Caching Kullanarak API Performans Artırma", link: "../../caching/caching-kullanarak-api-performans-arttirma/" },
            { title: "Caching Pattern'leri ve En İyi Uygulamalar", link: "../../caching/caching-patternleri-ve-en-iyi-uygulamalar/" },
            { title: "Cache Senkronizasyonu ve Optimizasyonu", link: "../../caching/cache-senkronizasyonu-ve-optimizasyonu/" }
        ]
    },
    {
        title: "Distributed Cache",
        subMenu: [
            { title: "Distributed Cache Nedir?", link: "../../distributed-cache/distributed-cache-nedir/" },
            { title: "Distributed Cache Kurulumu ve Konfigürasyonu", link: "../../distributed-cache/distributed-cache-kurulumu-ve-konfigurasyonu/" },
            { title: "Distributed Cache ve Performans Artışı", link: "../../distributed-cache/distributed-cache-ve-performans-artisi/" },
            { title: "Cache Senkronizasyonu ve Veri Bütünlüğü", link: "../../distributed-cache/cache-senkronizasyonu-ve-veri-bütünlüğü/" },
            { title: "Distributed Cache Stratejileri ve Taktikleri", link: "../../distributed-cache/distributed-cache-stratejileri-ve-taktikleri/" },
            { title: "Distributed Cache Kullanarak Mikroservis Mimarisi", link: "../../distributed-cache/distributed-cache-kullanarak-mikroservis-mimarisi/" },
            { title: "Distributed Cache ile API Performans Optimizasyonu", link: "../../distributed-cache/distributed-cache-ile-api-performans-optimizasyonu/" },
            { title: "Cache Expiration ve Invalidation Stratejileri", link: "../../distributed-cache/cache-expiration-ve-invalidation-stratejileri/" },
            { title: "Cluster ve Replication Yöntemleri", link: "../../distributed-cache/cluster-ve-replication-yöntemleri/" },
            { title: "En İyi Distributed Cache Uygulamaları", link: "../../distributed-cache/en-iyi-distributed-cache-uygulamalari/" }
        ]
    },
    {
        title: "Memcached",
        subMenu: [
            { title: "Memcached Nedir?", link: "../../memcached/memcached-nedir/" },
            { title: "Memcached Kurulumu ve Konfigürasyonu", link: "../../memcached/memcached-kurulumu-ve-konfigurasyonu/" },
            { title: "Memcached Performans Optimizasyonu", link: "../../memcached/memcached-performans-optimizasyonu/" },
            { title: "Memcached ve Distributed Cache Stratejileri", link: "../../memcached/memcached-ve-distributed-cache-stratejileri/" },
            { title: "Memcached ile Uygulama Performans Artırma", link: "../../memcached/memcached-ile-uygulama-performans-arttirma/" },
            { title: "Memcached Kullanım Özellikleri ve Sınırları", link: "../../memcached/memcached-kullanim-ozellikleri-ve-sinirlari/" },
            { title: "Memcached ve Cache Expiration Stratejileri", link: "../../memcached/memcached-ve-cache-expiration-stratejileri/" },
            { title: "Memcached Cluster ve Replication Kurulumu", link: "../../memcached/memcached-cluster-ve-replication-kurulumu/" },
            { title: "Memcached API ve Entegrasyonu", link: "../../memcached/memcached-api-ve-entegrasyonu/" },
            { title: "En İyi Memcached Uygulamaları", link: "../../memcached/en-iyi-memcached-uygulamalari/" }
        ]
    },
    {
        title: "Design Patterns",
        subMenu: [
            { title: "Singleton Pattern", link: "../../design-patterns/singleton-pattern/" },
            { title: "Repository Pattern", link: "../../design-patterns/repository-pattern/" },
            { title: "Factory Pattern", link: "../../design-patterns/factory-pattern/" },
            { title: "Builder Pattern", link: "../../design-patterns/builder-pattern/" },
            { title: "Strategy Pattern", link: "../../design-patterns/strategy-pattern/" },
            { title: "Observer Pattern", link: "../../design-patterns/observer-pattern/" },
            { title: "Decorator Pattern", link: "../../design-patterns/decorator-pattern/" },
            { title: "Adapter Pattern", link: "../../design-patterns/adapter-pattern/" },
            { title: "Command Pattern", link: "../../design-patterns/command-pattern/" },
            { title: "Mediator Pattern", link: "../../design-patterns/mediator-pattern/" },
            { title: "Proxy Pattern", link: "../../design-patterns/proxy-pattern/" },
            { title: "Chain of Responsibility Pattern", link: "../../design-patterns/chain-of-responsibility-pattern/" },
            { title: "Facade Pattern", link: "../../design-patterns/facade-pattern/" },
            { title: "State Pattern", link: "../../design-patterns/state-pattern/" },
            { title: "Memento Pattern", link: "../../design-patterns/memento-pattern/" },
            { title: "Bridge Pattern", link: "../../design-patterns/bridge-pattern/" },
            { title: "Composite Pattern", link: "../../design-patterns/composite-pattern/" },
            { title: "Prototype Pattern", link: "../../design-patterns/prototype-pattern/" },
            { title: "Iterator Pattern", link: "../../design-patterns/iterator-pattern/" },
            { title: "Visitor Pattern", link: "../../design-patterns/visitor-pattern/" }
        ]
    }




];


const currentPath = window.location.pathname;

function generateMenu(menuItems) {
    let menuHTML = '<nav class="md-nav"><ul class="md-nav__list">';

    menuItems.forEach(item => {
        let isActiveCategory = item.subMenu.some(sub => currentPath.includes(sub.link));
        let categoryClass = isActiveCategory ? 'md-nav__item md-nav__item--active md-nav__item--nested' : 'md-nav__item md-nav__item--nested';

        menuHTML += `<li class="${categoryClass}">`;

        if (item.subMenu.length > 0) {
            let inputId = `nav_${item.title.replace(/\s+/g, "_")}_${Math.random().toString(36).substring(2)}`;  // Benzersiz ID
            menuHTML += ` 
                <input class="md-nav__toggle md-toggle menu-toggle" type="checkbox" id="${inputId}">
                <label class="md-nav__link" for="${inputId}">
                    <span class="md-ellipsis">${item.title}</span>
                    <span class="md-nav__icon md-icon"></span>
                </label>
                <ul class="md-nav__list" style="display: none;"> <!-- Başta kapalı -->
            `;

            item.subMenu.forEach(subItem => {
                let isActive = currentPath.includes(subItem.link) ? 'md-nav__link md-nav__link--active' : 'md-nav__link';
                menuHTML += `
                    <li class="md-nav__item">
                        <a href="${subItem.link}" class="${isActive}">
                            <span class="md-ellipsis">${subItem.title}</span>
                        </a>
                    </li>
                `;
            });

            menuHTML += '</ul>';
        } else {
            let isActive = currentPath.includes(item.link) ? 'md-nav__link md-nav__link--active' : 'md-nav__link';
            menuHTML += `<a href="${item.link}" class="${isActive}"><span class="md-ellipsis">${item.title}</span></a>`;
        }

        menuHTML += '</li>';
    });

    menuHTML += '</ul></nav>';

    document.getElementById('dynamicMenu').innerHTML = menuHTML;

    const toggles = document.querySelectorAll('.menu-toggle');
    toggles.forEach(toggle => {
        toggle.addEventListener('click', function () {
            const submenu = this.nextElementSibling.nextElementSibling;
            if (this.checked) {
                submenu.style.display = 'block';
            } else {
                submenu.style.display = 'none';
            }
        });
    });
}

// Menü oluştur
document.addEventListener("DOMContentLoaded", () => {
    generateMenu(menuData);
});