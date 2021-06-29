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
-- Table structure for table `biometric_details`
--

DROP TABLE IF EXISTS `biometric_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `biometric_details` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cand_id` varchar(45) DEFAULT NULL,
  `cand_name` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `Filename` varchar(256) DEFAULT NULL,
  `active_flag` varchar(250) DEFAULT NULL,
  `last_modified_time` varchar(450) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=136 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `biometric_details`
--

LOCK TABLES `biometric_details` WRITE;
/*!40000 ALTER TABLE `biometric_details` DISABLE KEYS */;
INSERT INTO `biometric_details` VALUES (106,'Raja125635','Rajakumaran V','Sign',NULL,'Y','06/11/2021 22:42:38'),(107,'Raja125635','Rajakumaran V','Thumb',NULL,'Y','06/11/2021 22:42:38'),(108,'Raja125635','Rajakumaran V','Photo',NULL,'Y','06/11/2021 22:42:38'),(109,'news90315','newstudent','Photo',NULL,'Y','06/12/2021 09:32:14'),(110,'news90315','newstudent','Sign',NULL,'Y','06/12/2021 09:32:14'),(111,'news90315','newstudent','Thumb',NULL,'Y','06/12/2021 09:32:14'),(112,'blac780865','blacky','Photo',NULL,'Y','06/12/2021 12:19:55'),(113,'blac780865','blacky','Sign',NULL,'Y','06/12/2021 12:19:55'),(114,'blac780865','blacky','Thumb',NULL,'Y','06/12/2021 12:19:55'),(115,'kuma240208','kumaran','Photo','162348097368616assitant.png','Y','06/12/2021 12:26:13'),(116,'kuma240208','kumaran','Sign',NULL,'Y','06/12/2021 12:26:13'),(117,'kuma240208','kumaran','Thumb',NULL,'Y','06/12/2021 12:26:13'),(118,'kuma681905','kumaran','Sign',NULL,'Y','06/12/2021 12:26:53'),(119,'kuma681905','kumaran','Photo','162348101365116assitant.png','Y','06/12/2021 12:26:53'),(120,'kuma681905','kumaran','Thumb',NULL,'Y','06/12/2021 12:26:53'),(121,'venk55947','venkat','Photo',NULL,'Y','06/13/2021 22:28:16'),(122,'venk55947','venkat','Sign',NULL,'Y','06/13/2021 22:28:16'),(123,'venk55947','venkat','Thumb',NULL,'Y','06/13/2021 22:28:16'),(124,'Raja409544','Rajakumaran V','Photo',NULL,'Y','06/14/2021 16:45:36'),(125,'Raja409544','Rajakumaran V','Sign',NULL,'Y','06/14/2021 16:45:36'),(126,'Raja409544','Rajakumaran V','Thumb',NULL,'Y','06/14/2021 16:45:36'),(127,'test629610','teststudent','Photo',NULL,'Y','06/14/2021 17:14:24'),(128,'test629610','teststudent','Sign',NULL,'Y','06/14/2021 17:14:24'),(129,'test629610','teststudent','Thumb',NULL,'Y','06/14/2021 17:14:24'),(130,'Raja708158','Rajakumaran V','Photo',NULL,'Y','06/14/2021 18:33:09'),(131,'Raja708158','Rajakumaran V','Sign',NULL,'Y','06/14/2021 18:33:09'),(132,'Raja708158','Rajakumaran V','Thumb',NULL,'Y','06/14/2021 18:33:09'),(133,'test135138','teststudent','Sign',NULL,'Y','06/14/2021 19:48:22'),(134,'test135138','teststudent','Thumb',NULL,'Y','06/14/2021 19:48:22'),(135,'test135138','teststudent','Photo',NULL,'Y','06/14/2021 19:48:22');
/*!40000 ALTER TABLE `biometric_details` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-15 14:00:39
