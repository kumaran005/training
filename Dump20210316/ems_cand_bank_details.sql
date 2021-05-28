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
-- Table structure for table `cand_bank_details`
--

DROP TABLE IF EXISTS `cand_bank_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cand_bank_details` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cand_id` varchar(450) DEFAULT NULL,
  `account_no` varchar(450) DEFAULT NULL,
  `bank_name` varchar(450) DEFAULT NULL,
  `branch_name` varchar(450) DEFAULT NULL,
  `ifsc` varchar(450) DEFAULT NULL,
  `micr` varchar(450) DEFAULT NULL,
  `pan_no` varchar(450) DEFAULT NULL,
  `last_modified_time` varchar(450) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cand_bank_details`
--

LOCK TABLES `cand_bank_details` WRITE;
/*!40000 ALTER TABLE `cand_bank_details` DISABLE KEYS */;
INSERT INTO `cand_bank_details` VALUES (1,'Ponm1','1345222','TMB','Tiruneleveli','1531324','5416312312','16654513211','03/22/2021 13:55:49'),(17,'9998115812022960','','','','','','','04/29/2021 12:40:06'),(18,'884130743504965','','','','','','','04/29/2021 12:40:10'),(19,'7270005955338048','','','','','','','05/04/2021 16:52:49'),(20,'8986418840974686','','','','','','','05/04/2021 17:08:50'),(21,'2881792133897556','','','','','','','05/04/2021 17:30:58'),(22,'755715','','','','','','','05/04/2021 17:45:26'),(23,'RajK76163','','','','','','','05/04/2021 18:22:58'),(24,'RajK121538','','','','','','','05/04/2021 18:23:02'),(25,'Ponm327983','','','','','','','05/07/2021 17:36:57'),(26,'Raja909464','','','','','','','05/07/2021 17:39:53'),(27,'Ponm240872','','','','','','','05/07/2021 17:40:11'),(28,'Mupp406085','','','','','','','05/07/2021 17:40:47'),(29,'Mupp972982','','','','','','','05/07/2021 17:41:06'),(30,'Ponm964207','','','','','','','05/07/2021 18:20:15'),(31,'Raja361619','','','','','','','05/07/2021 18:26:34'),(32,'Mupp921320','','','','','','','05/07/2021 18:31:30'),(33,'Navi460138','','','','','','','05/07/2021 18:56:53'),(34,'Chan870550','','','','','','','05/07/2021 18:57:33'),(35,'Sara685710','','','','','','','05/07/2021 18:59:07'),(36,'Laxm792738','','','','','','','05/07/2021 19:00:21'),(37,'Mari499545','','','','','','','05/07/2021 20:02:11'),(38,'King232182','','','','','','','05/07/2021 20:07:11'),(39,'Subb559673','','','','','','','05/19/2021 10:22:40'),(40,'Aswa750843','','','','','','','05/19/2021 11:08:46'),(41,'Devi26769','','','','','','','05/19/2021 15:35:59'),(42,'Devi746720','','','','','','','05/19/2021 15:38:43'),(43,'Devi227257','','','','','','','05/19/2021 16:10:04'),(44,'Ponr551858','','','','','','','05/19/2021 16:11:41'),(45,'Rajn216412','','','','','','','05/19/2021 16:19:54');
/*!40000 ALTER TABLE `cand_bank_details` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-19 16:36:35
