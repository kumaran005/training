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
-- Table structure for table `no_delete`
--

DROP TABLE IF EXISTS `no_delete`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `no_delete` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cand_photo` varchar(400) DEFAULT NULL,
  `cand_sign` varchar(450) DEFAULT NULL,
  `cand_thumb` varchar(200) DEFAULT NULL,
  `cand_finger` varchar(200) DEFAULT NULL,
  `c1_file` varchar(200) DEFAULT NULL,
  `c2_file` varchar(200) DEFAULT NULL,
  `c3_file` varchar(200) DEFAULT NULL,
  `c4_file` varchar(200) DEFAULT NULL,
  `c5_file` varchar(200) DEFAULT NULL,
  `c6_file` varchar(200) DEFAULT NULL,
  `c7_file` varchar(200) DEFAULT NULL,
  `c8_file` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `no_delete`
--

LOCK TABLES `no_delete` WRITE;
/*!40000 ALTER TABLE `no_delete` DISABLE KEYS */;
INSERT INTO `no_delete` VALUES (1,'nofile.jpg','nofile.jpg','nofile.jpg','nofile.jpg','nofile.jpg','nofile.jpg','nofile.jpg','nofile.jpg','nofile.jpg','nofile.jpg','nofile.jpg','nofile.jpg');
/*!40000 ALTER TABLE `no_delete` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-07-17 13:38:04
