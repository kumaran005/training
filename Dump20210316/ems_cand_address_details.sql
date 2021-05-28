-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: localhost    Database: ems
-- ------------------------------------------------------
-- Server version	8.0.21

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
-- Table structure for table `cand_address_details`
--

DROP TABLE IF EXISTS `cand_address_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cand_address_details` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cand_id` varchar(900) DEFAULT NULL,
  `address_type` varchar(900) DEFAULT NULL,
  `ps_address` varchar(900) DEFAULT NULL,
  `ps_pincode` varchar(900) DEFAULT NULL,
  `ps_state` varchar(900) DEFAULT NULL,
  `ps_district` varchar(900) DEFAULT NULL,
  `pm_address` varchar(900) DEFAULT NULL,
  `pm_pincode` varchar(900) DEFAULT NULL,
  `pm_state` varchar(900) DEFAULT NULL,
  `pm_district` varchar(900) DEFAULT NULL,
  `last_modified_time` varchar(900) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cand_address_details`
--

LOCK TABLES `cand_address_details` WRITE;
/*!40000 ALTER TABLE `cand_address_details` DISABLE KEYS */;
INSERT INTO `cand_address_details` VALUES (1,'Ponm1','same','1','12','1','1','1','1','1','1','1'),(2,'9998115812022960','1','','',' ','','','',' ','','04/29/2021 12:40:06'),(3,'884130743504965','1','','',' ','','','',' ','','04/29/2021 12:40:10'),(4,'7270005955338048','1','','',' ','','','',' ','','05/04/2021 16:52:49'),(5,'8986418840974686','1','','',' ','','','',' ','','05/04/2021 17:08:50'),(6,'2881792133897556','1','','',' ','','','',' ','','05/04/2021 17:30:58'),(7,'755715','1','','',' ','','','',' ','','05/04/2021 17:45:26'),(8,'RajK76163','1','','',' ','','','',' ','','05/04/2021 18:22:58'),(9,'RajK121538','1','','',' ','','','',' ','','05/04/2021 18:23:02'),(10,'Ponm327983','1','','',' ','','','',' ','','05/07/2021 17:36:57'),(11,'Raja909464','1','','',' ','','','',' ','','05/07/2021 17:39:53'),(12,'Ponm240872','1','','',' ','','','',' ','','05/07/2021 17:40:11'),(13,'Mupp406085','1','','',' ','','','',' ','','05/07/2021 17:40:47'),(14,'Mupp972982','1','','',' ','','','',' ','','05/07/2021 17:41:06'),(15,'Ponm964207','1','','',' ','','','',' ','','05/07/2021 18:20:15'),(16,'Raja361619','1','','',' ','','','',' ','','05/07/2021 18:26:34'),(17,'Mupp921320','1','','',' ','','','',' ','','05/07/2021 18:31:30'),(18,'Navi460138','1','','',' ','','','',' ','','05/07/2021 18:56:53'),(19,'Chan870550','1','','',' ','','','',' ','','05/07/2021 18:57:33'),(20,'Sara685710','1','','',' ','','','',' ','','05/07/2021 18:59:07'),(21,'Laxm792738','1','','',' ','','','',' ','','05/07/2021 19:00:21'),(22,'Mari499545','1','','',' ','','','',' ','','05/07/2021 20:02:11'),(23,'King232182','1','','',' ','','','',' ','','05/07/2021 20:07:11'),(24,'Subb559673','1','','',' ','','','',' ','','05/19/2021 10:22:40'),(25,'Aswa750843','1','','',' ','','','',' ','','05/19/2021 11:08:46'),(26,'Devi26769','1','','',' ','','','',' ','','05/19/2021 15:35:59'),(27,'Devi746720','1','','',' ','','','',' ','','05/19/2021 15:38:43'),(28,'Devi227257','1','','',' ','','','',' ','','05/19/2021 16:10:04'),(29,'Ponr551858','1','','',' ','','','',' ','','05/19/2021 16:11:41'),(30,'Rajn216412','1','','',' ','','','',' ','','05/19/2021 16:19:54');
/*!40000 ALTER TABLE `cand_address_details` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-19 16:36:36
