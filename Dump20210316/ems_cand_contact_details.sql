-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: localhost    Database: ems
-- ------------------------------------------------------
-- Server version	8.0.21

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
-- Table structure for table `cand_contact_details`
--

DROP TABLE IF EXISTS `cand_contact_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cand_contact_details` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cand_id` varchar(900) DEFAULT NULL,
  `tel_phone` varchar(900) DEFAULT NULL,
  `mobile_phone` varchar(900) DEFAULT NULL,
  `email_id` varchar(900) DEFAULT NULL,
  `aadhar_no` varchar(900) DEFAULT NULL,
  `voter_id` varchar(900) DEFAULT NULL,
  `remarks` varchar(900) DEFAULT NULL,
  `last_modified_time` varchar(900) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cand_contact_details`
--

LOCK TABLES `cand_contact_details` WRITE;
/*!40000 ALTER TABLE `cand_contact_details` DISABLE KEYS */;
INSERT INTO `cand_contact_details` VALUES (6,'Ponm1','9965477594','undefined','tmstest89@gmail.com,1234567896332,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined','undefined','12453697','This is a test','03/22/2021 13:55:49'),(22,'9998115812022960','','undefined','','','','','04/29/2021 12:40:06'),(23,'884130743504965','','undefined','','','','','04/29/2021 12:40:10'),(24,'7270005955338048','','undefined','','','','','05/04/2021 16:52:49'),(25,'8986418840974686','','undefined','','','','','05/04/2021 17:08:50'),(26,'2881792133897556','','undefined','','','','','05/04/2021 17:30:58'),(27,'755715','','undefined','','','','','05/04/2021 17:45:26'),(28,'RajK76163','','undefined','','','','','05/04/2021 18:22:58'),(29,'RajK121538','','undefined','','','','','05/04/2021 18:23:02'),(30,'Ponm327983','','undefined','','','','','05/07/2021 17:36:57'),(31,'Raja909464','','undefined','','','','','05/07/2021 17:39:53'),(32,'Ponm240872','','undefined','','','','','05/07/2021 17:40:11'),(33,'Mupp406085','','undefined','','','','','05/07/2021 17:40:47'),(34,'Mupp972982','','undefined','','','','','05/07/2021 17:41:06'),(35,'Ponm964207','','undefined','','','','','05/07/2021 18:20:15'),(36,'Raja361619','','undefined',',','undefined','','','05/07/2021 18:26:34'),(37,'Mupp921320','','undefined','','','','','05/07/2021 18:31:30'),(38,'Navi460138','','undefined','','','','','05/07/2021 18:56:53'),(39,'Chan870550','','undefined','','','','','05/07/2021 18:57:33'),(40,'Sara685710','','undefined',',','undefined','','','05/07/2021 18:59:07'),(41,'Laxm792738','','undefined','','','','','05/07/2021 19:00:21'),(42,'Mari499545','','undefined','','','','','05/07/2021 20:02:11'),(43,'King232182','','undefined','','','','','05/07/2021 20:07:11'),(44,'Subb559673','','undefined',',','undefined','','','05/19/2021 10:22:40'),(45,'Aswa750843','','undefined',',,undefined,undefined','undefined','','','05/19/2021 11:08:46'),(46,'Devi26769','','undefined','','','','','05/19/2021 15:35:59'),(47,'Devi746720','','undefined','','','','','05/19/2021 15:38:43'),(48,'Devi227257','','undefined','','','','','05/19/2021 16:10:04'),(49,'Ponr551858','','undefined','','','','','05/19/2021 16:11:41'),(50,'Rajn216412','','undefined','','','','','05/19/2021 16:19:54');
/*!40000 ALTER TABLE `cand_contact_details` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-19 16:36:35
