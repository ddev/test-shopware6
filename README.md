# test-shopware6
Used by automated tests to test shopware6 installation

This repo was created with a `composer create` using the techniques at https://developer.shopware.com/docs/guides/installation/template.html and https://ddev.readthedocs.io/en/latest/users/quickstart/#shopware

Demo data was installed with the Admin Settings->System->First Run Wizard.

Source code tarball was then created with 
```
tar -czf .tarballs/shopware6_code.tgz --exclude=public/media --exclude=.tarballs .
```

Database dump was created with
```
ddev export-db --file=.tarballs/shopware6_db.sql.gz
```

Files tarball was created with
```
cd public/media && tar -czf ../../.tarballs/shopware6_files.tgz .
```
