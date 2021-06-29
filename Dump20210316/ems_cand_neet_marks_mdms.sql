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
-- Table structure for table `cand_neet_marks_mdms`
--

DROP TABLE IF EXISTS `cand_neet_marks_mdms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cand_neet_marks_mdms` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cand_id` varchar(500) DEFAULT NULL,
  `mbbs_marks` varchar(900) DEFAULT NULL,
  `pg_diplamo_marks` varchar(900) DEFAULT NULL,
  `mdms_marks` varchar(900) DEFAULT NULL,
  `neet_percentile` varchar(900) DEFAULT NULL,
  `last_modified_time` varchar(900) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cand_neet_marks_mdms`
--

LOCK TABLES `cand_neet_marks_mdms` WRITE;
/*!40000 ALTER TABLE `cand_neet_marks_mdms` DISABLE KEYS */;
INSERT INTO `cand_neet_marks_mdms` VALUES (55,'Raja125635','undefined','undefined','undefined','undefined','06/13/2021 20:39:02'),(56,'news90315','undefined','undefined','undefined','undefined','06/12/2021 09:32:55'),(57,'blac780865','','','','','06/12/2021 12:19:55'),(58,'kuma240208','','','','','06/12/2021 12:27:55'),(59,'kuma681905','','','','','06/12/2021 12:26:53'),(60,'venk55947','undefined','undefined','undefined','undefined','06/14/2021 14:43:05'),(61,'Raja409544','','','','','06/14/2021 16:45:36'),(62,'test629610','','','','','06/14/2021 17:14:24'),(63,'Raja708158','undefined','undefined','undefined','undefined','06/14/2021 18:33:09'),(64,'test135138','undefined','undefined','undefined','undefined','06/14/2021 19:48:22');
/*!40000 ALTER TABLE `cand_neet_marks_mdms` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-15 14:00:38
