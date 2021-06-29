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
-- Table structure for table `cand_institute_details`
--

DROP TABLE IF EXISTS `cand_institute_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cand_institute_details` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cand_id` varchar(900) DEFAULT NULL,
  `institute_name` varchar(900) DEFAULT NULL,
  `place` varchar(900) DEFAULT NULL,
  `district` varchar(900) DEFAULT NULL,
  `state` varchar(900) DEFAULT NULL,
  `relieving_date` varchar(900) DEFAULT NULL,
  `duration` varchar(900) DEFAULT NULL,
  `exam_passed` varchar(900) DEFAULT NULL,
  `register_no` varchar(900) DEFAULT NULL,
  `month_of_passing` varchar(900) DEFAULT NULL,
  `year_of_passing` varchar(900) DEFAULT NULL,
  `board` varchar(450) DEFAULT NULL,
  `last_modified_time` varchar(900) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=337 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cand_institute_details`
--

LOCK TABLES `cand_institute_details` WRITE;
/*!40000 ALTER TABLE `cand_institute_details` DISABLE KEYS */;
INSERT INTO `cand_institute_details` VALUES (327,'Raja125635','','','','','','','','',' ','undefined','','06/11/2021 22:42:38'),(328,'news90315','','','','','','','','',' ','undefined','','06/12/2021 09:32:14'),(329,'blac780865','','undefined','undefined','undefined','undefined','undefined','undefined','undefined','undefined','undefined','undefined','06/12/2021 12:19:55'),(330,'kuma240208','','undefined','undefined','undefined','undefined','undefined','undefined','undefined','undefined','undefined','undefined','06/12/2021 12:26:13'),(331,'kuma681905','','undefined','undefined','undefined','undefined','undefined','undefined','undefined','undefined','undefined','undefined','06/12/2021 12:26:53'),(332,'venk55947','','','','','','','','',' ','undefined','','06/13/2021 22:28:16'),(333,'Raja409544','','undefined','undefined','undefined','undefined','undefined','undefined','undefined','undefined','undefined','undefined','06/14/2021 16:45:36'),(334,'test629610','','undefined','undefined','undefined','undefined','undefined','undefined','undefined','undefined','undefined','undefined','06/14/2021 17:14:24'),(335,'Raja708158','','','','','','','','',' ','2011','','06/14/2021 18:33:09'),(336,'test135138','naemnama','unknown','TN','TN','2000-03-12','23123','Rajakumaran V','34346','5','2012','state','06/14/2021 19:48:22');
/*!40000 ALTER TABLE `cand_institute_details` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-15 14:00:35
