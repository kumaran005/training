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
-- Table structure for table `audit_trail`
--

DROP TABLE IF EXISTS `audit_trail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `audit_trail` (
  `id` int NOT NULL AUTO_INCREMENT,
  `event_name` varchar(900) DEFAULT NULL,
  `current_user` varchar(900) DEFAULT NULL,
  `audited_time` varchar(900) DEFAULT NULL,
  `user_agent` varchar(900) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `audit_trail`
--

LOCK TABLES `audit_trail` WRITE;
/*!40000 ALTER TABLE `audit_trail` DISABLE KEYS */;
INSERT INTO `audit_trail` VALUES (2,'Adding_Student_MBBS','Ponm1','03/22/2021 13:55:49','CPPONM55'),(18,'Adding_Student_MBBS','9998115812022960','04/29/2021 12:40:06','CAPONM72'),(19,'Adding_Student_MBBS','884130743504965','04/29/2021 12:40:10','CAPONM72'),(20,'Adding_Student_MBBS','7270005955338048','05/04/2021 16:52:49','CAPONM72'),(21,'Adding_Student_MBBS','8986418840974686','05/04/2021 17:08:50','CAPONM72'),(22,'Adding_Student_MBBS','2881792133897556','05/04/2021 17:30:58','CAPONM72'),(23,'Adding_Student_MBBS','755715','05/04/2021 17:45:26','CAPONM72'),(24,'Adding_Student_MBBS','RajK76163','05/04/2021 18:22:58','CAPONM72'),(25,'Adding_Student_MBBS','RajK121538','05/04/2021 18:23:02','CAPONM72'),(27,'Adding_Student_MBBS','Raja909464','05/07/2021 17:39:53','CAPONM72'),(28,'Adding_Student_MDMS','Ponm240872','05/07/2021 17:40:11','CAPONM72'),(29,'Adding_Student_MDMS','Mupp406085','05/07/2021 17:40:47','CAPONM72'),(30,'Adding_Student_MBBS','Mupp972982','05/07/2021 17:41:06','CAPONM72'),(31,'Adding_Student_MDMS','Ponm964207','05/07/2021 18:20:15','CAPONM72'),(32,'Adding_Student_MDMS','Raja361619','05/07/2021 18:26:34','CAPONM72'),(33,'Adding_Student_MDMS','Mupp921320','05/07/2021 18:31:30','CAPONM72'),(34,'Adding_Student_MDMS','Navi460138','05/07/2021 18:56:53','CAPONM72'),(35,'Adding_Student_MDMS','Chan870550','05/07/2021 18:57:33','CAPONM72'),(36,'Adding_Student_MDMS','Sara685710','05/07/2021 18:59:07','CAPONM72'),(37,'Adding_Student_MDMS','Laxm792738','05/07/2021 19:00:21','CAPONM72'),(38,'Adding_Student_NursingDiploma','Mari499545','05/07/2021 20:02:11','CAPONM72'),(39,'Adding_Student_NursingDiploma','King232182','05/07/2021 20:07:11','CAPONM72'),(40,'Adding_Student_MBBS','Subb559673','05/19/2021 10:22:40','CAPONM72'),(41,'Adding_Student_MBBS','Aswa750843','05/19/2021 11:08:46','CAPONM72'),(42,'Adding_Student_MBBS','Devi26769','05/19/2021 15:35:59','CAPONM72'),(43,'Adding_Student_MBBS','Devi746720','05/19/2021 15:38:43','undefined'),(44,'Adding_Student_AISSC','Devi227257','05/19/2021 16:10:04','undefined'),(45,'Adding_Student_MDMS','Ponr551858','05/19/2021 16:11:41','undefined'),(46,'Adding_Student_MBBS','Rajn216412','05/19/2021 16:19:54','undefined');
/*!40000 ALTER TABLE `audit_trail` ENABLE KEYS */;
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
