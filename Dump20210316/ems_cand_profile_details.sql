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
-- Table structure for table `cand_profile_details`
--

DROP TABLE IF EXISTS `cand_profile_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cand_profile_details` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cand_id` varchar(450) DEFAULT NULL,
  `name` varchar(900) DEFAULT NULL,
  `initial` varchar(900) DEFAULT NULL,
  `initial_expansion` varchar(900) DEFAULT NULL,
  `father_name` varchar(900) DEFAULT NULL,
  `mother_name` varchar(900) DEFAULT NULL,
  `date_of_birth` varchar(900) DEFAULT NULL,
  `gender` varchar(450) DEFAULT NULL,
  `blood_group` varchar(450) DEFAULT NULL,
  `religion` varchar(450) DEFAULT NULL,
  `community` varchar(450) DEFAULT NULL,
  `caste` varchar(450) DEFAULT NULL,
  `nationality` varchar(450) DEFAULT NULL,
  `willing_to_donate_blood` varchar(450) DEFAULT NULL,
  `academic_year` varchar(450) DEFAULT NULL,
  `student_code` varchar(450) DEFAULT NULL,
  `registered_time` varchar(450) DEFAULT NULL,
  `last_modified_time` varchar(450) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cand_profile_details`
--

LOCK TABLES `cand_profile_details` WRITE;
/*!40000 ALTER TABLE `cand_profile_details` DISABLE KEYS */;
INSERT INTO `cand_profile_details` VALUES (18,'Ponm1','Ponmari','S','undefined','Subramanian','Parvarthy','2021-03-10','Male','B+Ve','Christian','BC','Hindu','Indian','yes','2005','undefined','03/22/2021 13:55:49','03/22/2021 13:55:49'),(36,'7270005955338048','Raja','','','','','','undefined','',' ',' ','',' ',' ','','','05/04/2021 16:52:49','05/04/2021 16:52:49'),(37,'8986418840974686','Devi','','','','','','undefined','',' ',' ','',' ',' ','','','05/04/2021 17:08:50','05/04/2021 17:08:50'),(38,'2881792133897556','Muthu','','','','','','undefined','',' ',' ','',' ',' ','','','05/04/2021 17:30:58','05/04/2021 17:30:58'),(39,'755715','Ponraj','','','','','','undefined','',' ',' ','',' ',' ','','','05/04/2021 17:45:26','05/04/2021 17:45:26'),(40,'RajK76163','RajKumar','','','','','','undefined','',' ',' ','',' ',' ','','','05/04/2021 18:22:58','05/04/2021 18:22:58'),(41,'RajK121538','RajKumar','','','','','','undefined','',' ',' ','',' ',' ','','','05/04/2021 18:23:02','05/04/2021 18:23:02'),(42,'Ponm327983','Ponmari','','','','','','undefined','',' ',' ','',' ',' ','','','05/07/2021 17:36:57','05/07/2021 17:36:57'),(43,'Raja909464','Raja','','','','','','undefined','',' ',' ','',' ',' ','','','05/07/2021 17:39:53','05/07/2021 17:39:53'),(44,'Ponm240872','Ponmari','','','','','','undefined','',' ',' ','',' ',' ','','','05/07/2021 17:40:11','05/07/2021 17:40:11'),(45,'Mupp406085','Muppi','','','','','','undefined','',' ',' ','',' ',' ','','','05/07/2021 17:40:47','05/07/2021 17:40:47'),(46,'Mupp972982','Muppi','','','','','','undefined','',' ',' ','',' ',' ','','','05/07/2021 17:41:06','05/07/2021 17:41:06'),(47,'Ponm964207','Ponmari','','','','','','undefined','',' ',' ','',' ',' ','','','05/07/2021 18:20:15','05/07/2021 18:20:15'),(48,'Raja361619','Raja','','undefined','','','','undefined','',' ',' ','',' ',' ','','undefined','05/07/2021 18:26:34','05/07/2021 18:26:34'),(49,'Mupp921320','Muppi','','','','','','undefined','',' ',' ','',' ',' ','','','05/07/2021 18:31:30','05/07/2021 18:31:30'),(50,'Navi460138','Navin','','','','','','undefined','',' ',' ','',' ',' ','','','05/07/2021 18:56:53','05/07/2021 18:56:53'),(51,'Chan870550','Chandra','','','','','','undefined','',' ',' ','',' ',' ','','','05/07/2021 18:57:33','05/07/2021 18:57:33'),(52,'Sara685710','Saranya','','undefined','','','','undefined','',' ',' ','',' ',' ','','undefined','05/07/2021 18:59:07','05/07/2021 18:59:07'),(53,'Laxm792738','Laxmi','','','','','','undefined','',' ',' ','',' ',' ','','','05/07/2021 19:00:21','05/07/2021 19:00:21'),(54,'Mari499545','Mari','','','','','','undefined','',' ',' ','',' ',' ','','','05/07/2021 20:02:11','05/07/2021 20:02:11'),(55,'King232182','King','','','','','','undefined','',' ',' ','',' ',' ','','','05/07/2021 20:07:11','05/07/2021 20:07:11'),(56,'Subb559673','Subbu','','undefined','','','','undefined','',' ',' ','',' ',' ','','undefined','05/19/2021 10:22:40','05/19/2021 10:22:40'),(57,'Aswa750843','Aswathi','','undefined','','','','undefined','',' ',' ','',' ',' ','','undefined','05/19/2021 11:08:46','05/19/2021 11:08:46'),(58,'Devi26769','Devi','','','','','','undefined','','Hindu',' ','','Indiansmaple',' ','','','05/19/2021 15:35:59','05/19/2021 15:35:59'),(59,'Devi746720','Devi','','','','','','undefined','','Hindu',' ','','Indiansmaple',' ','','','05/19/2021 15:38:43','05/19/2021 15:38:43'),(60,'Devi227257','Devikutty','','','','','','undefined','',' ',' ','',' ',' ','','','05/19/2021 16:10:04','05/19/2021 16:10:04'),(61,'Ponr551858','Ponrose','','','','','','undefined','',' ',' ','',' ',' ','','','05/19/2021 16:11:41','05/19/2021 16:11:41'),(62,'Rajn216412','Rajni','','','','','','undefined','','Muslim',' ','','Indian',' ','','','05/19/2021 16:19:54','05/19/2021 16:19:54');
/*!40000 ALTER TABLE `cand_profile_details` ENABLE KEYS */;
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
