-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 10, 2018 at 12:35 PM
-- Server version: 10.1.34-MariaDB
-- PHP Version: 7.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nodejsdatabase`
--

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `players`
--

CREATE TABLE `players` (
  `id` int(5) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `position` varchar(255) NOT NULL,
  `number` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `user_name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `players`
--

INSERT INTO `players` (`id`, `first_name`, `last_name`, `position`, `number`, `image`, `user_name`) VALUES
(11, 'ardian', 'ibrahimi', 'Sulmues', 10, '', 'ardiancheee');

-- --------------------------------------------------------

--
-- Table structure for table `pwg_campaign`
--

CREATE TABLE `pwg_campaign` (
  `ID` int(11) NOT NULL,
  `title` varchar(500) NOT NULL,
  `description` mediumtext NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `created_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pwg_campaign`
--

INSERT INTO `pwg_campaign` (`ID`, `title`, `description`, `start_date`, `end_date`, `created_date`) VALUES
(10, 'asfadfsadsfsdafdaasdas', 'dsfasdfdafafdafsd', '2018-10-26', '2018-11-14', '2018-10-12 07:58:00'),
(12, 'Qendresa', 'apfjksadfopijkfdoaij', '2018-10-09', '2018-11-21', '2018-10-26 07:46:45');

-- --------------------------------------------------------

--
-- Table structure for table `pwg_conditions`
--

CREATE TABLE `pwg_conditions` (
  `ID` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `type` varchar(200) NOT NULL,
  `default_value` varchar(255) NOT NULL,
  `visibility` varchar(255) NOT NULL,
  `campaign_ref` int(11) NOT NULL,
  `effective_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='Table consisting of user defined conditions.';

--
-- Dumping data for table `pwg_conditions`
--

INSERT INTO `pwg_conditions` (`ID`, `name`, `type`, `default_value`, `visibility`, `campaign_ref`, `effective_date`) VALUES
(7, 'sdaffdssdf', 'Float', 'sadfsadf', 'IN/OUT', 9, '0000-00-00'),
(8, 'sadfdasff', 'String', 'dsfsdfa', 'OUT', 9, '2018-10-22'),
(9, 'test', 'String', 'test', 'IN', 9, '2018-10-22'),
(10, 'testing ', 'String', 'asdasd', 'IN/OUT', 10, '2018-10-30'),
(11, 'isNumber', 'Boolean', 'false', 'OUT', 9, '2018-10-17'),
(12, 'asdasdad', 'Integer', '2', 'IN', 10, '2018-10-22'),
(13, '32032', 'String', '20', 'OUT', 10, '2018-10-23');

-- --------------------------------------------------------

--
-- Table structure for table `pwg_error_logs`
--

CREATE TABLE `pwg_error_logs` (
  `ID` int(11) NOT NULL,
  `Title` mediumtext NOT NULL,
  `message` longtext NOT NULL,
  `function` varchar(250) NOT NULL,
  `created_date` date NOT NULL,
  `paramaters` varchar(2500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `pwg_operations`
--

CREATE TABLE `pwg_operations` (
  `ID` int(11) NOT NULL,
  `name` varchar(2000) NOT NULL,
  `campaign_refs` longtext NOT NULL,
  `parameters` longtext NOT NULL,
  `scripts` longtext NOT NULL,
  `effective_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='Table consisting of user defined operation';

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `players`
--
ALTER TABLE `players`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pwg_campaign`
--
ALTER TABLE `pwg_campaign`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `pwg_conditions`
--
ALTER TABLE `pwg_conditions`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `pwg_error_logs`
--
ALTER TABLE `pwg_error_logs`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `pwg_operations`
--
ALTER TABLE `pwg_operations`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `players`
--
ALTER TABLE `players`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `pwg_campaign`
--
ALTER TABLE `pwg_campaign`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `pwg_conditions`
--
ALTER TABLE `pwg_conditions`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `pwg_error_logs`
--
ALTER TABLE `pwg_error_logs`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pwg_operations`
--
ALTER TABLE `pwg_operations`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
