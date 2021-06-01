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
-- Table structure for table `cand_surety_details`
--

DROP TABLE IF EXISTS `cand_surety_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cand_surety_details` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cand_id` varchar(500) DEFAULT NULL,
  `surety_one_name` varchar(900) DEFAULT NULL,
  `surety_one_aadhaar` varchar(900) DEFAULT NULL,
  `surety_one_pan` varchar(900) DEFAULT NULL,
  `surety_one_address` varchar(900) DEFAULT NULL,
  `surety_two_name` varchar(900) DEFAULT NULL,
  `surety_two_aadhaar` varchar(900) DEFAULT NULL,
  `surety_two_pan` varchar(900) DEFAULT NULL,
  `surety_two_address` varchar(900) DEFAULT NULL,
  `surety_three_name` varchar(900) DEFAULT NULL,
  `surety_three_aadhaar` varchar(900) DEFAULT NULL,
  `surety_three_pan` varchar(900) DEFAULT NULL,
  `surety_three_address` varchar(900) DEFAULT NULL,
  `last_modified_time` varchar(900) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cand_surety_details`
--

LOCK TABLES `cand_surety_details` WRITE;
/*!40000 ALTER TABLE `cand_surety_details` DISABLE KEYS */;
INSERT INTO `cand_surety_details` VALUES (1,'Ponm1','doctor1','235245','234234','234234','doctor2','23232','23235','234234','doctor3','34235','234234','234234','28-05-2021'),(2,'Devi227257','doctor1','235245','234234','234234','doctor2','23232','23235','234234','doctor3','34235','234234','234234','28-05-2021'),(3,'Ponr551858','doctor1','235245','234234','234234','doctor2','23232','23235','234234','doctor3','34235','234234','234234','28-05-2021'),(4,'Rajn216412','doctor1','235245','234234','234234','doctor2','23232','23235','234234','doctor3','34235','234234','234234','28-05-2021'),(5,'Raja314867','doctor1','235245','234234','234234','doctor2','23232','23235','234234','doctor3','34235','234234','234234','28-05-2021');
/*!40000 ALTER TABLE `cand_surety_details` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-31 15:48:43
