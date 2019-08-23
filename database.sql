CREATE TABLE `users` (
  `user_id` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
  `user` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `group_id` smallint(5) unsigned DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user` (`user`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;

CREATE TABLE `events` (
  `event_id` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` smallint(5) unsigned NOT NULL,
  `title` varchar(50) NOT NULL,
  `time` time NOT NULL,
  `date` date NOT NULL,
  `shared_users` smallint(5) DEFAULT NULL,
  `group_id` smallint(5) unsigned DEFAULT NULL,
  PRIMARY KEY (`event_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `events_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=109 DEFAULT CHARSET=latin1;

CREATE TABLE `viewable` (
  `shared_user_id` smallint(5) unsigned NOT NULL,
  `owner_user_id` smallint(5) unsigned NOT NULL,
  PRIMARY KEY (`shared_user_id`),
  KEY `owner_user_id` (`owner_user_id`),
  CONSTRAINT `viewable_ibfk_1` FOREIGN KEY (`owner_user_id`) REFERENCES `users` (`user_id`),
  CONSTRAINT `viewable_ibfk_2` FOREIGN KEY (`shared_user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
