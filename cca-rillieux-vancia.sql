-- phpMyAdmin SQL Dump
-- version 5.2.1deb1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 29, 2024 at 02:15 PM
-- Server version: 10.11.6-MariaDB-0+deb12u1
-- PHP Version: 8.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cca-rillieux-vancia`
--

-- --------------------------------------------------------

--
-- Table structure for table `actualites`
--

CREATE TABLE `actualites` (
  `id_actualite` int(11) NOT NULL,
  `nom_actualite` varchar(255) DEFAULT NULL,
  `description_actualite` varchar(850) DEFAULT NULL,
  `date_actualite` datetime DEFAULT NULL,
  `image_actualite` varchar(200) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `actualites`
--

INSERT INTO `actualites` (`id_actualite`, `nom_actualite`, `description_actualite`, `date_actualite`, `image_actualite`) VALUES
(27, 'Voici la nouvelle équipe du comité', 'Voici notre nouvelle équipe de comité !\nDe gauche à  droite : Fabrice, Noëlle, Annabel, Jean-Jacques, Marie-Ange, André, Cyrille, Antonio et notre regretté barman Guy (absente de la photo notre lointaine Ilana)', '2024-01-09 11:58:36', '2687171090equipe.jpg'),
(67, 'Concours de sauvetage de PARAY LE MONIAL', 'Une partie de l\'équipe de sauvetage était de sortie pour participer au concours du club de Paray ce week-end.\r\nEnvie de découvrir la discipline ? Venez en parler à Cyrille ou Jean-Jacques :)', '2024-05-24 09:36:22', '7817997493IMG_2469.JPG'),
(76, 'C\'est la rentrée !!!! ', 'La club fait sa rentrée ! \r\n\r\nNous serons présent au forum des associations de Rillieux le samedi 07 septembre pour tous renseignements.\r\n\r\nToutes les inscriptions se feront par l\'intermédiaire d\'Annabel qui sera présente au club de 14h à 16h ce samedi 07 septembre.\r\n\r\nReprise des cours le samedi 14 septembre : \r\n* A 15h pour TOUS les chiens du groupe de Cyrille (même ceux du groupe de 14h)\r\n* les groupes de Fabrice et Annabel seront maintenus à 14h et 15h.\r\n\r\nA très vite !! ', '2024-09-04 10:20:06', '9729768703forum.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id_admin` int(11) NOT NULL,
  `nom_admin` varchar(255) DEFAULT NULL,
  `mdp_admin` varchar(255) DEFAULT NULL,
  `role_admin` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id_admin`, `nom_admin`, `mdp_admin`, `role_admin`) VALUES
(1, 'Ethan', '$2y$10$CkniP1vKbzYOiJqXdb0hJukVY7ypvbGOZKa69/GZ303KgVWzcREOi', 1),
(2, 'Noelle', '$2y$10$.AmwFcdVBDUPPvqNDH073.GR0xz5M95W.qldKDLRJySJ2D1.r2FUm', 1),
(5, 'jj', '$2y$10$dI9oVumL7pruM.JMV4BRxOj4bSaNV3hdA1EeuXDbn3.W6ZMJ0o/96', 1);

-- --------------------------------------------------------

--
-- Table structure for table `equipe`
--

CREATE TABLE `equipe` (
  `id_equipier` int(11) NOT NULL,
  `nom_equipier` varchar(255) DEFAULT NULL,
  `description_equipier` varchar(255) DEFAULT NULL,
  `photo_equipier` varchar(255) DEFAULT NULL,
  `ordre_equipier` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `equipe`
--

INSERT INTO `equipe` (`id_equipier`, `nom_equipier`, `description_equipier`, `photo_equipier`, `ordre_equipier`) VALUES
(68, 'Cyrille', 'Moniteur diplomé \"Ecole du chiot\" et moniteur sauvetage en compétition\nLa douceur, le calme, c\'est le chouchou de nos bébés poilus !', '8429331899cyrille.jpg', 3),
(67, 'Annabel', 'Monitrice chiens adultes et chiens compliqués, responsable des moniteurs et de la section obéissance, et secrétaire.\nDétrompez vous ce n\'est pas les chiens qu\'elle va éduquer, mais leurs maîtres !', '8630681708annabel.jpg', 2),
(66, 'André', 'Vice président\nUne connaissance du club sans pareil, c\'est notre sage.', '4293387310andre.jpg', 1),
(65, 'Jean-Jacques', 'Notre Président et responsable de la section Sauvetage\nPrésent depuis 2007 dans le club, il a créé la section sauvetage.\nToujours à votre écoute et de bons conseils !', '2447462495jean-jacques.jpg', 0),
(69, 'Fabrice', 'Moniteur chiens adultes\r\nAvec lui c\'est fou rire assuré pendant les cours !', '9449958571fabrice.jpg', 6),
(70, 'Noëlle', 'Trésorière\nIl paraît que sa chienne est la première de la classe en cours ;)', '3370807258noelle.jpg', 5),
(71, 'Antonio', 'Notre Mc Gyver\nC\'est notre homme de l\'ombre !\nUne réparation ? Du bricolage ? De l\'entretien ? Il sait tout faire !\nC\'est également un véritable homme de chien qui pourra être amene à  remplacer au pied levé un moniteur\nSi nécessaire', '5233834815antonio.jpg', 4);

-- --------------------------------------------------------

--
-- Table structure for table `horaires`
--

CREATE TABLE `horaires` (
  `id_horaire` int(11) NOT NULL,
  `temps_horaire` varchar(15) NOT NULL,
  `heure_horaire` varchar(20) NOT NULL,
  `nom_horaire` varchar(120) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `horaires`
--

INSERT INTO `horaires` (`id_horaire`, `temps_horaire`, `heure_horaire`, `nom_horaire`) VALUES
(34, 'Matin', '09 H 30', 'SAUVETAGE (test préalable pour intégrer la section)'),
(36, 'Matin', '09 H 30', 'OBEISSANCE (test préalable pour intégrer la section)'),
(37, 'Après Midi', '14 H 00', 'CHIOTS 1 ere année'),
(38, 'Après Midi', '15 H 00', 'CHIOTS 2 eme année'),
(39, 'Après Midi', '13 H 30 ET 15 H 00', 'CHIENS adultes (groupe à  définir par les moniteurs selon niveau et attente)');

-- --------------------------------------------------------

--
-- Table structure for table `tarifs`
--

CREATE TABLE `tarifs` (
  `id_tarif` int(11) NOT NULL,
  `nom_tarif` varchar(30) DEFAULT NULL,
  `tarif_premier_chien` float DEFAULT NULL,
  `tarif_deuxieme_chien` float DEFAULT NULL,
  `tarif_par_chien` float DEFAULT NULL,
  `ordre_tarif` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tarifs`
