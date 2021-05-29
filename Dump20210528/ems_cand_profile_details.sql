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
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cand_profile_details`
--

LOCK TABLES `cand_profile_details` WRITE;
/*!40000 ALTER TABLE `cand_profile_details` DISABLE KEYS */;
INSERT INTO `cand_profile_details` VALUES (1,'Ashi763598','Ashian','88','kk','paramasivan','maha','2021-05-18','Female','O+','Hindu','Others','VEG vellalar ','Indian','yes','2010','12333','05/28/2021 13:40:39','05/28/2021 13:40:39'),(2,'Ashi246947','Ashian','88','kk','paramasivan','maha','2021-05-18','Female','O+','Hindu','Others','VEG vellalar ','Indian','yes','2010','12333','05/28/2021 13:45:15','05/28/2021 13:45:15'),(3,'kavy617005','kavya','','','','','','undefined','',' ',' ','',' ',' ','','','05/28/2021 13:45:47','05/28/2021 13:45:47'),(4,'jeev895731','jeeva','','','','','','undefined','',' ',' ','',' ',' ','','','05/28/2021 13:56:51','05/28/2021 13:56:51'),(5,'954983','','','','','','','undefined','',' ',' ','',' ',' ','','','05/28/2021 13:58:29','05/28/2021 13:58:29'),(6,'357233','','','','','','','undefined','',' ',' ','',' ',' ','','','05/28/2021 14:05:14','05/28/2021 14:05:14'),(7,'new191986','new','','','','','','undefined','',' ',' ','',' ',' ','','','05/28/2021 14:05:35','05/28/2021 14:05:35'),(8,'fan851717','fan','','','','','','undefined','',' ',' ','',' ',' ','','','05/28/2021 14:06:35','05/28/2021 14:06:35'),(9,'roob271415','rooba','p','','','','','undefined','O+','Hindu','Others','VEG vellalar ','Indian','yes','2010','12333','05/28/2021 14:41:25','05/28/2021 14:41:25'),(10,'ravi448747','ravi','','','','','','undefined','',' ',' ','',' ',' ','','','05/28/2021 14:45:18','05/28/2021 14:45:18'),(11,'445719','','','','','','','undefined','',' ',' ','',' ',' ','','','05/28/2021 15:42:52','05/28/2021 15:42:52'),(12,'devi404172','devikavya','','','','','','undefined','',' ',' ','',' ',' ','','','05/28/2021 16:45:59','05/28/2021 16:45:59');
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

-- Dump completed on 2021-05-28 19:00:34
