-- MySQL dump 10.13  Distrib 8.3.0, for macos14 (arm64)
--
-- Host: localhost    Database: apkatripdb
-- ------------------------------------------------------
-- Server version	8.3.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `airports`
--

DROP TABLE IF EXISTS `airports`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `airports` (
  `id` varchar(6) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ident` varchar(7) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `type` varchar(14) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name` varchar(108) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `latitude_deg` varchar(21) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `longitude_deg` varchar(21) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `elevation_ft` varchar(12) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `continent` varchar(9) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `iso_country` varchar(11) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `iso_region` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `municipality` varchar(61) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scheduled_service` varchar(17) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `gps_code` varchar(8) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `iata_code` varchar(9) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `local_code` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `home_link` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `wikipedia_link` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `keywords` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `popular` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `airports`
--

UNLOCK TABLES;

--
-- Table structure for table `allairpotsdatas`
--

DROP TABLE IF EXISTS `allairpotsdatas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `allairpotsdatas` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `ident` varchar(7) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `type` varchar(14) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name` varchar(108) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `latitude_deg` varchar(21) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `longitude_deg` varchar(21) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `elevation_ft` varchar(12) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `continent` varchar(9) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `iso_country` varchar(11) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `iso_region` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `municipality` varchar(61) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scheduled_service` varchar(17) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `gps_code` varchar(8) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `iata_code` varchar(9) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `local_code` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `home_link` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `wikipedia_link` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `keywords` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `allairpotsdatas`
--

LOCK TABLES `allairpotsdatas` WRITE;
/*!40000 ALTER TABLE `allairpotsdatas` DISABLE KEYS */;
/*!40000 ALTER TABLE `allairpotsdatas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `api_tokens`
--

DROP TABLE IF EXISTS `api_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api_tokens` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `expires_at` timestamp NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_tokens`
--

LOCK TABLES `api_tokens` WRITE;
/*!40000 ALTER TABLE `api_tokens` DISABLE KEYS */;
INSERT INTO `api_tokens` VALUES (1,'55474b8b-62d9-470f-9659-c6eb71a6d45c','2024-10-24 13:59:59','2024-10-05 04:10:50','2024-10-23 23:59:59');
/*!40000 ALTER TABLE `api_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blogcategories`
--

DROP TABLE IF EXISTS `blogcategories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blogcategories` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blogcategories`
--

LOCK TABLES `blogcategories` WRITE;
/*!40000 ALTER TABLE `blogcategories` DISABLE KEYS */;
INSERT INTO `blogcategories` VALUES (1,'Travel','travel','2024-10-14 05:40:30','2024-10-14 05:40:30');
/*!40000 ALTER TABLE `blogcategories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blogs`
--

DROP TABLE IF EXISTS `blogs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blogs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `blog_image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `blog_title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `blog_text` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `des1` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `des2` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `quotes` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `blog_category_id` bigint unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blogs`
--

LOCK TABLES `blogs` WRITE;
/*!40000 ALTER TABLE `blogs` DISABLE KEYS */;
INSERT INTO `blogs` VALUES (1,'01JA57014RTRED12QTPTK7VZDN.png','Tips for Solo Travellers on Indian Trains','f4wfr43rf34fr34fr344343','<p><a href=\"https://www.easemytrip.com/blog/tips-for-solo-travellers-on-indian-trains#travel-day\">1. Travel During the Day When Possible</a></p><p><a href=\"https://www.easemytrip.com/blog/tips-for-solo-travellers-on-indian-trains#female-only\">2. Choose Female-Only Coaches (For Female Travellers)</a></p><p><a href=\"https://www.easemytrip.com/blog/tips-for-solo-travellers-on-indian-trains#alarms\">3. Set Alarms for Your Destination</a></p><p><a href=\"https://www.easemytrip.com/blog/tips-for-solo-travellers-on-indian-trains#avoid\">4. Avoid Displaying Valuables</a></p><p><a href=\"https://www.easemytrip.com/blog/tips-for-solo-travellers-on-indian-trains#public-wifi\">5. Be Cautious with Public Wi-Fi</a></p><p><a href=\"https://www.easemytrip.com/blog/tips-for-solo-travellers-on-indian-trains#bring\">6. Bring Your Own Entertainment</a></p><p><a href=\"https://www.easemytrip.com/blog/tips-for-solo-travellers-on-indian-trains#carry-kit\">7. Carry a First-Aid Kit</a></p><p><a href=\"https://www.easemytrip.com/blog/tips-for-solo-travellers-on-indian-trains#railway\">8. Make Use of Railway Station Facilities</a><br><br></p><p>India’s extensive rail network is a fascinating way to explore the country, offering an authentic glimpse of its diverse cultures, scenic landscapes, and vibrant communities. For solo travellers, train journeys can be an enriching experience, but they also require some planning to ensure safety and comfort. Whether you’re travelling to the bustling cities or the serene countryside, these tips will help you make the most of your solo train adventure in India.&nbsp;</p><p>Start by booking your train tickets in advance using our website or mobile app to ensure a confirmed reservation.Planning ahead not only secures your seat but also allows you to choose more comfortable options, like AC coaches, specific berths or <a href=\"https://www.easemytrip.com/railways/pnr-status/\">train PNR status</a> feature, for a hassle-free journey.<br><br></p><h2>1. Travel During the Day When Possible</h2><ul><li>Better Safety: Travelling during daylight hours can reduce the potential safety concerns that might arise from arriving at an unfamiliar place at night. It helps you avoid situations where transportation options or other services may be limited upon arrival.<br>&nbsp;</li><li>Scenic Experience: Daytime travel allows you to enjoy the diverse and beautiful scenery of India, such as rolling fields, bustling towns, rivers, and forests, which can add a lot of charm to your journey.<br>&nbsp;</li><li>Ease of Access to Services: Most facilities such as ticket counters, food stalls, and local transportation are more accessible during the day, which can make the overall travel experience more convenient.<br>&nbsp;</li><li>Comfortable Interactions: Travelling during the day provides more opportunity for friendly and comfortable interaction with fellow passengers, which is often a great way to learn about the local culture.</li></ul><h2>2. Choose Female-Only Coaches (For Female Travellers)</h2><p><figure data-trix-attachment=\"{&quot;contentType&quot;:&quot;image/png&quot;,&quot;filename&quot;:&quot;6386414817403953982kGi0V.png&quot;,&quot;filesize&quot;:580775,&quot;height&quot;:470,&quot;href&quot;:&quot;http://localhost:8000/storage/p6o7Q6GQmLl3ySR84YAo4LjnqICCxXQhYtv0JmZJ.png&quot;,&quot;url&quot;:&quot;http://localhost:8000/storage/p6o7Q6GQmLl3ySR84YAo4LjnqICCxXQhYtv0JmZJ.png&quot;,&quot;width&quot;:820}\" data-trix-content-type=\"image/png\" data-trix-attributes=\"{&quot;presentation&quot;:&quot;gallery&quot;}\" class=\"attachment attachment--preview attachment--png\"><a href=\"http://localhost:8000/storage/p6o7Q6GQmLl3ySR84YAo4LjnqICCxXQhYtv0JmZJ.png\"><img src=\"http://localhost:8000/storage/p6o7Q6GQmLl3ySR84YAo4LjnqICCxXQhYtv0JmZJ.png\" width=\"820\" height=\"470\"><figcaption class=\"attachment__caption\"><span class=\"attachment__name\">6386414817403953982kGi0V.png</span> <span class=\"attachment__size\">567.16 KB</span></figcaption></a></figure></p><p><br></p><ul><li>Safety Assurance: Female-only coaches provide a safer space for women, free from the usual rush of mixed compartments. This option is available on many suburban and some long-distance trains.<br>&nbsp;</li><li>Reserved Lower Berths for Women: AC compartments often have lower berths reserved specifically for women, which can be more comfortable, especially during night journeys, as these berths are easier to access.<br>&nbsp;</li><li>Ladies Quota: Indian Railways also offers a \"ladies quota,\" where a few seats are reserved for female passengers. This can be a helpful option if you\'re booking tickets at the last minute, providing a sense of comfort and safety during the journey.</li></ul>','<p>ffr</p>','fewfwf','2024-10-14 04:12:07','2024-10-14 04:23:10','goa-trip',0),(2,'01JA5BTSJKA4F6S75DDJD5PDXJ.png','Goa','eafewf','<p>qefeq</p>','<p>dwdw</p>','caedfce','2024-10-14 05:45:21','2024-10-14 05:45:21','goa',1);
/*!40000 ALTER TABLE `blogs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cache`
--

DROP TABLE IF EXISTS `cache`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cache` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cache`
--

LOCK TABLES `cache` WRITE;
/*!40000 ALTER TABLE `cache` DISABLE KEYS */;
INSERT INTO `cache` VALUES ('356a192b7913b04c54574d18c28d46e6395428ab','i:1;',1728907943),('356a192b7913b04c54574d18c28d46e6395428ab:timer','i:1728907943;',1728907943),('a17961fa74e9275d529f489537f179c05d50c2f3','i:1;',1729578045),('a17961fa74e9275d529f489537f179c05d50c2f3:timer','i:1729578045;',1729578045);
/*!40000 ALTER TABLE `cache` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cache_locks`
--

DROP TABLE IF EXISTS `cache_locks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cache_locks` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `owner` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cache_locks`
--

LOCK TABLES `cache_locks` WRITE;
/*!40000 ALTER TABLE `cache_locks` DISABLE KEYS */;
/*!40000 ALTER TABLE `cache_locks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `exampleusers`
--

DROP TABLE IF EXISTS `exampleusers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `exampleusers` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `top_airports` json NOT NULL,
  `country` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exampleusers`
--

LOCK TABLES `exampleusers` WRITE;
/*!40000 ALTER TABLE `exampleusers` DISABLE KEYS */;
/*!40000 ALTER TABLE `exampleusers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `failed_jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `failed_jobs`
--

LOCK TABLES `failed_jobs` WRITE;
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `job_batches`
--

DROP TABLE IF EXISTS `job_batches`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `job_batches` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_jobs` int NOT NULL,
  `pending_jobs` int NOT NULL,
  `failed_jobs` int NOT NULL,
  `failed_job_ids` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `options` mediumtext COLLATE utf8mb4_unicode_ci,
  `cancelled_at` int DEFAULT NULL,
  `created_at` int NOT NULL,
  `finished_at` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job_batches`
--

LOCK TABLES `job_batches` WRITE;
/*!40000 ALTER TABLE `job_batches` DISABLE KEYS */;
/*!40000 ALTER TABLE `job_batches` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jobs`
--

DROP TABLE IF EXISTS `jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `queue` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `attempts` tinyint unsigned NOT NULL,
  `reserved_at` int unsigned DEFAULT NULL,
  `available_at` int unsigned NOT NULL,
  `created_at` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `jobs_queue_index` (`queue`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jobs`
--

LOCK TABLES `jobs` WRITE;
/*!40000 ALTER TABLE `jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'0001_01_01_000000_create_users_table',1),(2,'0001_01_01_000001_create_cache_table',1),(3,'0001_01_01_000002_create_jobs_table',1),(4,'2024_09_30_081053_create_personal_access_tokens_table',1),(5,'2024_09_30_081259_create_allairpotsdatas_table',1),(6,'2024_09_30_112104_create_airports_table',2),(7,'2024_10_01_073924_create_api_tokens_table',3),(8,'2024_10_03_044357_create_top_ports_table',4),(9,'2024_10_04_052020_add_popular_to_airports_table',5),(10,'2024_10_04_105006_create_blogs_table',6),(11,'2024_10_05_045226_add_slug_to_blogs_table',6),(12,'2024_10_14_102224_create_blogcategories_table',7),(13,'2024_10_14_111150_remove_blog_type_from_blogs_table',8),(14,'2024_10_22_061358_create_exampleusers_table',9);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_reset_tokens`
--

DROP TABLE IF EXISTS `password_reset_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_reset_tokens`
--

LOCK TABLES `password_reset_tokens` WRITE;
/*!40000 ALTER TABLE `password_reset_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_reset_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `personal_access_tokens` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_access_tokens`
--

LOCK TABLES `personal_access_tokens` WRITE;
/*!40000 ALTER TABLE `personal_access_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `personal_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sessions` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint unsigned DEFAULT NULL,
  `ip_address` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text COLLATE utf8mb4_unicode_ci,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_activity` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sessions_user_id_index` (`user_id`),
  KEY `sessions_last_activity_index` (`last_activity`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
INSERT INTO `sessions` VALUES ('0wBVmr55HOKCye8i0p2rWiUdnlmkB6ait8T8M9uQ',NULL,'127.0.0.1','PostmanRuntime/7.42.0','YTozOntzOjY6Il90b2tlbiI7czo0MDoiRDdyWFRxS2Jad3l4NTVaSEtwZW90MndXa3BxdHJDakp5b21qdTJrUiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=',1728987141),('7C7xmg4IRHiOnF4dQS3eK64dURvjGEaOWXTYWPxi',NULL,'127.0.0.1','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36','YTozOntzOjY6Il90b2tlbiI7czo0MDoicGRHRjM0aXI1ZFJDMzBoTUYwTHhuQWQ1SXpndjVRVlBZN1lvVzNuVCI7czozOiJ1cmwiO2E6MTp7czo4OiJpbnRlbmRlZCI7czoyNzoiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FkbWluIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==',1729052196),('91s7IfpqbQDklsPHOrEGCQzCBJ8qEanSa6bRcy9Y',NULL,'127.0.0.1','PostmanRuntime/7.42.0','YTozOntzOjY6Il90b2tlbiI7czo0MDoiRzZuMHRvd3ZSTFRaTXpvUVZFcmMzSk9VZnNyUkx0NEtGZTBSdmtsTCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=',1729224383),('chl1r9MIjlwoBgd6XRwkjByu67U6VH9rLcC14Bop',NULL,'127.0.0.1','PostmanRuntime/7.42.0','YTozOntzOjY6Il90b2tlbiI7czo0MDoieHBJVG9xQXJZZkpBc0xjS0lldmVGZHFPYVhTVUtCT3lGVWw2RHJDUCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=',1729052835),('pw6CtBtUVku8OAQOXuCeeEWsOgXZ21FoZ86FkHne',NULL,'127.0.0.1','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36','YTozOntzOjY6Il90b2tlbiI7czo0MDoiWGpoblh6YVlnVm9rdlJad0dlNTg2RXRLVFJ2M1puMzYwS3JZVklCWSI7czozOiJ1cmwiO2E6MTp7czo4OiJpbnRlbmRlZCI7czoyNzoiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FkbWluIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==',1729160570),('TOaCFpTLNXvnXRmJE6GLShwSPlil2qwsn3RvdsKS',NULL,'127.0.0.1','PostmanRuntime/7.42.0','YTozOntzOjY6Il90b2tlbiI7czo0MDoidlVSUDFhMFRCc0ZPeUtCZDB1Y2pTZmVsbWNmWjRuZ0NjcEZhMnVRVCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=',1729157482),('u7Pg60mhuJRmkbFdVik33kr24uAgoO95liTKCKbY',1,'127.0.0.1','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36','YTo3OntzOjY6Il90b2tlbiI7czo0MDoiZ1hjWVJLeVhqY0ltaVpqOGp2bFpGcTVQSWV6U3YwZ0o2UnJ0SEY2RiI7czozOiJ1cmwiO2E6MDp7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fXM6NTA6ImxvZ2luX3dlYl81OWJhMzZhZGRjMmIyZjk0MDE1ODBmMDE0YzdmNThlYTRlMzA5ODlkIjtpOjE7czoxNzoicGFzc3dvcmRfaGFzaF93ZWIiO3M6NjA6IiQyeSQxMiRZc0t6ZThXcmtlaDBhVGprNHVrNFllZWlSUmptWGt6Q3NDNloyMHBDZU9SLjl5QVU5RjJRNiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NDA6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hZG1pbi9ibG9ncy9jcmVhdGUiO31zOjg6ImZpbGFtZW50IjthOjA6e319',1728907883),('WA8gtQU01T3VIxEbgK4k6lCxCwS8iuhHSaOBr8Cb',1,'127.0.0.1','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36','YTo3OntzOjY6Il90b2tlbiI7czo0MDoib3JmTHFUYVhCUG1KTDRrSWgxblQzTlNZUDhlallhNGN3RVlYNFFMTiI7czozOiJ1cmwiO2E6MDp7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fXM6ODoiZmlsYW1lbnQiO2E6MDp7fXM6NTA6ImxvZ2luX3dlYl81OWJhMzZhZGRjMmIyZjk0MDE1ODBmMDE0YzdmNThlYTRlMzA5ODlkIjtpOjE7czoxNzoicGFzc3dvcmRfaGFzaF93ZWIiO3M6NjA6IiQyeSQxMiRZc0t6ZThXcmtlaDBhVGprNHVrNFllZWlSUmptWGt6Q3NDNloyMHBDZU9SLjl5QVU5RjJRNiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mjc6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hZG1pbiI7fX0=',1729578371);
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `top_ports`
--

DROP TABLE IF EXISTS `top_ports`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `top_ports` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `top_airports` json NOT NULL,
  `country` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `top_ports`
--

LOCK TABLES `top_ports` WRITE;
/*!40000 ALTER TABLE `top_ports` DISABLE KEYS */;
/*!40000 ALTER TABLE `top_ports` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin','admin@mail.com',NULL,'$2y$12$YsKze8Wrkeh0aTjk4uk4YeeiRRjmXkzCsC6Z20pCeOR.9yAU9F2Q6',NULL,'2024-10-14 04:05:46','2024-10-14 04:05:46');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-25 15:49:44
