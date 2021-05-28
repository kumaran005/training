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
-- Table structure for table `cand_photo_details`
--

DROP TABLE IF EXISTS `cand_photo_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cand_photo_details` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cand_id` varchar(900) DEFAULT NULL,
  `cand_photo` varchar(900) DEFAULT NULL,
  `cand_sign` varchar(900) DEFAULT NULL,
  `cand_thumb` varchar(900) DEFAULT NULL,
  `cand_finger` varchar(900) DEFAULT NULL,
  `last_modified_time` varchar(900) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cand_photo_details`
--

LOCK TABLES `cand_photo_details` WRITE;
/*!40000 ALTER TABLE `cand_photo_details` DISABLE KEYS */;
INSERT INTO `cand_photo_details` VALUES (2,'Ponm1','','','','','03/22/2021 13:55:49'),(4,'Priy1','1616425879942Priya.jpg','1616425879942priya_sign.jpg','1616425879943priya_thumb.jpg','1616425879944priya_finger.jpg','03/22/2021 20:41:19'),(5,'Devi1','1616478018980Notes-1615983100233.jpg','1616478018982pexels-sam-lion-5710224.jpg','1616478019033Admission.png','1616478019037Admission.png','03/23/2021 11:10:19'),(6,'Raja1','1619535271626161951230284675515749.jpg','1619535233278WhatsApp Image 2021-04-21 at 14.14.22.jpeg','1619535271627161951230284675515749.jpg','1619535271628WhatsApp Image 2021-04-23 at 14.11.55.jpeg','03/23/2021 11:17:27'),(8,'Ravi2','1617290655845medical-design (1).pdf','1617290655899output-onlinepngtools (2).png','1617290655899output-onlinepngtools (2).png','1617290655900output-onlinepngtools (2).png','04/01/2021 20:54:15'),(17,'Rame2','1617371130571Foto-Kontakt_cpa.jpg','1617371130572cart.png','16173711305729fc8d5b0252f123bec601916d456a4dc.png','1617371130573background.jpg','04/02/2021 19:15:30'),(18,'9998115812022960','161968020618416196799258751619618266585download.jpg','161968020618416196799258751619618266585download.jpg','161968020618516196799258751619618266585download.jpg','161968020618516196799258751619618266585download.jpg','04/29/2021 12:40:06'),(19,'884130743504965','161968021093616196799258751619618266585download.jpg','161968021093616196799258751619618266585download.jpg','161968021093616196799258751619618266585download.jpg','161968021093716196799258751619618266585download.jpg','04/29/2021 12:40:10'),(20,'7270005955338048','nofile.jpg','nofile.jpg','nofile.jpg','nofile.jpg','05/04/2021 16:52:49'),(21,'8986418840974686','nofile.jpg','nofile.jpg','nofile.jpg','nofile.jpg','05/04/2021 17:08:50'),(22,'2881792133897556','16201296588101619618266585download.jpg','nofile.jpg','nofile.jpg','nofile.jpg','05/04/2021 17:30:58'),(23,'755715','nofile.jpg','nofile.jpg','nofile.jpg','nofile.jpg','05/04/2021 17:45:26'),(24,'RajK76163','nofile.jpg','nofile.jpg','nofile.jpg','nofile.jpg','05/04/2021 18:22:58'),(25,'RajK121538','nofile.jpg','nofile.jpg','nofile.jpg','nofile.jpg','05/04/2021 18:23:02'),(26,'Ponm327983','undefined','undefined','undefined','undefined','05/07/2021 17:36:57'),(27,'Raja909464','nofile.jpg','nofile.jpg','nofile.jpg','nofile.jpg','05/07/2021 17:39:53'),(28,'Ponm240872','undefined','undefined','undefined','undefined','05/07/2021 17:40:11'),(29,'Mupp406085','undefined','undefined','undefined','undefined','05/07/2021 17:40:47'),(30,'Mupp972982','nofile.jpg','nofile.jpg','nofile.jpg','nofile.jpg','05/07/2021 17:41:06'),(31,'Ponm964207','undefined','undefined','undefined','undefined','05/07/2021 18:20:15'),(32,'Raja361619','162039225407016196799258751619618266585download.jpg','undefined','undefined','undefined','05/07/2021 18:26:34'),(33,'Mupp921320','undefined','undefined','undefined','undefined','05/07/2021 18:31:30'),(34,'Navi460138','undefined','undefined','undefined','undefined','05/07/2021 18:56:53'),(35,'Chan870550','undefined','undefined','undefined','undefined','05/07/2021 18:57:33'),(36,'Sara685710','1620394761169unnamed (1).jpg','undefined','undefined','undefined','05/07/2021 18:59:07'),(37,'Laxm792738','undefined','undefined','undefined','undefined','05/07/2021 19:00:21'),(38,'Mari499545','undefined','undefined','undefined','undefined','05/07/2021 20:02:11'),(39,'King232182','undefined','undefined','undefined','undefined','05/07/2021 20:07:11'),(40,'Subb559673','nofile.jpg','nofile.jpg','nofile.jpg','nofile.jpg','05/19/2021 10:22:40'),(41,'Aswa750843','162140278665016196799258751619618266585download.jpg','nofile.jpg','nofile.jpg','nofile.jpg','05/19/2021 11:08:46'),(42,'Devi26769','nofile.jpg','nofile.jpg','nofile.jpg','nofile.jpg','05/19/2021 15:35:59'),(43,'Devi746720','nofile.jpg','nofile.jpg','nofile.jpg','nofile.jpg','05/19/2021 15:38:43'),(44,'Devi227257','undefined','undefined','undefined','undefined','05/19/2021 16:10:04'),(45,'Ponr551858','undefined','undefined','undefined','undefined','05/19/2021 16:11:41'),(46,'Rajn216412','nofile.jpg','nofile.jpg','nofile.jpg','nofile.jpg','05/19/2021 16:19:54');
/*!40000 ALTER TABLE `cand_photo_details` ENABLE KEYS */;
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
