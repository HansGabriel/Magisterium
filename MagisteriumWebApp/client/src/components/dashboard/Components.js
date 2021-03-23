 dashboardContent = (Object.keys(profile).length > 0 && user.isTutor) ? (
                <Grid container spacing={24} justify="center">
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={styles.card}>
                            <CardActionArea component={Link} to={'/edit-profile'}>
                                <CardMedia
                                  component="img"
                                  alt="edit profile"
                                  className={classes.media}
                                  height="140"
                                  image={EditProfileImg}
                                />
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={styles.card}>
                            <CardActionArea component={Link} to={`/profile/${profile.handle}`}>
                                <CardMedia
                                  component="img"
                                  alt="view profile"
                                  className={classes.media}
                                  height="140"
                                  image={ViewProfileImg}
                                />
                            </CardActionArea>
                          </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={styles.card}>
                            <CardActionArea component={Link} to={'/profiles'}>
                                <CardMedia
                                  component="img"
                                  alt="find a tutor"
                                  className={classes.media}
                                  height="140"
                                  image={FindTutorImg}
                                />
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={styles.card}>
                            <CardActionArea onClick={this.onDeleteClick}>
                                <CardMedia
                                  component="img"
                                  alt="delete account"
                                  className={classes.media}
                                  height="140"
                                  image={DeleteAccountImg}
                                />
                            </CardActionArea>
                        </Card>
                    </Grid>
                    {/* show this if profile is dis/en -abled */}
                    {this.state.disabled ? (
                        <Grid item xs={12} sm={6} md={4}>
                            <Card className={styles.card}>
                                <CardActionArea onClick={e => this.onProfileSettingClick(e, 'enable')}>
                                    <CardMedia
                                    component="img"
                                    alt="enable account"
                                    className={classes.media}
                                    height="140"
                                    image={EnableProfileImg}
                                    />
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ) : (
                        <Grid item xs={12} sm={6} md={4}>
                            <Card className={styles.card}>
                                <CardActionArea onClick={e => this.onProfileSettingClick(e, 'disable')}>
                                    <CardMedia
                                        component="img"
                                        alt="disable account"
                                        className={classes.media}
                                        height="140"
                                        image={DisableProfileImg}
                                    />
                                </CardActionArea>
                            </Card>
                        </Grid>
                        )
                    }
                </Grid>
            ) : (Object.keys(studentprofile.profile).length > 0 && !user.isTutor) ? (
                    <React.Fragment>
                      <Button className="textPurple">
                        Cancel
                      </Button>
                      <Button variant="outlined" className="purpleDelete" autoFocus>
                        Delete Account
                      </Button>
                    </React.Fragment>
            ) : (user.isTutor) ? (
                <Grid container spacing={24} justify="center">
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={styles.card}>
                            <CardActionArea component={Link} to={'/create-profile'}>
                                <CardMedia
                                  component="img"
                                  alt="become a tutor"
                                  className={classes.media}
                                  height="140"
                                  image={BecomeTutorImg}
                                />
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={styles.card}>
                            <CardActionArea component={Link} to={'/profiles'}>
                                <CardMedia
                                  component="img"
                                  alt="find a tutor"
                                  className={classes.media}
                                  height="140"
                                  image={FindTutorImg}
                                />
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            ) : (
                  <Grid container spacing={24} justify="center">
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={styles.card}>
                            <CardActionArea component={Link} to={'/create-student-profile'}>
                                <CardMedia
                                  component="img"
                                  alt="register as student"
                                  className={classes.media}
                                  height="140"
                                  image={RegisterStudent}
                                />
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={styles.card}>
                            <CardActionArea component={Link} to={'/profiles'}>
                                <CardMedia
                                  component="img"
                                  alt="find a tutor"
                                  className={classes.media}
                                  height="140"
                                  image={FindTutorImg}
                                />
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
              );