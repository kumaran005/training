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
  `last_modified_time` varchar(900) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cand_admission_details`
--

LOCK TABLES `cand_admission_details` WRITE;
/*!40000 ALTER TABLE `cand_admission_details` DISABLE KEYS */;
INSERT INTO `cand_admission_details` VALUES (1,'Ashi763598','Ashian','898','9889999','123','400,90','900','8989898989','9898989898','MBBS','Regular Admission','State Quota','2021-05-14','2021-05-14','2021-05-20','Others(PC)','Yes','05/28/2021 13:40:39'),(2,'Ashi246947','Ashian','898','9889999','123','400,90','900','8989898989','9898989898','MBBS','Regular Admission','State Quota','2021-05-14','2021-05-14','2021-05-20','Others(PC)','Yes','05/28/2021 13:45:15'),(3,'kavy617005','kavya','','','',',','','','','MBBS',' ',' ','','','',' ',' ','05/28/2021 13:45:47'),(4,'jeev895731','jeeva','','','',',','','','','MBBS',' ',' ','','','',' ',' ','05/28/2021 13:56:51'),(5,'954983','','','','',',','','','','MBBS',' ',' ','','','',' ',' ','05/28/2021 13:58:29'),(6,'357233','','','','',',','','','','MBBS',' ',' ','','','',' ',' ','05/28/2021 14:05:14'),(7,'new191986','new','','','',',','','','','MBBS',' ',' ','','','',' ',' ','05/28/2021 14:05:35'),(8,'fan851717','fan','','','',',','','','','MBBS',' ',' ','','','',' ',' ','05/28/2021 14:06:35'),(9,'roob271415','rooba','898','','',',','','9999999','','MBBS',' ','Management','','','','Most Backward Classes(PC)','Yes','05/28/2021 14:41:25'),(10,'ravi448747','ravi','','','',',','','','','MBBS',' ',' ','','','',' ',' ','05/28/2021 14:45:18'),(11,'445719','','','','',',','','','','MBBS',' ',' ','','','',' ',' ','05/28/2021 15:42:52'),(12,'devi404172','devikavya','','','',',','','','','MBBS',' ',' ','','','',' ',' ','05/28/2021 16:45:59');
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

-- Dump completed on 2021-05-28 19:00:36
