-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: ems
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `certificate_details`
--

DROP TABLE IF EXISTS `certificate_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `certificate_details` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cand_id` varchar(256) DEFAULT NULL,
  `cand_name` varchar(495) DEFAULT NULL,
  `all_certificate` varchar(255) DEFAULT NULL,
  `reg_no` varchar(255) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  `issue` varchar(255) DEFAULT NULL,
  `place` varchar(255) DEFAULT NULL,
  `Filename` varchar(700) DEFAULT NULL,
  `active_flag` varchar(250) DEFAULT NULL,
  `last_modified_time` varchar(450) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=288 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `certificate_details`
--

LOCK TABLES `certificate_details` WRITE;
/*!40000 ALTER TABLE `certificate_details` DISABLE KEYS */;
INSERT INTO `certificate_details` VALUES (208,'Raja125635','Rajakumaran V','Community Certificate','','','','',NULL,'Y','06/11/2021 22:42:38'),(209,'Raja125635','Rajakumaran V','Eligiblity Certificate','','','','',NULL,'Y','06/11/2021 22:42:38'),(210,'Raja125635','Rajakumaran V','Conduct Certificate','','','','',NULL,'Y','06/11/2021 22:42:38'),(211,'Raja125635','Rajakumaran V','Admission Certificate','','','','',NULL,'Y','06/11/2021 22:42:38'),(212,'Raja125635','Rajakumaran V','Migration Certificate','','','','',NULL,'Y','06/11/2021 22:42:38'),(213,'Raja125635','Rajakumaran V','Admission Commitee Form','','','','',NULL,'Y','06/11/2021 22:42:38'),(214,'Raja125635','Rajakumaran V','Transfer Certificate','','','','',NULL,'Y','06/11/2021 22:42:38'),(215,'Raja125635','Rajakumaran V','Others','','','','',NULL,'Y','06/11/2021 22:42:38'),(216,'news90315','newstudent','Transfer Certificate','','','','',NULL,'Y','06/12/2021 09:32:14'),(217,'news90315','newstudent','Community Certificate','','','','',NULL,'Y','06/12/2021 09:32:14'),(218,'news90315','newstudent','Conduct Certificate','','','','',NULL,'Y','06/12/2021 09:32:14'),(219,'news90315','newstudent','Migration Certificate','','','','',NULL,'Y','06/12/2021 09:32:14'),(220,'news90315','newstudent','Eligiblity Certificate','','','','',NULL,'Y','06/12/2021 09:32:14'),(221,'news90315','newstudent','Admission Commitee Form','','','','',NULL,'Y','06/12/2021 09:32:14'),(222,'news90315','newstudent','Admission Certificate','','','','',NULL,'Y','06/12/2021 09:32:14'),(223,'news90315','newstudent','Others','','','','',NULL,'Y','06/12/2021 09:32:14'),(224,'blac780865','blacky','Migration Certificate','','','','',NULL,'Y','06/12/2021 12:19:55'),(225,'blac780865','blacky','Eligiblity Certificate','','','','',NULL,'Y','06/12/2021 12:19:55'),(226,'blac780865','blacky','Admission Commitee Form','','','','',NULL,'Y','06/12/2021 12:19:55'),(227,'blac780865','blacky','Transfer Certificate','','','','',NULL,'Y','06/12/2021 12:19:55'),(228,'blac780865','blacky','Admission Certificate','','','','',NULL,'Y','06/12/2021 12:19:55'),(229,'blac780865','blacky','Community Certificate','','','','',NULL,'Y','06/12/2021 12:19:55'),(230,'blac780865','blacky','Conduct Certificate','','','','',NULL,'Y','06/12/2021 12:19:55'),(231,'blac780865','blacky','Others','','','','',NULL,'Y','06/12/2021 12:19:55'),(232,'kuma240208','kumaran','Community Certificate','','','','',NULL,'Y','06/12/2021 12:26:13'),(233,'kuma240208','kumaran','Conduct Certificate','','','','',NULL,'Y','06/12/2021 12:26:13'),(234,'kuma240208','kumaran','Eligiblity Certificate','','','','',NULL,'Y','06/12/2021 12:26:13'),(235,'kuma240208','kumaran','Transfer Certificate','','','','',NULL,'Y','06/12/2021 12:26:13'),(236,'kuma240208','kumaran','Migration Certificate','','','','',NULL,'Y','06/12/2021 12:26:13'),(237,'kuma240208','kumaran','Admission Certificate','','','','',NULL,'Y','06/12/2021 12:26:13'),(238,'kuma240208','kumaran','Admission Commitee Form','','','','',NULL,'Y','06/12/2021 12:26:13'),(239,'kuma240208','kumaran','Others','','','','',NULL,'Y','06/12/2021 12:26:13'),(240,'kuma681905','kumaran','Eligiblity Certificate','','','','',NULL,'Y','06/12/2021 12:26:53'),(241,'kuma681905','kumaran','Transfer Certificate','','','','',NULL,'Y','06/12/2021 12:26:53'),(242,'kuma681905','kumaran','Community Certificate','','','','',NULL,'Y','06/12/2021 12:26:53'),(243,'kuma681905','kumaran','Conduct Certificate','','','','',NULL,'Y','06/12/2021 12:26:53'),(244,'kuma681905','kumaran','Migration Certificate','','','','',NULL,'Y','06/12/2021 12:26:53'),(245,'kuma681905','kumaran','Admission Certificate','','','','',NULL,'Y','06/12/2021 12:26:53'),(246,'kuma681905','kumaran','Admission Commitee Form','','','','',NULL,'Y','06/12/2021 12:26:53'),(247,'kuma681905','kumaran','Others','','','','',NULL,'Y','06/12/2021 12:26:53'),(248,'venk55947','venkat','Community Certificate','','','','',NULL,'Y','06/13/2021 22:28:16'),(249,'venk55947','venkat','Transfer Certificate','','','','',NULL,'Y','06/13/2021 22:28:16'),(250,'venk55947','venkat','Conduct Certificate','','','','',NULL,'Y','06/13/2021 22:28:16'),(251,'venk55947','venkat','Eligiblity Certificate','','','','',NULL,'Y','06/13/2021 22:28:16'),(252,'venk55947','venkat','Migration Certificate','','','','',NULL,'Y','06/13/2021 22:28:16'),(253,'venk55947','venkat','Admission Certificate','','','','',NULL,'Y','06/13/2021 22:28:16'),(254,'venk55947','venkat','Admission Commitee Form','','','','',NULL,'Y','06/13/2021 22:28:16'),(255,'venk55947','venkat','Others','','','','',NULL,'Y','06/13/2021 22:28:16'),(256,'Raja409544','Rajakumaran V','Community Certificate','','','','',NULL,'Y','06/14/2021 16:45:36'),(257,'Raja409544','Rajakumaran V','Transfer Certificate','','','','',NULL,'Y','06/14/2021 16:45:36'),(258,'Raja409544','Rajakumaran V','Conduct Certificate','','','','',NULL,'Y','06/14/2021 16:45:36'),(259,'Raja409544','Rajakumaran V','Eligiblity Certificate','','','','',NULL,'Y','06/14/2021 16:45:36'),(260,'Raja409544','Rajakumaran V','Migration Certificate','','','','',NULL,'Y','06/14/2021 16:45:36'),(261,'Raja409544','Rajakumaran V','Admission Commitee Form','','','','',NULL,'Y','06/14/2021 16:45:36'),(262,'Raja409544','Rajakumaran V','Others','','','','',NULL,'Y','06/14/2021 16:45:36'),(263,'Raja409544','Rajakumaran V','Admission Certificate','','','','',NULL,'Y','06/14/2021 16:45:36'),(264,'test629610','teststudent','Migration Certificate','','','','',NULL,'Y','06/14/2021 17:14:24'),(265,'test629610','teststudent','Admission Certificate','','','','',NULL,'Y','06/14/2021 17:14:24'),(266,'test629610','teststudent','Admission Commitee Form','','','','',NULL,'Y','06/14/2021 17:14:24'),(267,'test629610','teststudent','Community Certificate','','','','',NULL,'Y','06/14/2021 17:14:24'),(268,'test629610','teststudent','Conduct Certificate','','','','',NULL,'Y','06/14/2021 17:14:24'),(269,'test629610','teststudent','Transfer Certificate','','','','',NULL,'Y','06/14/2021 17:14:24'),(270,'test629610','teststudent','Eligiblity Certificate','','','','',NULL,'Y','06/14/2021 17:14:24'),(271,'test629610','teststudent','Others','','','','',NULL,'Y','06/14/2021 17:14:24'),(272,'Raja708158','Rajakumaran V','Community Certificate','','','','',NULL,'Y','06/14/2021 18:33:09'),(273,'Raja708158','Rajakumaran V','Transfer Certificate','','','','',NULL,'Y','06/14/2021 18:33:09'),(274,'Raja708158','Rajakumaran V','Conduct Certificate','','','','',NULL,'Y','06/14/2021 18:33:09'),(275,'Raja708158','Rajakumaran V','Migration Certificate','','','','',NULL,'Y','06/14/2021 18:33:09'),(276,'Raja708158','Rajakumaran V','Eligiblity Certificate','','','','',NULL,'Y','06/14/2021 18:33:09'),(277,'Raja708158','Rajakumaran V','Admission Certificate','','','','',NULL,'Y','06/14/2021 18:33:09'),(278,'Raja708158','Rajakumaran V','Admission Commitee Form','','','','',NULL,'Y','06/14/2021 18:33:09'),(279,'Raja708158','Rajakumaran V','Others','','','','',NULL,'Y','06/14/2021 18:33:09'),(280,'test135138','teststudent','Eligiblity Certificate','','','','',NULL,'Y','06/14/2021 19:48:22'),(281,'test135138','teststudent','Conduct Certificate','','','','',NULL,'Y','06/14/2021 19:48:22'),(282,'test135138','teststudent','Migration Certificate','','','','',NULL,'Y','06/14/2021 19:48:22'),(283,'test135138','teststudent','Admission Certificate','','','','',NULL,'Y','06/14/2021 19:48:22'),(284,'test135138','teststudent','Admission Commitee Form','','','','',NULL,'Y','06/14/2021 19:48:22'),(285,'test135138','teststudent','Others','','','','',NULL,'Y','06/14/2021 19:48:22'),(286,'test135138','teststudent','Community Certificate','','','','',NULL,'Y','06/14/2021 19:48:22'),(287,'test135138','teststudent','Transfer Certificate','','','','',NULL,'Y','06/14/2021 19:48:22');
/*!40000 ALTER TABLE `certificate_details` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-15 14:00:38
