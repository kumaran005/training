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
-- Table structure for table `cand_relieving_details`
--

DROP TABLE IF EXISTS `cand_relieving_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cand_relieving_details` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cand_id` varchar(450) DEFAULT NULL,
  `relieved` varchar(450) DEFAULT NULL,
  `amount_refunded` varchar(450) DEFAULT NULL,
  `date_of_relieving` varchar(450) DEFAULT NULL,
  `date_of_reallotment` varchar(450) DEFAULT NULL,
  `college_name` varchar(450) DEFAULT NULL,
  `last_modified_time` varchar(450) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=375 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cand_relieving_details`
--

LOCK TABLES `cand_relieving_details` WRITE;
/*!40000 ALTER TABLE `cand_relieving_details` DISABLE KEYS */;
INSERT INTO `cand_relieving_details` VALUES (365,'Raja125635','No','','','','','06/13/2021 20:39:02'),(366,'news90315','Yes','','','','','06/12/2021 09:32:55'),(367,'blac780865','No',' ',' ',' ',' ','06/12/2021 12:19:55'),(368,'kuma240208','Yes','','','','','06/12/2021 12:27:55'),(369,'kuma681905','No',' ',' ',' ',' ','06/12/2021 12:26:53'),(370,'venk55947','No','','','','','06/14/2021 14:43:05'),(371,'Raja409544','No',NULL,NULL,NULL,NULL,'06/14/2021 16:45:36'),(372,'test629610','No',NULL,NULL,NULL,NULL,'06/14/2021 17:14:24'),(373,'Raja708158','No',NULL,NULL,NULL,NULL,'06/14/2021 18:33:09'),(374,'test135138','No',NULL,NULL,NULL,NULL,'06/14/2021 19:48:22');
/*!40000 ALTER TABLE `cand_relieving_details` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-15 14:00:40