--

INSERT INTO `tarifs` (`id_tarif`, `nom_tarif`, `tarif_premier_chien`, `tarif_deuxieme_chien`, `tarif_par_chien`, `ordre_tarif`) VALUES
(1, 'Renouvellement 2eme année', 130, 65, 27, 1),
(2, 'Sociétaire 1ere année', 170, 85, 27, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `actualites`
--
ALTER TABLE `actualites`
  ADD PRIMARY KEY (`id_actualite`);

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id_admin`);

--
-- Indexes for table `equipe`
--
ALTER TABLE `equipe`
  ADD PRIMARY KEY (`id_equipier`);

--
-- Indexes for table `horaires`
--
ALTER TABLE `horaires`
  ADD PRIMARY KEY (`id_horaire`);

--
-- Indexes for table `tarifs`
--
ALTER TABLE `tarifs`
  ADD PRIMARY KEY (`id_tarif`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `actualites`
--
ALTER TABLE `actualites`
  MODIFY `id_actualite` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=87;

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id_admin` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `equipe`
--
ALTER TABLE `equipe`
  MODIFY `id_equipier` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=84;

--
-- AUTO_INCREMENT for table `horaires`
--
ALTER TABLE `horaires`
  MODIFY `id_horaire` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `tarifs`
--
ALTER TABLE `tarifs`
  MODIFY `id_tarif` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
