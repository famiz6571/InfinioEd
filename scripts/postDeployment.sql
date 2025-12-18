
DO $$
BEGIN
    -- 1️⃣ ROOT MENUS FIRST
    IF NOT EXISTS (
        SELECT 1 FROM public.menus
        WHERE "menuId" = '814f97bc-d627-4977-adc0-267fc41e9882'::uuid
    ) THEN
        INSERT INTO public.menus
        ("menuId","name","path",icon,"order","isActive","parentId","createdAt","updatedAt")
        VALUES
        ('814f97bc-d627-4977-adc0-267fc41e9882',
         'Dashboard','/','TbLayoutDashboardFilled',
         1,true,NULL,
         NOW(),NOW());
    END IF;

    IF NOT EXISTS (
        SELECT 1 FROM public.menus
        WHERE "menuId" = '2568d938-29d2-45d4-8636-20d6caf84e47'::uuid
    ) THEN
        INSERT INTO public.menus
        ("menuId","name","path",icon,"order","isActive","parentId","createdAt","updatedAt")
        VALUES
        ('2568d938-29d2-45d4-8636-20d6caf84e47',
         'Configuration','',
         'BsFillGearFill',
         2,true,NULL,
         NOW(),NOW());
    END IF;

    -- 2️⃣ CHILD MENUS AFTER PARENT EXISTS
    IF NOT EXISTS (
        SELECT 1 FROM public.menus
        WHERE "menuId" = 'd57c82a6-d8d6-43ae-9596-263097045742'::uuid
    ) THEN
        INSERT INTO public.menus
        ("menuId","name","path",icon,"order","isActive","parentId","createdAt","updatedAt")
        VALUES
        ('d57c82a6-d8d6-43ae-9596-263097045742',
         'Users','/users',
         'FaUsersCog',
         1,true,
         '2568d938-29d2-45d4-8636-20d6caf84e47',
         NOW(),NOW());
    END IF;

    IF NOT EXISTS (
        SELECT 1 FROM public.menus
        WHERE "menuId" = 'd1474729-e363-4e40-8bc6-b7f50ccbddf1'::uuid
    ) THEN
        INSERT INTO public.menus
        ("menuId","name","path",icon,"order","isActive","parentId","createdAt","updatedAt")
        VALUES
        ('d1474729-e363-4e40-8bc6-b7f50ccbddf1',
         'Roles','/roles',
         'BiShieldQuarter',
         2,true,
         '2568d938-29d2-45d4-8636-20d6caf84e47',
         NOW(),NOW());
    END IF;

    IF NOT EXISTS (
        SELECT 1 FROM public.menus
        WHERE "menuId" = '7711e51f-cf8d-474c-911a-f26a95ec0308'::uuid
    ) THEN
        INSERT INTO public.menus
        ("menuId","name","path",icon,"order","isActive","parentId","createdAt","updatedAt")
        VALUES
        ('7711e51f-cf8d-474c-911a-f26a95ec0308',
         'Menus','/menus',
         'BiMenu',
         3,true,
         '2568d938-29d2-45d4-8636-20d6caf84e47',
         NOW(),NOW());
    END IF;
END
$$;


DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM public.roles WHERE "roleId" = 'd9e73c33-b735-4049-a226-e7aa1761f59c'::uuid) THEN
        INSERT INTO public.roles ("roleId","roleName",description,"isActive","createdAt","updatedAt")
        VALUES (
            'd9e73c33-b735-4049-a226-e7aa1761f59c'::uuid,
            'Admin',
            '',
            true,
            '2025-12-13 14:22:10.553+04',
            '2025-12-13 14:22:10.553+04'
        );
    END IF;
END
$$;


DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM public.role_menus 
                   WHERE "roleId" = 'd9e73c33-b735-4049-a226-e7aa1761f59c'::uuid 
                     AND "menuId" = '2568d938-29d2-45d4-8636-20d6caf84e47'::uuid) THEN
        INSERT INTO public.role_menus ("roleId","menuId")
        VALUES ('d9e73c33-b735-4049-a226-e7aa1761f59c'::uuid,'2568d938-29d2-45d4-8636-20d6caf84e47'::uuid);
    END IF;

    IF NOT EXISTS (SELECT 1 FROM public.role_menus 
                   WHERE "roleId" = 'd9e73c33-b735-4049-a226-e7aa1761f59c'::uuid 
                     AND "menuId" = '7711e51f-cf8d-474c-911a-f26a95ec0308'::uuid) THEN
        INSERT INTO public.role_menus ("roleId","menuId")
        VALUES ('d9e73c33-b735-4049-a226-e7aa1761f59c'::uuid,'7711e51f-cf8d-474c-911a-f26a95ec0308'::uuid);
    END IF;

    IF NOT EXISTS (SELECT 1 FROM public.role_menus 
                   WHERE "roleId" = 'd9e73c33-b735-4049-a226-e7aa1761f59c'::uuid 
                     AND "menuId" = '814f97bc-d627-4977-adc0-267fc41e9882'::uuid) THEN
        INSERT INTO public.role_menus ("roleId","menuId")
        VALUES ('d9e73c33-b735-4049-a226-e7aa1761f59c'::uuid,'814f97bc-d627-4977-adc0-267fc41e9882'::uuid);
    END IF;

    IF NOT EXISTS (SELECT 1 FROM public.role_menus 
                   WHERE "roleId" = 'd9e73c33-b735-4049-a226-e7aa1761f59c'::uuid 
                     AND "menuId" = 'd1474729-e363-4e40-8bc6-b7f50ccbddf1'::uuid) THEN
        INSERT INTO public.role_menus ("roleId","menuId")
        VALUES ('d9e73c33-b735-4049-a226-e7aa1761f59c'::uuid,'d1474729-e363-4e40-8bc6-b7f50ccbddf1'::uuid);
    END IF;

    IF NOT EXISTS (SELECT 1 FROM public.role_menus 
                   WHERE "roleId" = 'd9e73c33-b735-4049-a226-e7aa1761f59c'::uuid 
                     AND "menuId" = 'd57c82a6-d8d6-43ae-9596-263097045742'::uuid) THEN
        INSERT INTO public.role_menus ("roleId","menuId")
        VALUES ('d9e73c33-b735-4049-a226-e7aa1761f59c'::uuid,'d57c82a6-d8d6-43ae-9596-263097045742'::uuid);
    END IF;
END
$$;

DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM public.users WHERE email = 'john@example.com'
    ) THEN
        INSERT INTO public.users (
            "userId", email, "userName", "password", "name", phone, "phoneCode",
            "isActive", "createdAt", "updatedAt", "language", country, "roleId", "dateOfBirth"
        ) VALUES (
            '622def44-a2ca-4875-a4d1-908978afc8f6'::uuid,
            'john@example.com',
            'john94',
            '$2b$10$GrZoMIIO1y0qNj7OClWDausnKj5ysEBsn.lVgXYEY.sNcktZO7oQa',
            'John Doe',
            '488849003',
            '+971',
            true,
            '2025-12-12 19:26:55.627+04',
            '2025-12-17 13:53:34.118+04',
            'en',
            'AX',
            'd9e73c33-b735-4049-a226-e7aa1761f59c',
            '2007-01-01'
        );
    END IF;
END
$$;
