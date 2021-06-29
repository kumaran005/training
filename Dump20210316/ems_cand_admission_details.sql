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
-- Table structure for table `cand_admission_details`
--

DROP TABLE IF EXISTS `cand_admission_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cand_admission_details` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cand_id` varchar(500) DEFAULT NULL,
  `cand_name` varchar(400) DEFAULT NULL,
  `rank` varchar(900) DEFAULT NULL,
  `rank_no` varchar(900) DEFAULT NULL,
  `ar_no` varchar(900) DEFAULT NULL,
  `total_mark` varchar(900) DEFAULT NULL,
  `neet_mark` varchar(900) DEFAULT NULL,
  `reg_no` varchar(900) DEFAULT NULL,
  `neet_roll_no` varchar(900) DEFAULT NULL,
  `course` varchar(900) DEFAULT NULL,
  `admission_type` varchar(900) DEFAULT NULL,
  `admission_quota` varchar(900) DEFAULT NULL,
  `course_commencement` varchar(900) DEFAULT NULL,
  `date_of_admission` varchar(900) DEFAULT NULL,
  `date_of_allotment` varchar(900) DEFAULT NULL,
  `selected_category` varchar(900) DEFAULT NULL,
  `willing_for_counciling` varchar(900) DEFAULT NULL,
  `active_status` varchar(45) DEFAULT 'Yes',
  `last_modified_time` varchar(900) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=85 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cand_admission_details`
--

LOCK TABLES `cand_admission_details` WRITE;
/*!40000 ALTER TABLE `cand_admission_details` DISABLE KEYS */;
INSERT INTO `cand_admission_details` VALUES (75,'Raja125635','Rajakumaran V','','','','','','','','MBBS','undefined','undefined','','','',' ','undefined','NO','06/11/2021 22:42:38'),(76,'news90315','newstudent','','','','','','','','MBBS','undefined','undefined','','','',' ','undefined','NO','06/12/2021 09:32:14'),(77,'blac780865','blacky','','','','','','','','MDMS','Regular Admission',' ','','','',' ',' ','NO','06/12/2021 12:19:55'),(78,'kuma240208','kumaran','','','','','','','','MDMS','Regular Admission','undefined','','','','undefined','undefined','NO','06/12/2021 12:26:13'),(79,'kuma681905','kumaran','','','','','','','','MDMS','Regular Admission',' ','','','',' ',' ','NO','06/12/2021 12:26:53'),(80,'venk55947','venkat','2412','','2423','','765','','345','MBBS','undefined','undefined','','2001-03-31','','volvo','undefined','Yes','06/13/2021 22:28:16'),(81,'Raja409544','Rajakumaran V','','','','','','','','MDMS','Regular Admission',' ','','','',' ',' ','Yes','06/14/2021 16:45:36'),(82,'test629610','teststudent','','','','','','','','MDMS','Regular Admission',' ','','','',' ',' ','Yes','06/14/2021 17:14:24'),(83,'Raja708158','Rajakumaran V','','','','','','','','MBBS',' ',' ','','','',' ',' ','Yes','06/14/2021 18:33:09'),(84,'test135138','teststudent','2412','76','767','232','232','234234','5454','MBBS','Court Case','State Quota','2000-06-05','2000-05-05','2000-02-22','Others','Yes','Yes','06/14/2021 19:48:22');
/*!40000 ALTER TABLE `cand_admission_details` ENABLE KEYS */;
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
