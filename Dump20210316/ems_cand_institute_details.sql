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
) ENGINE=InnoDB AUTO_INCREMENT=317 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cand_institute_details`
--

LOCK TABLES `cand_institute_details` WRITE;
/*!40000 ALTER TABLE `cand_institute_details` DISABLE KEYS */;
INSERT INTO `cand_institute_details` VALUES (312,'Raja765206','chhhj','unknown','TN','TN','2020-03-23','346346','yes','34346','5','undefined','state','06/02/2021 16:16:57'),(313,'msms331712','','','','','','','','',' ','undefined','','06/05/2021 18:18:13'),(314,'Raja89359','','','','','','','','',' ','undefined','','06/06/2021 14:52:33'),(315,'Raja622030','','','','','','','','',' ','undefined','','06/07/2021 10:12:01'),(316,'stev128826','','','','','','','','',' ','undefined','','06/08/2021 14:13:06');
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

-- Dump completed on 2021-06-08 22:22:18
