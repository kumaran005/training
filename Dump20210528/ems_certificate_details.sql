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
-- Table structure for table `certificate_details`
--

DROP TABLE IF EXISTS `certificate_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `certificate_details` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cand_id` varchar(256) DEFAULT NULL,
  `cand_name` varchar(495) DEFAULT NULL,
  `all_certificate` varchar(255) DEFAULT NULL,
  `reg_no` varchar(255) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  `issue` varchar(255) DEFAULT NULL,
  `place` varchar(255) DEFAULT NULL,
  `Filename` varchar(700) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `certificate_details`
--

LOCK TABLES `certificate_details` WRITE;
/*!40000 ALTER TABLE `certificate_details` DISABLE KEYS */;
INSERT INTO `certificate_details` VALUES (1,'Ashi237304','Ashian','Admission Commitee Form','26272829','2021-05-28','dean','mdu','1622189439321book.png'),(2,'Ashi237304','Ashian','Conduct Certificate','98','2021-05-13','99','09','1622189439298account.png'),(3,'Ashi237304','Ashian','Community Certificate','78','2021-05-20','9000','tvl','1622189439266back.png'),(4,'Ashi237304','Ashian','Transfer Certificate','99','2021-05-17','000','8888','1622189439288admission.png'),(5,'Ashi237304','Ashian','Eligiblity Certificate','98','2021-05-13','999','999','1622189439305book.png'),(6,'Ashi237304','Ashian','Migration Certificate','9988','2021-05-13','99','66','1622189439308book.png'),(7,'Ashi237304','Ashian','Admission Certificate','999','2021-05-27','dean','tvl','1622189439316book.png'),(8,'Ashi237304','Ashian','Others','9999','2021-05-13','dean','chn','1622189439326book.png'),(9,'Ashi686950','Ashian','Community Certificate','78','2021-05-20','9000','tvl','1622189714305back.png'),(10,'Ashi686950','Ashian','Transfer Certificate','99','2021-05-17','000','8888','1622189714326admission.png'),(11,'Ashi686950','Ashian','Eligiblity Certificate','98','2021-05-13','999','999','1622189714340book.png'),(12,'Ashi686950','Ashian','Conduct Certificate','98','2021-05-13','99','09','1622189714334account.png'),(13,'Ashi686950','Ashian','Migration Certificate','9988','2021-05-13','99','66','1622189714347book.png'),(14,'Ashi686950','Ashian','Admission Certificate','999','2021-05-27','dean','tvl','1622189714358book.png'),(15,'Ashi686950','Ashian','Admission Commitee Form','26272829','2021-05-28','dean','mdu','1622189714373book.png'),(16,'Ashi686950','Ashian','Others','9999','2021-05-13','dean','chn','1622189714379book.png'),(17,'jeev833874','jeeva','Community Certificate','78','2021-05-07','9000','tvl','1622190411279book.png'),(18,'jeev833874','jeeva','Transfer Certificate','99','','000','8888','1622190411285account.png'),(19,'jeev833874','jeeva','Conduct Certificate','10111213','','99','09','1622190411288back.png'),(20,'337833','','Eligiblity Certificate','98','2021-05-20','999','999','1622190509466book.png'),(21,'337833','','Migration Certificate','9988','2021-05-19','99','66','1622190509492admission.png'),(22,'337833','','Admission Certificate','999','2021-05-07','dean','tvl','1622190509502book.png'),(23,'337833','','Admission Commitee Form','999','2021-05-02','dean','mdu','1622190509507assitant.png'),(24,'337833','','Others','30313233','2021-05-21','dean','chn','1622190509517back.png'),(25,'481921','','Eligiblity Certificate','98','2021-05-20','999','999','1622190914378book.png'),(26,'481921','','Migration Certificate','9988','2021-05-19','99','66','1622190914386admission.png'),(27,'481921','','Admission Certificate','999','2021-05-07','dean','tvl','1622190914401book.png'),(28,'481921','','Admission Commitee Form','999','2021-05-02','dean','mdu','1622190914403assitant.png'),(29,'481921','','Others','30313233','2021-05-21','dean','chn','1622190914411back.png'),(30,'roob659625','rooba','Community Certificate','','','','','1622193084689book.png'),(31,'roob659625','rooba','Transfer Certificate','','','','','1622193084707back.png'),(32,'devi255192','devikavya','Community Certificate','','','','','1622200558735account.png'),(33,'devi255192','devikavya','Transfer Certificate','','','','','162220055873814-white-grunge-brush-stroke-13.png');
/*!40000 ALTER TABLE `certificate_details` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-28 19:00:30
