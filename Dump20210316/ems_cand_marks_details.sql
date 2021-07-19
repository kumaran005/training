-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: localhost    Database: ems
-- ------------------------------------------------------
-- Server version	8.0.25

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
-- Table structure for table `cand_marks_details`
--

DROP TABLE IF EXISTS `cand_marks_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cand_marks_details` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cand_id` varchar(450) DEFAULT NULL,
  `lang_theory` varchar(45) DEFAULT NULL,
  `lang_practical` varchar(45) DEFAULT NULL,
  `lang_internal` varchar(45) DEFAULT NULL,
  `lang_total` varchar(45) DEFAULT NULL,
  `lang_max` varchar(45) DEFAULT NULL,
  `eng_theory` varchar(45) DEFAULT NULL,
  `eng_practical` varchar(45) DEFAULT NULL,
  `eng_internal` varchar(45) DEFAULT NULL,
  `eng_total` varchar(45) DEFAULT NULL,
  `eng_max` varchar(45) DEFAULT NULL,
  `mat_theory` varchar(45) DEFAULT NULL,
  `mat_practical` varchar(45) DEFAULT NULL,
  `mat_internal` varchar(45) DEFAULT NULL,
  `mat_total` varchar(45) DEFAULT NULL,
  `mat_max` varchar(45) DEFAULT NULL,
  `phy_theory` varchar(45) DEFAULT NULL,
  `phy_practical` varchar(45) DEFAULT NULL,
  `phy_internal` varchar(45) DEFAULT NULL,
  `phy_total` varchar(45) DEFAULT NULL,
  `phy_max` varchar(45) DEFAULT NULL,
  `chem_theory` varchar(45) DEFAULT NULL,
  `chem_practical` varchar(45) DEFAULT NULL,
  `chem_internal` varchar(45) DEFAULT NULL,
  `chem_total` varchar(45) DEFAULT NULL,
  `chem_max` varchar(45) DEFAULT NULL,
  `bio_theory` varchar(45) DEFAULT NULL,
  `bio_practical` varchar(45) DEFAULT NULL,
  `bio_internal` varchar(45) DEFAULT NULL,
  `bio_total` varchar(45) DEFAULT NULL,
  `bio_max` varchar(45) DEFAULT NULL,
  `bot_theory` varchar(45) DEFAULT NULL,
  `bot_practical` varchar(45) DEFAULT NULL,
  `bot_internal` varchar(45) DEFAULT NULL,
  `bot_total` varchar(45) DEFAULT NULL,
  `bot_max` varchar(45) DEFAULT NULL,
  `zoo_theory` varchar(45) DEFAULT NULL,
  `zoo_practical` varchar(45) DEFAULT NULL,
  `zoo_internal` varchar(45) DEFAULT NULL,
  `zoo_total` varchar(45) DEFAULT NULL,
  `zoo_max` varchar(45) DEFAULT NULL,
  `lang_paper` varchar(45) DEFAULT NULL,
  `subj_code` varchar(45) DEFAULT NULL,
  `total_mark` varchar(45) DEFAULT NULL,
  `max_mark` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=339 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cand_marks_details`
--

LOCK TABLES `cand_marks_details` WRITE;
/*!40000 ALTER TABLE `cand_marks_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `cand_marks_details` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-07-17 13:38:06
